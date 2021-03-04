var express = require('express');
var app = express();
//将socket服务器 和 express 绑定在一起
var server = require('http').Server(app);
var io = require('socket.io')(server);

// app.use(express.static(__dirname + '/client'))

io.on('connection',(client)=>{
    console.log('有客户端连接')
    //触发前端的自定义事件 hehe 参数是123
    client.emit('hehe',123)
    client.on('xixi', (msg) => {
        console.log('来自客户端的信息',msg);
        })
})


server.listen(8081,()=>{
    console.log('server start')
});