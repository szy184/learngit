const express = require('express');
const router = express.Router();
const UserModel = require('../db/userModel/userModel')
router.get('/reg',(req,res)=>{
    let {us,ps} = req.query
    UserModel.insertMany({us,ps})
    .then((data)=>{
        res.send({err:0,msg:'注册ok'})
    })
    .catch((err)=>{
        res.send({err:-1,msg:'注册失败'})
    })
    
})
router.get('/login',(req,res)=>{
    // console.log('这里是登录')
    let {us,ps}= req.query
    UserModel.find({us,ps})
    .then((data)=>{
        if(data.length==1){
            res.send({err:0,msg:'登录ok'})
        }else{
            res.send({err:-1,msg:'登录失败'})
        }
    })
    .catch((err)=>{
        res.send({err:-2,msg:'内部服务器错误'})
    })
    
})

module.exports = router