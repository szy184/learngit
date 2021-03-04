const express = require('express');
const router = express.Router()
const {findDocByKw,findDocByType,insertDoc,findDoc,delDoc,updateDoc,findDocByPage} = require('../controls/doctorControl')

//1.添加
router.post('/add',(req,res)=>{
    //接受数据
    let num = 2
    let {name,img,age,office,docType,desc} = req.body
    //处理数据 插入数据库
    insertDoc({name,img,age,office,docType,desc,num})
    .then(()=>{res.send({err:0,msg:'插入成功'})})
    .catch((err)=>{res.send({err:-1,msg:'插入失败，请重试'})})
    //返回数据 
})

//根据id获取
router.post('/getInfoById',(req,res)=>{
    let {_id} = req.body
    findDoc(_id)
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})


//删除
router.post('/del',(req,res)=>{
    //获取要删除数据的id
    let {_id} = req.body
    delDoc({_id})
    .then(()=>{res.send({err:0,msg:'删除成功'})})
    .catch((err)=>{res.send({err:-1,msg:'删除失败，请重试'})})

})


//修改
router.post('/update',(req,res)=>{
    //获取修改数据的参数
    let {_id,name,img,age,office,docType,desc} = req.body
    updateDoc(_id,{name,img,age,office,docType,desc})
    .then(()=>{res.send({err:0,msg:'修改成功'})})
    .catch((err)=>{res.send({err:-1,msg:'修改失败，请重试'})})
})


//分页查询
router.post('/getInfos',(req,res)=>{
    
    let page = req.body.page || 1//查询的第几页数据
    let pageSize = req.body.pageSize || 2 //每页几条数据
    findDocByPage(page,pageSize)
    .then((data)=>{
       // console.log(data)
        let {result,allCount} = data;
        res.send({err:0,msg:'查询成功',list:result,allCount})
    })
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})


//分类查询
router.post('/getByType',(req,res)=>{
    // console.log(req.body)
    let page = req.body.page || 1//查询的第几页数据
    let pageSize = req.body.pageSize || 3 //每页几条数据
    let docType = req.body.docType||''
    findDocByType(docType,page,pageSize)
    .then((data)=>{
        res.send({err:0,msg:'查询成功',list:data.result,allCount:data.allCount})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})
})


//模糊查询，关键字查询
router.post('/getInfoByKw',(req,res)=>{
    let kw = req.body.kw || ''
    let page = req.body.page || 1;
    let pageSize = req.body.pageSize || 3
    findDocByKw(kw,page,pageSize)
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data.result,allCount:data.allCount})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})
module.exports = router