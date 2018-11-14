var express = require('express'),app = express();

var fs = require('fs');
var url = require('url');
var formidable = require('formidable');
var systempath = require('path');
var os = require('os');
var tempdir = os.tmpdir();
var mime = require('mime-types');

app.use(express.static('www'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', (req, res, next) => {
    var reqUrlString = req.url;
    var method = req.method;
    var pathName = url.parse(reqUrlString, true, false).pathname;

    if ("POST" == method) {

        //neu duong dan post co ten la upload file thi xu ly upload
        if (pathName == '/fileupload') {
            
            var form = new formidable.IncomingForm();
            //luu tru file vao dia 
            form.parse(req, function (err, fields, files) {
                //filetoupload -- la ten cua form post len
                //neu khong co ten nay thi se bi loi o day
                console.log("bien nhan duoc:");
                console.log(files);

                var oldpath = files.filetoupload.path;
                var newPath0 = files.filetoupload.path.substring(0, files.filetoupload.path.lastIndexOf(systempath.sep));
                ///////////////////////////////////////////////
                //'uploadfiles/' 
                res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });

                //luu vao thu muc cua lap trinh uploadfiles
                var newpath = 'uploadfiles/' + files.filetoupload.name;
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
                        res.end('{"file_name": "' + newpath + '", "command_id": "upload", "status": "ok", "message": "ban da upload file thanh cong!"}');
                    }
                });
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

                console.log('Du lieu nhan duoc : load any');
                console.log(postData);

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

        if (pathName == '/testupload') {

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
            res.write('<input type="file" name="filetoupload"><br>');
            res.write('<input type="submit">');
            res.write('</form>');

            return res.end();


        } else if (pathName.indexOf('/tmp/') >= 0) {

            var fileRead = tempdir + '/' + pathName.substring(pathName.lastIndexOf(systempath.sep)+1);
            var contentType = 'image/jpeg';
            if (mime.lookup(pathName)) contentType = mime.lookup(pathName);
            //console.log("contentType = "  + contentType);
            //load image
            fs.readFile(fileRead, { flag: 'r' }, function (error, data) {
                if (!error) {
                    res.writeHead(200, { 'Access-Control-Allow-Origin': '*','Content-Type': contentType});
                    res.end(data);
                } else {
                    res.writeHead(404, { 'Access-Control-Allow-Origin': '*' });
                    res.end(JSON.stringify(error));
                }
            });

        } else if (pathName.indexOf('/api/') >= 0){
            // get
            var reqUrlString = req.url;
            var urlObject = url.parse(reqUrlString, true, false);

            var fileName = urlObject.pathname;
            fileName = fileName.substr(5);

            fs.readFile(fileName, { encoding: 'utf-8', flag: 'r' }, function (error, data) {
                if (!error) {
                    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
                    res.end(data);
                } else {
                    res.writeHead(404, { 'Access-Control-Allow-Origin': '*' });
                    res.end(JSON.stringify(error));
                }
            });
        } else {
            //lay file tu public directory
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            next();
        }
    }

    
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log("Server (" + os.platform() + "; " + os.arch() + ") is started with : " +  + app.get('port') + " tempdir:" + os.tmpdir());
});