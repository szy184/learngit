const express = require('express');
const router = express.Router()
const {findOne,insertBook,findBook,delBook,updateBook} = require('../controls/bookControl')

//1.添加
router.post('/add',(req,res)=>{
    //接受数据
    let {userName,docName,type,office,desc,num} = req.body
    //处理数据 插入数据库
    insertBook({userName,docName,type,office,desc,num})
    .then(()=>{res.send({err:0,msg:'插入成功'})})
    .catch((err)=>{res.send({err:-1,msg:'插入失败，请重试'})})
    //返回数据 
})
router.post('/getOne',(req,res)=>{
    let {docName} = req.body
    findOne(docName)
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试' })})

})
router.post('/get',(req,res)=>{
    let {docName,userName} = req.body
    findOne(docName)
    .then((data)=>{
        if(data.userName==userName){
            res.send({err:0,msg:'查询成功',list:data})
        }else{
            res.send({err:-2,msg:'无数据',})
        }
    })
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试' })})

})

router.post('/getInfos',(req,res)=>{
    findBook()
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})


//删除
router.post('/del',(req,res)=>{
    //获取要删除数据的id
    let {_id} = req.body
    delBook(_id)
    .then(()=>{res.send({err:0,msg:'删除成功'})})
    .catch((err)=>{res.send({err:-1,msg:'删除失败，请重试'})})

})


//修改
router.post('/update',(req,res)=>{
    //获取修改数据的参数
    let {_id,userName,docName,office,desc} = req.body
    updateBook(_id,{userName,docName,office,desc})
    .then(()=>{res.send({err:0,msg:'修改成功'})})
    .catch((err)=>{res.send({err:-1,msg:'修改失败，请重试'})})
})



module.exports = router