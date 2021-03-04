
const express = require('express');
const router = express.Router();
const{insert,find,del,findByPage} = require('../controls/outControl')

/**
 * @api {post} /admin/out/add   借出图书信息添加
 * @apiName add
 * @apiGroup Out
 *
 * @apiParam {String} bookId 图书编号.
 * @apiParam {String} bookName 图书名
 * @apiParam {String} studyId 学生学号
 * @apiParam {String} studentName 学生姓名
 * @apiParam {Number} state 借书状态(1表示已借,后台默认为1)
 * @apiParam {String} desc 描述
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  信息提示
 */
router.post('/add',(req,res)=>{
    let {bookId,bookName,studyId,studentName,desc} = req.body;
    let state = 1
    insert({bookId,bookName,studyId,studentName,state,desc})
       .then(()=>{
           res.send({err:0,msg:'添加ok'})
       })
       .catch((err)=>{ res.send({err:-2,msg:err})})
 
})

/**
 * @api {post} /admin/out/del  图书借出信息删除
 * @apiName del
 * @apiGroup Out
 *
 * @apiParam {String} _id 借出id.
 * 
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  信息提示.
 */
//删除
router.post('/del',(req,res)=>{
    //获取要删除数据的id
    let {_id} = req.body
    del(_id)
    .then(()=>{res.send({err:0,msg:'删除成功'})})
    .catch((errinfo)=>{res.send({err:-1,msg:errinfo})})

})
/**
 * @api {post} /admin/out/getOutInfo   图书借出信息列表
 * @apiName getOutInfo
 * @apiGroup Out
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} data 图书信息
 * @apiSuccess {String} msg  信息提示.
 */
//查询全部
router.post('/getOutInfo',(req,res)=>{
    
    find()
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})
/**
 * @api {post} /admin/out/getInfos   分页查询
 * @apiName getInfos
 * @apiGroup Out
 *
 * @apiParam {String} page 查询页码数
 * @apiParam {String} pageSize 每页的数据条数
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {Array} list 数据
 * @apiSuccess {String} allCount 总数量
 * @apiSuccess {String} msg  信息提示
 */
//分页查询
router.post('/getInfos',(req,res)=>{
    let page = req.body.page || 1//查询的第几页数据
    let pageSize = req.body.pageSize || 2 //每页几条数据
    findByPage(page,pageSize)
    .then((data)=>{
       // console.log(data)
        let {result,allCount} = data;
        res.send({err:0,msg:'查询成功',list:result,allCount})
    })
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})
module.exports = router