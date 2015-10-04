

// 'http'模块提供两种使用方式：
//
// 作为服务端使用时，创建一个HTTP服务器，监听HTTP客户端请求并返回响应。
//
// 作为客户端使用时，发起一个HTTP客户端请求，获取服务端响应。
//
//

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text-plain'});
    response.end('Hello World\n');
}).listen(8124);

