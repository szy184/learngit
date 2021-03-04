
const express = require('express');
const router = express.Router();
const {userReg,userLogin,insertUser,findUser,delUser,updateUser,findUserByPage} = require('../controls/userControl')
const mails = {}

 router.post('/reg',(req,res)=>{
     let {name,pass,tel,age,sex} = req.body;
 
        userReg(name,pass,tel,age,sex)
        .then(()=>{
            res.send({err:0,msg:'注册ok'})
        })
        .catch((err)=>{ res.send({err:-2,msg:err})})
  
 })


router.post('/login',(req,res)=>{
    let {name,pass} = req.body;
    userLogin(name,pass)
    .then((info)=>{
        res.send({err:0,msg:'登录成功',userInfo:info.result})
    })
    .catch((err)=>{ res.send({err:-2,msg:err})})
})
router.post('/add',(req,res)=>{
    //接受数据
    let {name,age,sex,tel} = req.body
    //处理数据 插入数据库
    insertUser({name,age,sex,tel})
    .then(()=>{res.send({err:0,msg:'插入成功'})})
    .catch((err)=>{res.send({err:-1,msg:'插入失败，请重试'})})
    //返回数据 
})

//根据id获取
router.post('/getInfoById',(req,res)=>{
    let {_id} = req.body
    findUser(_id)
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})


//删除
router.post('/del',(req,res)=>{
    //获取要删除数据的id
    let {_id} = req.body
    delUser({_id})
    .then(()=>{res.send({err:0,msg:'删除成功'})})
    .catch((err)=>{res.send({err:-1,msg:'删除失败，请重试'})})

})


//修改
router.post('/update',(req,res)=>{
    //获取修改数据的参数
    let {_id,name,age,sex,tel} = req.body
    updateUser(_id,{name,age,sex,tel} )
    .then(()=>{res.send({err:0,msg:'修改成功'})})
    .catch((err)=>{res.send({err:-1,msg:'修改失败，请重试'})})
})


//分页查询
router.post('/getInfos',(req,res)=>{
    let page = req.body.page || 1//查询的第几页数据
    let pageSize = req.body.pageSize || 2 //每页几条数据
    findUserByPage(page,pageSize)
    .then((data)=>{
       // console.log(data)
        let {result,allCount} = data;
        res.send({err:0,msg:'查询成功',list:result,allCount})
    })
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})
module.exports = router