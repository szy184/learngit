const express = require('express');
const router = express.Router();
const {rootReg,rootLogin,insertRoot,findRootAll,delRoot,updateRoot,findRootByPage} = require('../controls/rootControl')

 /**
 * @api {post} /admin/root/reg 管理员注册
 * @apiName reg
 * @apiGroup Root
 *
 * @apiParam {String} name  注册姓名
 * @apiParam {String} password  注册密码
 *
 * @apiSuccess {String} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 */
 router.post('/reg',(req,res)=>{
     let {name,password} = req.body;
 
        rootReg(name,password)
        .then(()=>{
            res.send({err:0,msg:'注册ok'})
        })
        .catch((err)=>{ res.send({err:-2,msg:err})})
   
 })
  /**
 * @api {post} /admin/root/login 管理员登录
 * @apiName login
 * @apiGroup Root
 *
 * @apiParam {String} name  姓名
 * @apiParam {String} password  密码
 * @apiSuccess {String} rootInfo  信息
 *
 * @apiSuccess {String} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 */
router.post('/login',(req,res)=>{
    let {name,password} = req.body;
    rootLogin(name,password)
    .then((info)=>{
        res.send({err:0,msg:'登录成功',rootInfo:info})
    })
    .catch((err)=>{ res.send({err:-2,msg:err})})
})
/**
 * @api {post} /admin/Root/add   管理员添加
 * @apiName add
 * @apiGroup Root
 *
 * @apiParam {String} name 管理员名称
 * @apiParam {String} password 密码
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  信息提示
 */
router.post('/add',(req,res)=>{
  console.log('req',req.body)
    let {name,password} = req.body
    insertRoot({name,password})
    .then(()=>{res.send({err:0,msg:'插入成功'})})
    .catch((err)=>{res.send({err:-1,msg:'插入失败，请重试'})})

})
/**
 * @api {post} /admin/root/getRootInfo  管理员列表
 * @apiName getRootInfo
 * @apiGroup Root
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  信息提示
 * @apiSuccess {Array} list  查询到的数据
 */
router.post('/getRootInfo',(req,res)=>{
    
    findRootAll()
    .then((infos)=>{res.send({list:infos,err:0,msg:'查询成功'})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
  })

/**
 * @api {post} /admin/root/del  管理员删除
 * @apiName del
 * @apiGroup Root
 *
 * @apiParam   {String} _id  管理员id
 * 
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  信息提示
 */
  router.post('/del',(req,res)=>{
    // 获取要删除数据的id
    let {_id} = req.body
    delRoot(_id)
    .then(()=>{res.send({err:0,msg:'删除成功'})})
    .catch((err)=>{res.send({err:-1,msg:'删除失败请重试'})})
  
  })
/**
 * @api {post} /admin/root/update   管理员信息修改
 * @apiName update
 * @apiGroup Root
 *
 * @apiParam {String} _id  管理员id
 * @apiParam {String} name 管理员名称
 * @apiParam {String} password 密码
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  信息提示
 */
  router.post('/update',(req,res)=>{
    // 获取修改数据的参数
    let {_id,name,password} = req.body 
    updateRoot(_id,{name,password})
    .then(()=>{res.send({err:0,msg:'修改成功'})})
    .catch((err)=>{res.send({err:-1,msg:'修改失败请重试'})})
  })
/**
 * @api {post} /admin/root/getInfos   分页查询
 * @apiName getInfos
 * @apiGroup Root
 *
 * @apiParam {String} page 查询页码数
 * @apiParam {String} pageSize 每页的数据条数
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {Array} list 数据
 * @apiSuccess {String} allCount 总数量
 * @apiSuccess {String} msg  信息提示
 */
  router.post('/getInfos',(req,res)=>{
    let page = req.body.page||1 //查询的第几页数据
    let pageSize = req.body.pageSize ||2 //每页几条数据
    findRootByPage(page,pageSize)
    .then((data)=>{
       let {result,allCount}=data 
      res.send({err:0,msg:'查询成功',list:result,allCount})
    })
    .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
  })

module.exports = router