const request = require('request');
const HTMLParser = require('node-html-parser');
const cheerio = require('cheerio');

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

    /*
    title="Trung ương sẽ “l&#224;m quy tr&#236;nh tiếp theo” với &#244;ng Tất Th&#224;nh Cang" 
    alt="Trung ương sẽ “l&#224;m quy tr&#236;nh tiếp theo” với &#244;ng Tất Th&#224;nh Cang" 
    data-x2="https://dantricdn.com/zoom/327_245/2018/11/16/tatthanhcangs-15423409185791775239201.jpg" 
    src="https://dantricdn.com/zoom/327_245/2018/11/16/tatthanhcangs-15423409185791775239201.jpg" 
    width="327" 
    height="245" 
    onload="t_image = new Date().getTime();"
    */

  } else {
    console.log(error);
  }
})