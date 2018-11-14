var http = require('http');

var httpServer = http.createServer(onRequest);

function onRequest(client_req, client_res) {

   console.log('serve: ' + client_req.url);

  var options = {
    hostname: 'www.google.com',
    port: 80,
    path: client_req.url,
    method: 'GET'
  };

  var proxy = http.request(options, function (res) {
    res.pipe(client_res, {
      end: true
    });
  });

  client_req.pipe(proxy, {
    end: true
  });
}


var PORT = process.env.PORT || 8888;

httpServer.listen(PORT);

console.log("Server is started with : " + PORT);