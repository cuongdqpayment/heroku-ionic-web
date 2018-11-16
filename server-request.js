const request = require('request');
const HTMLParser = require('node-html-parser');
const cheerio = require('cheerio');

var root = HTMLParser.parse('<ul id="list"><li>Hello World</li></ul>');

request('http://dantri.com.vn', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    
    //console.log(body) // Print the google web page.
    root = HTMLParser.parse(body);
    //console.log(root.toString()) // Print the google web page.
    //tim kiem anh dau tien co duoc trong file

    //root.querySelector('img').toString();
    //<img src='abc.js'>


    //day la chuoi thuoc tinh, lay thuoc tinh ??
    //console.log(root.querySelector('img')['rawAttrs']);
    //day la chuoi string 
    var img = root.querySelector('img').toString();
    //console.log(img);

    const $ = cheerio.load(img);
    
    console.log($('img').attr('src'));

    /*
    title="Trung ương sẽ “l&#224;m quy tr&#236;nh tiếp theo” với &#244;ng Tất Th&#224;nh Cang" 
    alt="Trung ương sẽ “l&#224;m quy tr&#236;nh tiếp theo” với &#244;ng Tất Th&#224;nh Cang" 
    data-x2="https://dantricdn.com/zoom/327_245/2018/11/16/tatthanhcangs-15423409185791775239201.jpg" 
    src="https://dantricdn.com/zoom/327_245/2018/11/16/tatthanhcangs-15423409185791775239201.jpg" 
    width="327" 
    height="245" 
    onload="t_image = new Date().getTime();"
    */

  }else{
      console.log(error);
  }
})