const express = require('express');
const app = express();
//引入数据库连接文件 为的是启动数据库时同时连接数据库
const db = require('./db/connect')

//引入路由
let UserRouter = require('./router/userRouter')
app.use('/user',UserRouter)

app.listen(3000,()=>{
    console.log('服务器启动')
})