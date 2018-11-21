

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

