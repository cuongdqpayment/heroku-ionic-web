const request = require('request');
const HTMLParser = require('node-html-parser');
const cheerio = require('cheerio');

var screenShotHtml = require("node-server-screenshot");
screenShotHtml.
fromHTML(
  //chữ này được chèn vào selector, nếu nó không tìm thấy thì xem như không có màn hình
  'Ảnh được chụp bởi "Thú vị của lập trình"', 
  //file này được lưu trên đĩa đường dẫn mặt định
  "test.png",
  //thong so tuy chon 
    {
      width:1200, //default 1200
      height:720, //default 720
      waitAfterSelector:"html", //default html
      waitMilliseconds:1000, //default 1000
      /* clip:{
        x:10, //toa do topleft x default 0
        y:10, //toa do topleft y default 0
        width:100, //do rong anh default 1200
        height:100  //do cao anh default 720
      }, */
      inject: {
        url: "https://chuyenmang.mobifone.vn",
        //selector: {className: "mw-wiki-logo"} //noi ma text o tren duoc nhung vao
        selector: {tag:"title"} //noi ma text o tren duoc nhung vao

    }},
  function(err){
      //an image of the HTML has been saved at ./test.png
      //sau khi chup xong ket qua loi
      //ket qua thanh cong
      //tra ket qua ve
      if (err){
        console.log(" err: " + JSON.stringify(err));
      }else{
        //tra ket qua ve
      }
  }
); 


/* fromURL("https://google.com", "test.png", function(){
    //an image of google.com has been saved at ./test.png
}); */

/* fromHTML(
  'Ảnh được chụp bởi "Thú vị của lập trình"', //chu nay duoc nhung vao 
    "test.png",
    {inject: {
        url: "https://en.wikipedia.org/wiki/Main_Page",
        //selector: {className: "mw-wiki-logo"} //noi ma text o tren duoc nhung vao
        selector: {className: "mw-wiki-logo"} //noi ma text o tren duoc nhung vao

    }},
  function(){
      //an image of the HTML has been saved at ./test.png
  }
); */

/* fromURL("https://google.com", "test.png",{
width:600,
height:480,
waitAfterSelector:"html",
waitMilliseconds:1000
}, function(){
    //an image of google.com has been saved at ./test.png
}); */

//capture screenweb


/* 
request('http://dantri.com.vn', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    const root = HTMLParser.parse(body);
    const imgHtml = (root.querySelector('img') ? root.querySelector('img').toString() : '<img src="">');
    const $ = cheerio.load(imgHtml);
    const url_img = $('img').attr('src');
    const title = (root.querySelector('title') ? root.querySelector('title').text : '');
    const h1 = (root.querySelector('h1') ? root.querySelector('h1').text : '');
    const h2 = (root.querySelector('h2') ? root.querySelector('h2').text : '');
    console.log(JSON.stringify({ img: url_img }));

  } else {
    console.log(error);
  }
}); */