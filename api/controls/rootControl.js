const rootModel = require('../db/model/rootModel')
//注册
let rootReg = async (name,password)=>{
    //1.是否重复
    let isExst =await rootModel.findOne({name})
    let result ='';
    //如果查询到数据 返回查到的数据 没有返回假
    if(isExst){
        throw '已注册'
    }else{
        result = await rootModel.insertMany({name,password})
    }
    return result
}
//登录
let rootLogin = async (name,password)=>{
    let result = await rootModel.findOne({name,password})
    if(result){
        return {msg:"登录ok",result}
    }else{
        throw '用户名或密码不存在'
    }
}
//添加
let insertRoot = async (obj)=>{
    let {name} = obj
    let isExst =await rootModel.findOne({name})
    let result ='';
    //如果查询到数据 返回查到的数据 没有返回假
    if(isExst){
        throw '管理员已存在'
    }else{
        result = await rootModel.insertMany(obj)
    }
    return result
 }
 //查询全部
 let findRootAll = async ()=>{
     let result = await rootModel.find()
     return result
 }
 //删除
 let delRoot = async (_id)=>{
     let result = await rootModel.deleteOne({_id})
     return result
 }
 //修改数据
 let updateRoot = async (_id,updateInfo)=>{
     let result = rootModel.updateOne({_id},updateInfo)
     return result
 }
 //分页查询
 let findRootByPage = async (page,pageSize)=>{
     let allDoc = await rootModel.find();
     //总的数据条数
     let allCount = allDoc.length
     //每一页数据
     let result = await rootModel.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize))
     return {result,allCount}
 }

module.exports = {rootReg,rootLogin,insertRoot,findRootAll,delRoot,updateRoot,findRootByPage}