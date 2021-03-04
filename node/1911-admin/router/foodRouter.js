const express = require('express');
const router = express.Router()
const {findFoodByKw,insertFood,findFood,delFood,updateFood,findFoodByPage,findFoodByType} = require('../controls/foodControl')
/**
 * @api {post} /admin/food/add   添加菜品
 * @apiName add
 * @apiGroup Food
 *
 * @apiParam {String} name 菜品名字.
 * @apiParam {String} price 菜品价格.
 * @apiParam {String} desc 描述.
 * @apiParam {String} img 图片.
 * @apiParam {String} foodType 菜品类型.
 *
 * @apiSuccess {Number} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 */
//1.添加菜品
router.post('/add',(req,res)=>{
    //接受数据
    let {name,price,img,desc,foodType} = req.body
    //处理数据 插入数据库
    insertFood({name,price,img,desc,foodType})
    .then(()=>{res.send({err:0,msg:'插入成功'})})
    .catch((err)=>{res.send({err:-1,msg:'插入失败，请重试'})})
    //返回数据 
})
/**
 * @api {post} /admin/food/getInfoById   查询全部菜品
 * @apiName getInfosById
 * @apiGroup Food
 *
 *
 * @apiSuccess {Number} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 */
//根据id获取商品
router.post('/getInfoById',(req,res)=>{
    let {_id} = req.body
    findFood(_id)
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})

/**
 * @api {post} /admin/food/del   删除菜品
 * @apiName del
 * @apiGroup Food
 *
 * @apiParam {Number} _id id名.
 *
 * @apiSuccess {Number} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 */
//删除菜品
router.post('/del',(req,res)=>{
    //获取要删除数据的id
    let {_id} = req.body
    delFood({_id})
    .then(()=>{res.send({err:0,msg:'删除成功'})})
    .catch((err)=>{res.send({err:-1,msg:'删除失败，请重试'})})

})

/**
 * @api {post} /admin/food/update   修改菜品
 * @apiName update
 * @apiGroup Food
 *
 * @apiParam {Number} _id id名.
 * @apiParam {String} name 菜品名字.
 * @apiParam {String} price 菜品价格.
 * @apiParam {String} desc 描述.
 * @apiParam {String} img 图片.
 * @apiParam {String} foodType 菜品类型.
 *
 * @apiSuccess {Number} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 */
//修改菜品
router.post('/update',(req,res)=>{
    //获取修改数据的参数
    let {_id,name,price,img,desc,foodType} = req.body
    updateFood(_id,{name,price,img,desc,foodType})
    .then(()=>{res.send({err:0,msg:'修改成功'})})
    .catch((err)=>{res.send({err:-1,msg:'修改失败，请重试'})})
})


/**
 * @api {post} /admin/food/getInfos   分页查询菜品
 * @apiName getInfos
 * @apiGroup Food
 *
 * @apiParam {Number} page 页数.
 * @apiParam {Number} pageSize 单页数据量.
 *
 * @apiSuccess {Number} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Number} allCount 菜品总数量.
 * @apiSuccess {String} list  查到的数据.
 */
//分页查询
router.post('/getInfos',(req,res)=>{
    
    let page = req.body.page || 1//查询的第几页数据
    let pageSize = req.body.pageSize || 2 //每页几条数据
    findFoodByPage(page,pageSize)
    .then((data)=>{
       // console.log(data)
        let {result,allCount} = data;
        res.send({err:0,msg:'查询成功',list:result,allCount})
    })
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})

/**
 * @api {post} /admin/food/getByType   分类查询菜品
 * @apiName getByType
 * @apiGroup Food
 *
 * @apiParam {String} foodType 菜品类型.
 * @apiParam {Number} page 页数.
 * @apiParam {Number} pageSize 单页数据量.
 *
 * @apiSuccess {Number} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Number} allCount 菜品总数量.
 * @apiSuccess {String} list  查到的数据.
 */
//分类查询
router.post('/getByType',(req,res)=>{
    console.log(req.body)
    let page = req.body.page || 1//查询的第几页数据
    let pageSize = req.body.pageSize || 3 //每页几条数据
    let foodType = req.body.foodType||''
    findFoodByType(foodType,page,pageSize)
    .then((data)=>{
        res.send({err:0,msg:'查询成功',list:data.result,allCount:data.allCount})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})
})

/**
 * @api {post} /admin/food/getInfoByKw   模糊查询菜品
 * @apiName getInfoByKw
 * @apiGroup Food
 *
 * @apiParam {String} kw 关键字.
 * @apiParam {String} page 页码数.
 * @apiParam {String} pageSize 每页条数.
 *
 * @apiSuccess {Number} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} list  查到的数据.
 * @apiSuccess {String} allCount  总数据.
 */
//模糊查询，关键字查询
router.post('/getInfoByKw',(req,res)=>{
    let kw = req.body.kw || ''
    let page = req.body.page || 1;
    let pageSize = req.body.pageSize || 3
    findFoodByKw(kw,page,pageSize)
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data.result,allCount:data.allCount})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})
module.exports = router