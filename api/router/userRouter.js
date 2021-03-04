
const express = require('express');
const router = express.Router();
const {userReg,userLogin,insertUser,findUser,delUser,updateUser,findUserByPage} = require('../controls/userControl')

/**
 * @api {post} /admin/user/reg   学生注册
 * @apiName add
 * @apiGroup User
 *
 * @apiParam {String} studyId 学号.
 * @apiParam {String} name 学生名称
 * @apiParam {String} password 密码
 * @apiParam {String} sex   性别
 * @apiParam {Number} age 年龄
 * @apiParam {Number} tel 电话号码
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 */
 router.post('/reg',(req,res)=>{
     let {studyId,name,password,tel,age,sex} = req.body;
 
        userReg(studyId,name,password,tel,age,sex)
        .then(()=>{
            res.send({err:0,msg:'注册ok'})
        })
        .catch((err)=>{ res.send({err:-2,msg:err})})
  
 })

/**
 * @api {post} /admin/user/login   学生登录
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {String} studyId 学号.
 * @apiParam {String} password 密码
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {Array} userInfo 学生信息
 * @apiSuccess {String} msg  信息提示.
 */
router.post('/login',(req,res)=>{
    let {studyId,password} = req.body;
    userLogin(studyId,password)
    .then((info)=>{
        res.send({err:0,msg:'登录成功',userInfo:info.result})
    })
    .catch((err)=>{ res.send({err:-2,msg:err})})
})

/**
 * @api {post} /admin/user/getUserInfo   学生列表
 * @apiName getUserInfo
 * @apiGroup User
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} data 学生信息
 * @apiSuccess {String} msg  信息提示.
 */
//查询全部
router.post('/getUserInfo',(req,res)=>{
    let {studyId} = req.body
    findUser(studyId)
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})

/**
 * @api {post} /admin/user/del   学生删除信息
 * @apiName del
 * @apiGroup User
 *
 * @apiParam {String} studyId 学号.
 * 
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  信息提示.
 */
//删除
router.post('/del',(req,res)=>{
    //获取要删除数据的id
    let {studyId} = req.body
    delUser(studyId)
    .then(()=>{res.send({err:0,msg:'删除成功'})})
    .catch((err)=>{res.send({err:-1,msg:'删除失败，请重试'})})

})
/**
 * @api {post} /admin/user/update   学生信息修改
 * @apiName update
 * @apiGroup User
 *
 * @apiParam {String} studyId  学生学号
 * @apiParam {String} name 学生名称.
 * @apiParam {String} password 密码
 * @apiParam {String} sex   性别
 * @apiParam {Number} age 年龄
 * @apiParam {Number} tel 电话号码
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  信息提示.
 */

router.post('/update',(req,res)=>{
    // 获取修改数据的参数
    let {studyId,name,password,tel,age,sex} = req.body 
    updateUser(studyId,{name,password,tel,age,sex})
    .then(()=>{res.send({err:0,msg:'修改成功'})})
    .catch((err)=>{res.send({err:-1,msg:'修改失败请重试'})})
  })
/**
 * @api {post} /admin/user/getInfos   分页查询
 * @apiName getInfos
 * @apiGroup User
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
    findUserByPage(page,pageSize)
    .then((data)=>{
       // console.log(data)
        let {result,allCount} = data;
        res.send({err:0,msg:'查询成功',list:result,allCount})
    })
    .catch((err)=>{res.send({err:-1,msg:'查询失败，请重试'})})

})
module.exports = router