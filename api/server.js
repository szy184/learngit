const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()


//启动服务器时同时启动数据库
const db = require('./db/connect')

//post 数据的解析
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//静态资源路径
app.use('/public',express.static(path.join(__dirname,'./public')))

//路由
let rootRouter = require('./router/rootRouter')
let userRouter = require('./router/userRouter')
let bookRouter = require('./router/bookRouter')
let outRouter = require('./router/outRouter')
let uploadRouter = require('./router/uploadRouter')
let kindRouter = require('./router/kindRouter')
app.use('/admin/root',rootRouter)
app.use('/admin/user',userRouter)
app.use('/admin/book',bookRouter)
app.use('/admin/out',outRouter)
app.use('/admin/upload',uploadRouter)
app.use('/admin/kind',kindRouter)

app.listen(3000,()=>{
    console.log('server start')
})