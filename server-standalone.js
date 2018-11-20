const express = require('express'), app = express();
const fs = require('fs');
const url = require('url');
const formidable = require('formidable');
const systempath = require('path');
const os = require('os');
const mime = require('mime-types');
const request = require('request');
const HTMLParser = require('node-html-parser');
const cheerio = require('cheerio');
const screenShotHtml = require("node-server-screenshot");

//duong dan temp cua he thong truong hop khong co quyen truy cap thu muc
const tempdir = os.tmpdir();
//tao duong dan luu tru file upload post
const dirUpload = 'upload_files';
if (!fs.existsSync(dirUpload)) {
    fs.mkdirSync(dirUpload);
}

//tao duong dan luu tru file anh chup man hinh
const dirScreenShot = 'screen_shot_images';
if (!fs.existsSync(dirScreenShot)) {
    fs.mkdirSync(dirScreenShot);
}

//dang ky duong dan tuyet doi co dinh cho ionic
app.use(express.static('www'));


// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', (req, res, next) => {
    const reqUrlString = req.url;
    //const reqOriginalPath = req.originalUrl;
    const method = req.method;
    const pathName = decodeURIComponent(url.parse(reqUrlString, true, false).pathname);

    const reqFullHost = req.protocol + '://' + req.get('host');

    //encodeURIComponent('אובמה') // %D7%90%D7%95%D7%91%D7%9E%D7%94 
    //decodeURIComponent('%D7%90%D7%95%D7%91%D7%9E%D7%94') // אובמה

    if ("POST" == method) {

        //neu duong dan post co ten la upload file thi xu ly upload
        if (pathName == '/file_upload') {

            var form = new formidable.IncomingForm();
            //luu tru file vao dia 
            form.parse(req, function (err, fields, files) {
                //filetoupload -- la ten cua form post len
                //neu khong co ten nay thi se bi loi o day
                /* console.log("bien nhan duoc err:");
                console.log(err);
                console.log("bien nhan duoc fields:");
                console.log(JSON.stringify(fields));
                console.log("bien nhan duoc files:"); */
                //console.log(JSON.stringify(files));
                //console.log(JSON.stringify(files));
                //quy dinh file name = "file2Upload"
                if (files.file2Upload
                    && files.file2Upload.path  //full path filename
                    && files.file2Upload.name  //filename
                    && files.file2Upload.type  //mintype
                    && files.file2Upload.size  //size
                ) {
                    let curdatetime = new Date().toISOString().replace(/T/, '_').replace(/\..+/, '').replace(/-/g, '').replace(/:/g, '');

                    var filenameStored = dirUpload + systempath.sep
                        + curdatetime + "_"
                        + files.file2Upload.size + "_"
                        + files.file2Upload.name;
                    fs.createReadStream(files.file2Upload.path)
                        .pipe(fs.createWriteStream(filenameStored))
                        ;

                    res.writeHead(200, { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        file_name: filenameStored,
                        command_id: 'upload',
                        status: 'ok',
                        message: 'ban da upload file thanh cong!'
                    }));
                } else {
                    res.writeHead(404, { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' });
                    res.end('{"command_id": "upload", "status": "nok", "message": "No file uploaded!"}');
                }
                //////////////////////////
                /* var oldpath = files.filetoupload.path;
                
                var newPath0 = files.filetoupload.path.substring(0, files.filetoupload.path.lastIndexOf(systempath.sep));
                ///////////////////////////////////////////////
                //'uploadfiles/' 

                //luu vao thu muc cua lap trinh uploadfiles
                var newpath = 'file_upload/' + files.filetoupload.name;
                fs.rename(oldpath, newpath, function (err) {
                    if (err) {
                        //luu vao thu muc mat dinh cua os
                        newpath = newPath0 + '/' + files.filetoupload.name;
                        fs.rename(oldpath, newpath, function (err2) {
                            if (err2) {
                                res.end(JSON.stringify(err2));
                            } else {
                                res.end('{"file_name": "' + newpath + '", "command_id": "upload", "status": "ok", "message": "ban da upload file thanh cong!"}');
                            }
                        });

                    } else {
                    }
                }); */
                ///////////////////////////////////////////////
            });

        } else {
            //neu duong dan khac thi xu ly post binh thuong
            var postData = '';
            // Get all post data when receive data event.
            req.on('data', (chunk) => {
                postData += chunk;

            });

            // When all request post data has been received.
            req.on('end', () => {

                //console.log('Du lieu nhan duoc : load any');
                //console.log(postData);

                var postDataObject = JSON.parse(postData);

                var commandId = postDataObject.command_id;
                res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });

                if ('login' == commandId) {
                    res.end('{"command_id": "' + commandId + '", "status": "ok", "message": "ban da login thanh cong!"}');
                } else {
                    res.end('{"command_id": "' + commandId + '", "status": "nok", "message": "khong thanh cong"}');
                }
            })
        }
    } else if ("GET" == method) {

        if (pathName == '/test_upload') {

            res.writeHead(200, { 'Content-Type': 'text/html' });
            //gui den duong dan file_upload nhe
            //neu muon chuyen thanh http://host/file_upload
            res.write('<form action="' + reqFullHost + '/file_upload" method="post" enctype="multipart/form-data">');
            res.write('<input type="text" name="user" value="cuongdq"><br>');
            res.write('<input type="file" name="file2Upload" multiple><br>');
            res.write('<input type="submit">');
            res.write('</form>');

            return res.end();

        } else if (pathName.indexOf('/file_upload/') >= 0) {
            //Lay file tu thu muc temp cua he thong
            //truy van co dang 
            //GET /file_upload/<tmp/fix>/<tenfile>
            let isTmp = pathName.substring(13,16)==='tmp';
            let isScr = pathName.substring(13,16)==='scr';
            let imgDir = isTmp ? tempdir : isScr? dirScreenShot : dirUpload;

            //console.log(pathName.substring(13,16));
            var fileRead = imgDir + systempath.sep + pathName.substring(17);
            var contentType = 'image/jpeg';
            if (mime.lookup(pathName)) contentType = mime.lookup(pathName);
            //console.log("contentType = "  + contentType);
            //load image
            fs.readFile(fileRead, { flag: 'r' }, function (error, data) {
                if (!error) {
                    res.writeHead(200, { 'Access-Control-Allow-Origin': '*', 'Content-Type': contentType });
                    res.end(data);
                } else {
                    res.writeHead(404, { 'Access-Control-Allow-Origin': '*' });
                    res.end(JSON.stringify(error));
                }
            });

        } else if (pathName.indexOf('/api_samples/') >= 0) {
            // get file api from api_sample
            const fileName = pathName;
            fileName = "api_samples" + systempath.sep + fileName.substr(13);

            fs.readFile(fileName, { encoding: 'utf-8', flag: 'r' }, function (error, data) {
                if (!error) {
                    res.writeHead(200, { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' });
                    res.end(data);
                } else {
                    res.writeHead(404, { 'Access-Control-Allow-Origin': '*' });
                    res.end(JSON.stringify(error));
                }
            });
        } else if (pathName.indexOf('/url_request/') >= 0) {
            // get link su dung nodejs
            //lay chuoi request thuc su link
            const urlRequest = pathName.substr(13);

            request(urlRequest, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    //console.log(body) // Print the google web page.
                    //doc body lay mot anh dai dien?? icon?? 
                    res.writeHead(200, { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/html' });
                    res.end(body);
                } else {
                    //console.log(error);
                    res.writeHead(404, { 'Access-Control-Allow-Origin': '*' });
                    res.end(JSON.stringify(error));
                }
            });

        } else if (pathName.indexOf('/url_request_image/') >= 0) {
            // get link su dung nodejs
            //lay chuoi request thuc su link
            const urlRequest = pathName.substr(19);

            let curdatetime = new Date().toISOString().replace(/T/, '_').replace(/\..+/, '').replace(/-/g, '').replace(/:/g, '');
            const screenShotFilename = dirScreenShot
                + systempath.sep
                + curdatetime + "_" + "screenshot_"
                + decodeURIComponent(urlRequest).replace(/\//g, '_').replace(/:/g, '')
                + ".png";
            //chup 1 anh cua duong dan luu vao screen_shot_images
            screenShotHtml.fromURL(urlRequest, screenShotFilename,{width:327,height:245}, (err) => { });
            //--------------  

            request(urlRequest, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    //console.log(body) // Print the google web page.
                    //doc body lay mot anh dai dien?? icon?? 
                    res.writeHead(200, { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' });
                    //loc lay anh dai dien dau tien va tra ve json anh
                    const root = HTMLParser.parse(body);
                    const imgHtml = (root.querySelector('img') ? root.querySelector('img').toString() : '<img src="">');
                    const $ = cheerio.load(imgHtml);
                    const url_img = $('img').attr('src');
                    const title = (root.querySelector('title') ? root.querySelector('title').text : '');
                    const h1 = (root.querySelector('h1') ? root.querySelector('h1').text : '');
                    const h2 = (root.querySelector('h2') ? root.querySelector('h2').text : '');

                    res.end(JSON.stringify(
                        {
                            image: (url_img.indexOf("://") > 0 ? url_img : urlRequest + "/" + url_img),
                            image_inter: url_img,
                            protocol: url_img.substring(0, url_img.indexOf("://")),
                            host: urlRequest,
                            path: pathName,
                            title: title,
                            h1: h1,
                            h2: h2,
                            screen_shot: screenShotFilename
                        }
                    ));
                } else {
                    //console.log(error);
                    res.writeHead(404, { 'Access-Control-Allow-Origin': '*' });
                    res.end(JSON.stringify(error));
                }
            });

        } else if (pathName.indexOf('/uploaded_images/') >= 0) {
            // list toan bo cac file upload len sys.tmp kieu anh thoi
            let isTmp = pathName.substring(17) == 'tmp';
            let isScr = pathName.substring(17) == 'scr';
            let imgDir = isTmp ? tempdir : isScr? dirScreenShot : dirUpload;
            let imgLink = isTmp ? 'tmp' : isScr? 'scr' : 'fix';

            var list_images = [];
            var responseJson = { "results": "[]", "status": "OK", "message": "List image uploaded OK!" };

            fs.readdir(imgDir + systempath.sep, (err, files) => {
                if (!err && files) {
                    let i = 0;
                    files.forEach(file => {
                        //console.log(file);
                        //console.log(mime.lookup(file));
                        if (mime.lookup(file)
                            &&
                            mime.lookup(file).indexOf('image/') >= 0) {
                            list_images.push({
                                "id": ++i,
                                "content_type": mime.lookup(file),
                                "src_url": reqFullHost
                                    + "/file_upload/"
                                    + imgLink + "/"
                                    + file
                            });
                        }
                    })
                } else {
                    //loi doc thu muc
                    responseJson = { "status": "NOK", "message": '"' + err + '"' };
                }

                //tra ket qua ve cho client neu khong thi no doi miet
                if (list_images.length > 0) {
                    res.writeHead(200, { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' });
                    //res.end("Server had " + list_image.length);
                    responseJson["results"] = list_images;
                    res.end(JSON.stringify(responseJson));
                } else {
                    res.writeHead(404, { 'Access-Control-Allow-Origin': '*' });
                    res.end(JSON.stringify(responseJson));
                }

            });
        } else if (pathName.indexOf('/test_list_images/') >= 0) {
            // list toan bo cac file upload len sys.tmp kieu anh thoi
            let isTmp = pathName.substring(18) == 'tmp';
            let isScr = pathName.substring(18) == 'scr';
            let imgDir = isTmp ? tempdir : isScr? dirScreenShot : dirUpload;
            let imgLink = isTmp ? 'tmp' : isScr? 'scr' : 'fix';

            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readdir(imgDir + systempath.sep, (err, files) => {
                if (!err && files) {
                    let i = 0;
                    files.forEach(file => {
                        if (mime.lookup(file)
                            &&
                            mime.lookup(file).indexOf('image/') >= 0) {
                            res.write("<p>" + "<img title='" + file + "' " + "alt='" + (++i) + "' " +
                                " src='" + reqFullHost + "/file_upload/"
                                + imgLink + "/"
                                + file + "' "
                                + " width='300' height='200' />" + "</p>");
                        }
                    })
                } else {
                    res.write("<p>" + JSON.stringify(err) + "</p>");
                }
                return res.end();
            });
        } else {
            //console.log(pathName);
            //lay file tu public directory
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            next();
        }
    }

});

app.set('port', process.env.PORT || 8888);

app.listen(app.get('port'), function () {
    console.log("Server (" + os.platform() + "; " + os.arch() + ") is started with PORT: " + + app.get('port')
        + "\n tempdir: " + os.tmpdir()
        + "\n " + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    );
});