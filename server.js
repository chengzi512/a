/**
 * Created by Administrator on 2016/11/3.
 */
var http= require('http');
http.createServer(function(request,response){
    //发送http头部
    //HTTP状态值 200 ok
    //内容类型 text/plain
    response.writeHead(200,{'Cotent-Type':'text/plain'});

    //发送响应数据 “Hellod World"
    response.end("Hello World\n  用node搭建的服务器运行成功……\n");
}).listen(8888);

//终端打印如下信息
console.log("Server running at http://127.0.0.1:8888");