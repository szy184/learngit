const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

let userRouter = require('./router/userRouter')//引入路由文件
let foodRouter = require('./router/foodRouter')

app.use('/user',userRouter);
app.use('/food',foodRouter);


// app.get('/user/login',(req,res)=>{
//     res.send('这里是登录');
// })
// app.get('/user/reg',(req,res)=>{
//     res.send('这里是注册');
// })
// app.get('/food/add',(req,res)=>{
//     res.send('食物添加');
// })
// app.get('/food/del',(req,res)=>{
//     res.send('食品删除');
// })


app.listen(3000,()=>{
    console.log('服务器启动')
})
