const UserModel = require('../db/model/userModel')
//注册
let userReg = async (studyId,name,password,tel,age,sex)=>{
    //1.是否重复
    let isExst =await UserModel.findOne({studyId})
    let result='';
    //如果查询到数据 返回查到的数据 没有返回假
    if(isExst){
        throw '学号已注册'
    }else{
        result = await UserModel.insertMany({studyId,name,password,tel,age,sex})
    }
    return result
}
//用户登录
let userLogin = async (studyId,password)=>{
    let result = await UserModel.findOne({studyId,password})
    if(result){
        return {msg:"登录成功",result}
    }else{
        throw '用户名或密码不存在'
    }
}
let insertUser = async (obj)=>{
    let result = await UserModel.insertMany(obj)
 }
 //查询全部
 let findUser = async (studyId)=>{
     let result =''
     if(studyId){
        result = await UserModel.find({studyId})
     }else{
         result = await UserModel.find()
     }
     return result
 }
 //删除
 let delUser = async (studyId)=>{
     let result = await UserModel.deleteOne({studyId})
     return result
 }
 //修改数据
 let updateUser = async (studyId,updateInfo)=>{
     let result = UserModel.updateOne({studyId},updateInfo)
     return result
 }
 //分页查询
 let findUserByPage = async (page,pageSize)=>{
     let allDoc = await UserModel.find();
     //总的数据条数
     let allCount = allDoc.length
     //每一页数据
     let result = await UserModel.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize))
     return {result,allCount}
 }
module.exports = {userReg,userLogin,insertUser,findUser,delUser,updateUser,findUserByPage}