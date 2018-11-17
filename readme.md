

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

#mo form test upload file
GET /test_upload/

#gui file bang form len upload
POST /file_upload/

#gui len serer chuoi json POST
#{command_id:"lenh gi"}
POST /*

#dowload file from os.temp();
#su dung kiem tra file upload len luu vao temp
GET /file_upload/<tmp|scr|fix>/<tenfile>

#Dowload file mau API bat ky duoi dang text json
#cac mau duoc khai bao truoc bang ten file
GET /api_samples/*<tenfile trong thu muc __dirsource?? + api_samples>

#Gia lap lam proxy server get request url from server
GET /url_request/<url can truy van>

#Lay thong tin anh dai dien va tom luot cua trang web, bo sung capture screen
GET /url_request_image/<url can truy van>

#View list image co trong server 
GET /test_list_images/<tmp|scr|fix/*>

#Dowload danh sach image duoc upload len os.temp()|screenshot|upload;
GET /uploaded_images/<tmp|scr|fix/*>

#Su dung get www cua ionic
GET /index.html ...



#Tao file ionic moi:
ionic g page news

