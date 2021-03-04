
const express = require('express');
const router = express.Router();
const{insert,find,del,update} = require('../controls/kindControl')

/**
 * @api {post} /admin/kind/add   图书类型添加
 * @apiName add
 * @apiGroup Kind
 *
 * @apiParam {String} kindName 图书类别名
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  信息提示
 */
router.post('/add',(req,res)=>{
    let {kindName} = req.body;
    insert(kindName)
       .then(()=>{
           res.send({err:0,msg:'添加ok'})
       })
       .catch((err)=>{ res.send({err:-2,msg:err})})
 
})

/**
 * @api {post} /admin/kind/del   图书类别删除
 * @apiName del
 * @apiGroup Kind
 *
 * @apiParam {String} _id 类型编号.
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
 * @api {post} /admin/kind/update   图书类别修改
 * @apiName update
 * @apiGroup Kind
 *
 * @apiParam {String} _id 图书类别编号
 * @apiParam {String} kindName 图书类别
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  信息提示.
 */

router.post('/update',(req,res)=>{
    // 获取修改数据的参数
    let {_id,kindName} = req.body 
    update(_id,{kindName})
    .then(()=>{res.send({err:0,msg:'修改成功'})})
    .catch((err)=>{res.send({err:-1,msg:'修改失败请重试'})})
  })
  
/**
 * @api {post} /admin/kind/getInfos   图书类别列表
 * @apiName getInfos
 * @apiGroup Kind
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} list 信息
 * @apiSuccess {String} msg  信息提示.
 */
//查询全部
router.post('/getInfos',(req,res)=>{
    
    find()
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})
module.exports = router