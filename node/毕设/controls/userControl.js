const UserModel = require('../db/model/userModel')
//注册
let userReg = async (name,pass,tel,age,sex)=>{
    //1.邮箱是否重复
    let isExst =await UserModel.findOne({name})
    let result='';
    //如果查询到数据 返回查到的数据 没有返回假
    if(isExst){
        throw '用户名已注册'
    }else{
        result = await UserModel.insertMany({name,pass,tel,age,sex})
    }
    return result
}
//用户登录
let userLogin = async (name,pass)=>{
    let result = await UserModel.findOne({name,pass})
    if(result){
        return {msg:"登录成功",result}
    }else{
        throw '用户名或密码不存在'
    }
}
let insertUser = async (obj)=>{
    let result = await UserModel.insertMany(obj)
    return result
 }
 //查询全部菜品
 let findUser = async (_id)=>{
     let result = await UserModel.find({_id})
     return result
 }
 //删除某个菜品
 let delUser = async (_id)=>{
     let result = await UserModel.deleteOne({_id})
     return result
 }
 //修改数据
 let updateUser = async (_id,updateInfo)=>{
     let result = UserModel.updateOne({_id},updateInfo)
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