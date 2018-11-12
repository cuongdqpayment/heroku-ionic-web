

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





-- npm install @ionic/app-scripts@latest --save-dev

