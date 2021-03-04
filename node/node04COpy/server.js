const express = require('express');
const app = express();

const db = require('./db/conection')

const userRouter = require('./router/userRouter')
app.use('/user',userRouter)




app.listen(3000,()=>{
    console.log('服务器启动')
})