

De cai ionic hoac thanh phan cua angular len server heroku:
1. Su dung script de install cac thanh phan va script.
2. Truong hop da duoc dich sang www lam public, ta su dung express server de chay thu muc www
3. khai bao Procfile, co noi dung web: node server.js 
4. hoac npm start (se goi script start trong package.json)

Chu y quang trong: 
- De thu muc www duoc upload len heroku ta phai XOA DONG www trong file: .gitignore
- De cai tu dong len heroku ta viet noi dung cua file: herokuDeploy.sh de su dung lenh linux chuyen len

- Neu khong can cordova thi chay:
> npm run ionic:build --prod
Lenh tren se dich ra thu muc www, push thu muc www nay len server la chay duoc

- New su dung cordova trong browser chay plugin: 
> ionic cordova platform add browser
> ionic cordova build browser --prod --release


# Tao server.js de tao node 
npm install http fs url formidable path os mime-types node-html-parser cheerio
- http la server
- fs la doi tuong doc, ghi xuong dia
- url la doi tuong xu ly url 
- formidable la doi tuong xu ly formdata de lay du lieu tu form 
- path la doi tuong lay duong dan he thong
- os la doi tuong lay thong tin he thong
- mime-types la doi tuong chuyen doi dang file sang content_type bao cho header 
biet de ung dung tai client goi ung dung lien quan mo file truc tiep ra
- node-html-parser cheerio la hai thanh phan ho tro parse html 

# Noi dung file server.js thuc thi cac nhiem vu cua mot webserver gom:
- server web html
- server post form
- server post json
- server get file
- server get www cua ionic


-- npm install @ionic/app-scripts@latest --save-dev



#Cac duong dan:

#1. su dung cho ionic default GET/
GET /wwww/*

#2. gui multiple file va params any bang form len test
POST /any-form

#3. gui file bang form len upload
POST /file-upload

#4. gui len serer chuoi json POST
#{command_id:"lenh gi"}
POST /json-data


#5. Mo trang web test upload file don gian xem server hoat dong
GET /test-upload

#6. su dung kiem tra file upload len luu vao 
# temp, screen_shot_image, upload_files
#dowload file from os.temp();
GET /file-upload/<tmp|scr|fix>/<tenfile>

#7. Dowload file mau API bat ky duoi dang text json
#cac mau duoc khai bao truoc bang ten file
GET /api-samples/*<tenfile trong thu muc __dirname + api_samples>

#8. Gia lap lam proxy server get request url from server
GET /url-request/<url can truy van>

#9. Lay thong tin anh dai dien va 
# tom luot cua trang web, bo sung capture screen
GET /url-request-image/<url can truy van>

#10. Dowload danh sach image duoc upload len 
# os.temp()|screenshot|upload;
GET /uploaded-images/<tmp|scr|fix/*>

#11. View list image co trong server 
GET /test-list-images/<tmp|scr|fix/*>


#12 Neu truy cap khong dung dia chi
# server tra ve YOUR ARE STUPID!


#Tao file ionic moi:
ionic g page news

#Tao key cho https co 3 buoc dung lenh openssl
1. Tao key file voi:
openssl genrsa -out <private key filename> <length of key>

ex:
openssl genrsa -out ./cert/my-private-public-key.pem 4096

--> file sinh ra la khoa rieng cua he thong su dung de ma hoa
--> trong khoa rieng nay chua: private_key + public_key theo RSA

2. Tao mot request certificate chua thong tin ca nhan cua he thong
openssl req -new -key <private key filename> -out <certificate request filename>

ex:
openssl req -new -key ./cert/privatekey.pem -out ./cert/my-com-req-cert.csr

--> sinh ra mot file yeu cau xac nhan to chuc, thiet bi, theo key
--> thong tin cua file chua thong tin cua to chuc + public key 
--> ma hoa boi private key chi giai ma bang public key kem theo trong file nay

3. Sau khi co file request certificate se gui den trung tam xac nhan trung gian de ho tao cho ta file xac nhan. Chứa thông tin của public_key của ta, public key của đơn vị xác nhận uy tín, thông tin của đơn vị đã khai ở bước 2.
Do tự xác nhận trên máy nên ta dùng luôn công cụ để tạo ra file certificate. Lệnh
To generate a temporary certificate which is good for 365 days, issue the following command:
To generate a temporary certificate which is good for 365 days, issue the following command:
openssl x509 -req -days <so luong ngay> -in <file yeu cau buoc 2> -signkey <file private key cua to chuc (midle_key.perm) xac nhan OR self buoc 1> -out <ten file certificate da gan ma chung thuc>
ex:
openssl x509 -req -days 365 -in ./cert/my-com-req-cert.csr -signkey ./cert/my-private-public-key.pem -out ./cert/my-certificate.pem


#Mau tao:
openssl genrsa -out ./cert/my-private-public-key.pem 4096
openssl req -new -key ./cert/privatekey.pem -out ./cert/my-com-req-cert.csr
openssl x509 -req -days 365 -in ./cert/my-com-req-cert.csr -signkey ./cert/my-private-public-key.pem -out ./cert/my-certificate.pem


# Sử dụng Database để lưu trữ
//tao database luu tru mang xa hoi
const db = require('./database-service');


# Thêm phần login mạng xã hội hoặc local từng chức năng
//ham bao dam login xac thuc tung chuc nang
function ensureAuthenticated(req, res, next) {
    //ham nay neu duoc xac thuc thi cho di tiep
  if (req.isAuthenticated()) { return next(); }
  //neu khong duoc xac thuc thi tra ve lai duong dan trang chu
  res.redirect('/')
}

function ensureAdminAuthenticated(req, res, next) {
    //ham nay neu duoc xac thuc thi cho di tiep
    //ham kiem tra xac thuc se goi deserializeUser
  if (req.isAuthenticated()
        &&req.user
        &&req.user.role==99
        ) { return next(); }
  //neu khong duoc xac thuc thi tra ve lai duong dan trang chu
  res.redirect('/')
}


# Điều khiển lỗi trả về, theo ý lập trình
//xu ly cac loi khac nhau
app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

function logErrors (err, req, res, next) {
    //console.error('\n logErrors:\n')
    //console.error(err)
    next(err)
}

function clientErrorHandler (err, req, res, next) {
    //console.error('\n clientErrorHandler:\n')
    //console.error(err)
    
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' })
    } else {
        next(err)
    }
}

function errorHandler (err, req, res, next) {
    //console.error('\n errorHandler:\n')
    //console.error(err)
    res.end(JSON.stringify(err))
  }



# Phòng chống tấn công DDOS như sau
const DDDoS = require('dddos');
const db = require('./database-service');
//--------------------------------------------
//kiem tra ngo vao phong chong tan cong
//neu cung 1 dia chi vao nhieu thi tu choi ngay
server.use(function (req, res, next) {
    //lay cac thong tin request ban dau de luu vao csdl

    //doan lay thong tin cac bien su dung sau nay
    reqUrlString = req.url;
    reqOriginalPath = req.originalUrl;
    method = req.method;
    pathName = decodeURIComponent(url.parse(reqUrlString, true, false).pathname);
    reqFullHost = req.protocol + '://' + req.get('host');
    //encodeURIComponent('אובמה') // %D7%90%D7%95%D7%91%D7%9E%D7%94 
    //decodeURIComponent('%D7%90%D7%95%D7%91%D7%9E%D7%94') // אובמה
    //console.log('from:' + req.ip + '\n' + method +" " + reqFullHost + '/' + pathName);
    
    //----- LUU LOG FILE BEFORE-----
    var log = {
        name: 'LOG_ACCESS',
        cols: [{
            name: 'IP',
            value: req.ip
        },
        {
            name: 'ACCESS_INFO',
            value: method + " " + reqFullHost + '/' + pathName
        },
        {
            name: 'DEVICE_INFO',
            value: req.headers["user-agent"]
        }
        ],
        wheres: [{
            name: 'IP',
            value: req.ip
        }]
    };
    db.insert(log)
      .then(data => {
          //console.log(data)
        }
      )
      .catch(err=>{
          db.runSql("update LOG_ACCESS set LOG_COUNT=LOG_COUNT+1 where IP='"+req.ip+"'")
          .then(data=>{
              //console.log(data)
          })
      });
    //-----------------------------------------
    //tra den phien tiep theo
    next();
});



//CHONG TAN CONG DDDOS
//ngan chan truy cap ddos tra ket qua cho user neu truy cap tan suat lon
let ddos = new DDDoS({
    errorData: "Hãy bình tĩnh, đợi tý đi!",
    //Data to be passes to the client on DDoS detection. Default: "Not so fast!".
    errorCode: 429,
    //HTTP error code to be set on DDoS detection. Default: 429 (Too Many Requests)
    weight: 1,
    maxWeight: 10,
    checkInterval: 1000,
    rules: [
        { //cho phep trang chu truy cap 16 yeu cau / 1 giay
            string: '/',
            maxWeight: 30
        },
        { // Allow 4 requests accessing the application API per checkInterval 
            regexp: "^/api.*",
            flags: "i",
            maxWeight: 4,
            queueSize: 4 // If request limit is exceeded, new requests are added to the queue 
        },
        { // Chi cho phep 1 request trong 1 giay thoi, neu qua se bao not so fast 
            string: "/test-upload",
            maxWeight: 1
        },
        { // Allow up to 16 other requests per check interval.
            regexp: ".*",
            maxWeight: 16
        }
    ]
});

server.use(ddos.express('ip', 'path'));

/**
 * CAC CONTENT_TYPE TRA VE CLIENT LUU Y NHU SAU:
 * 1. TRA JSON KET QUA DUNG: DEFAULT LA UTF-8
 * res.writeHead(200, { 'Content-Type': 'application/json'});
 * 2. TRA JSON KET QUA SAI:
 * res.writeHead(404, { 'Content-Type': 'application/json'});
 * 3. TRA VE WEB HTML: Dung la 200/sai la 404
 * res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' });
 * 4. TRA VE FILE UNG DUNG: Dung la 200
 * res.writeHead(200, {'Content-Type': mime.lookup(filename) });
 * 
 */
server.use((req, res, next) => {

    //----- LUU LOG FILE TRUY CAP CHUC NANG-----
    var log = {
        name: 'LOG_ACCESS_DETAILS',
        cols: [{
            name: 'IP',
            value: req.ip
        },
        {
            name: 'ACCESS_INFO',
            value: method + " " + reqFullHost + '/' + pathName
        },
        {
            name: 'DEVICE_INFO',
            value: req.headers["user-agent"]
        }
        ],
        wheres: [{
            name: 'IP',
            value: req.ip
        }]
    };
    db.insert(log)
      .then(data => {
          console.log(data)
        }
      )
      .catch(err=>{
          db.runSql("update LOG_ACCESS_DETAILS set LOG_COUNT=LOG_COUNT+1 "
                    +", DEVICE_INFO='"+req.headers["user-agent"]+"'"
                    +" where IP='"+req.ip+"'"
                    +" and ACCESS_INFO='"+method + " " + reqFullHost + '/' + pathName+"'")
          .then(data=>{
              console.log(data)
          })
      });
    //-----------------------------------------
    
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    //res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    //res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
    //muon cho phep truy cap tu server nao thi reply cac website tuong ung
    res.header("Access-Control-Allow-Origin", "*"); //khai bao chap nhan tat ca de test
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    //tra den phien tiep theo
    next();
});
