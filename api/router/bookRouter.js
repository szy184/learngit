
const express = require('express');
const router = express.Router();
const{insertBook,findBook,delBook,updateBook,findBookByPage} = require('../controls/bookControl')

/**
 * @api {post} /admin/book/addBook   图书信息添加
 * @apiName addBook
 * @apiGroup Book
 *
 * @apiParam {String} bookId 图书编号.
 * @apiParam {String} bookName 图书名
 * @apiParam {String} type 图书类别
 * @apiParam {String} path   图片路径
 * @apiParam {Number} price 图书价格
 * @apiParam {Number} state 借书状态(0表示可借,后台默认为0)
 * @apiParam {String} desc 图书描述
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  信息提示
 */
router.post('/addBook',(req,res)=>{
    let {bookId,bookName,type,path,price,desc} = req.body;
    let state = 0
    insertBook({bookId,bookName,type,path,state,price,desc})
       .then(()=>{
           res.send({err:0,msg:'添加ok'})
       })
       .catch((err)=>{ res.send({err:-2,msg:err})})
 
})

/**
 * @api {post} /admin/book/delBook   图书信息删除
 * @apiName delBook
 * @apiGroup Book
 *
 * @apiParam {String} bookId 图书编号.
 * 
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  信息提示.
 */
//删除
router.post('/delBook',(req,res)=>{
    //获取要删除数据的id
    let {bookId} = req.body
    delBook(bookId)
    .then(()=>{res.send({err:0,msg:'删除成功'})})
    .catch((errinfo)=>{res.send({err:-1,msg:errinfo})})

})
/**
 * @api {post} /admin/book/updateBook   图书信息修改
 * @apiName updateBook
 * @apiGroup Book
 *
 * @apiParam {String} bookId 图书编号.
 * @apiParam {String} bookName 图书名
 * @apiParam {String} type 图书类别
 * @apiParam {String} path   图片路径
 * @apiParam {Number} state 图书状态
 * @apiParam {Number} price 图书价格
 * @apiParam {String} desc 图书描述
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  信息提示.
 */

router.post('/updateBook',(req,res)=>{
    // 获取修改数据的参数
    let {bookId,bookName,type,path,state,price,desc} = req.body 
    updateBook(bookId,{bookName,type,path,state,price,desc})
    .then(()=>{res.send({err:0,msg:'修改成功'})})
    .catch((err)=>{res.send({err:-1,msg:'修改失败请重试'})})
  })
  
/**
 * @api {post} /admin/book/getBookInfo   图书列表
 * @apiName getBookInfo
 * @apiGroup Book
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} list 图书信息
 * @apiSuccess {String} msg  信息提示.
 */
//查询全部
router.post('/getBookInfo',(req,res)=>{
    let {bookId} = req.body
    findBook(bookId)
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})
/**
 * @api {post} /admin/book/getInfos   分页查询
 * @apiName getInfos
 * @apiGroup Book
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
    findBookByPage(page,pageSize)
    .then((data)=>{
       // console.log(data)
        let {result,allCount} = data;
        res.send({err:0,msg:'查询成功',list:result,allCount})
    })
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})
module.exports = router