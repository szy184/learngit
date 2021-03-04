
const express = require('express');
const router = express.Router();
const {rootReg,rootLogin} = require('../controls/rootControl')
const mails = {}

 router.post('/reg',(req,res)=>{
     let {name,pass} = req.body;
    //  if(code==mails[mail]){
        //验证码ok
        rootReg(name,pass)
        .then(()=>{
            res.send({err:0,msg:'注册ok'})
        })
        .catch((err)=>{ res.send({err:-2,msg:err})})
    //  }else{
    //      res.send({err:-1,msg:'验证码失败'})
    //  }
 })
router.post('/login',(req,res)=>{
    let {name,pass} = req.body;
    rootLogin(name,pass)
    .then((info)=>{
        // //登陆成功之后产生token  并返回
        // let token = createToken()
        res.send({err:0,msg:'登录成功',rootInfo:info})
    })
    .catch((err)=>{ res.send({err:-2,msg:err})})
})
//退出登录 验证token 
// router.post('/logout',tokenMiddleWare,(req,res)=>{
//     let {_id} = req.body
//     //数据库里token清空
// logOut(_id)
// .then(()=>{
//     res.send({err:0,msg:'退出ok'})
// })
// })
module.exports = router