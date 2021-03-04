const express = require('express');
const bodyParser = require('body-parser');
const tokenMiddleWare = require('./middleware/tokenMiddleWare')
const path = require('path')
const app = express();

//启动服务器时同时启动数据库
const db = require('./db/connect')

//post 数据的解析
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//静态资源路径
app.use('/public',express.static(path.join(__dirname,'./public')))
/*
路由
1.文件上传的路由
*/
const uploadRouter = require('./router/uploadRouter');
const doctorRouter = require('./router/doctorRouter')
let userRouter = require('./router/userRouter')
let rootRouter = require('./router/rootRouter')
let bookRouter = require('./router/bookRouter')
app.use('/admin/upload',uploadRouter)
// app.use('/admin/food',tokenMiddleWare,foodRouter)

app.use('/admin/doctor',doctorRouter)
app.use('/admin/user',userRouter)
app.use('/admin/root',rootRouter)
app.use('/admin/book',bookRouter)

app.listen(3000,()=>{
    console.log('服务器启动')
})