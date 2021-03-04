/*
服务器代理
1.前端先请求自己的服务器
2.我方服务器发起服务器请求，请求目标服务器
3.将网络请求结果返回给前端

使用axois  发起服务器请求
*/

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
const app = express();

app.use(cors())
// app.get('/test',(req,res)=>{
//     res.send({err:0,msg:'访问ok'})
// })

app.get('/cors',(req,res)=>{
    console.log('请求到了');
    let url = 'https://www.qq.com/ninja/news_henan_2018.htm?t=1581511369774';
    //直接发起一个服务器请求
    //使用axois  发起服务器请求
    axios.get(url)//promise 对象
    .then((data)=>{
        res.send(data.data)
    })

})
app.listen(3000,()=>{
    console.log('服务器启动');
})