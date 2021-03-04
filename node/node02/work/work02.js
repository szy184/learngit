const express = require('express');//引入express模块
const app = express();//实例化一个express对象
const bodyParser = require('body-parser');//引入body-parser模块

//解析post数据
//解析表单格式的数据 x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: false }))
//解析json数据格式
app.use(bodyParser.json())
app.post('/reg',(req,res)=>{
    let obj = req.body;//获取前端的get传参 
    console.log(obj)
    res.send({err:0,msg:'注册ok'})//正确 返回结果
})

app.get('/login',(req,res)=>{
    let {userName,passWord}  = req.query;//规定前端传递的数据字段
    console.log(req.query)
    if(userName ==='张三'&& passWord ==='123'){//判断
        res.send({err:0,msg:'登录ok'})//正确 返回结果
      }else{
        res.send({err:-1,msg:'登录失败'})//错误 返回结果
      }
})
//监听3000端口号启动一个node服务器
app.listen(3000,()=>{
    console.log('服务器启动')
})