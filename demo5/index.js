var http = require('http');

http.createServer(function (req, res) {
  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path) {
    case '':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Homepage, y\'all!');
      break;
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('About this here web site!');
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Caint find it!');
      break;
  }
  // res.writeHead(200, { 'Content-Type': 'text/plain'});
  // res.end('Hello, y\'all!');
}).listen(3000);

console.log('Server started o\'var on port 3000');
