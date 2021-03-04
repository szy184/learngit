const express = require('express');
const path = require('path');
const app = express();

//第一个路径：网络访问路径  第二个路径是指文件夹路径
//app.use('/',express.static(path.join(__dirname,'./www')))
//指定www文件夹为静态资源目录
//如果app.use 的第一个参数路径是'/' 可以省略不写
// app.use(express.static(path.join(__dirname,'./www')))

app.use('/public',express.static(path.join(__dirname,'./www')))
//http://locahost:3000/public

app.listen(3000,()=>{
    console.log('服务器启动成功')
})

