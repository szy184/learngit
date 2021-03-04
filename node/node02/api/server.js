const express = require('express');
const app  = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

// app.get('/login',(req,res)=>{
//     res.send('呵呵哒');
// })

//登录
app.get('/login',(req,res)=>{
    /*
    1.接受前端数据  req  request的简写包含前端传递的数据
    2.处理数据
    3.返回数据    res  response的缩写 给前端返回结果
    4.返回数据格式  json   至少包含2-3个字段（错误码   错误数据  数据）
    */
    // let query = req.query;//获取前端的get传参
    // console.log(query)
    let {userName,passWord} = req.query;
    if(userName==='一二三'&&passWord==='123'){
        res.send({err:0,msg:'登录ok'})
    }else{
        res.send({err:-1,msg:'登陆失败'})
    }
})

//post 注册
app.post('/reg',(req,res)=>{
    console.log(req.body)
    //接受post数据
    //express 默认是不能解析post数据的
    let {userName,passWord} = req.body;
    console.log({userName,passWord})
    res.send({err:0,msg:'注册ok'})
})
app.listen(3000,()=>{
    console.log('服务器启动');
})