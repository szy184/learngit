//将数据库相关的操作抽离处理
const doctorModel = require('../db/model/doctorModel')
//插入
let insertDoc = async (obj)=>{
   let result = await doctorModel.insertMany(obj)
   return result
}
//查询全部
let findDoc = async (_id)=>{
    let result = await doctorModel.find({_id})
    return result
}
//删除
let delDoc = async (_id)=>{
    let result = await doctorModel.deleteOne({_id})
    return result
}
//修改数据
let updateDoc = async (_id,updateInfo)=>{
    let result = doctorModel.updateOne({_id},updateInfo)
    return result
}
//分页查询
let findDocByPage = async (page,pageSize)=>{
    let allDoc = await doctorModel.find();
    //总的数据条数
    let allCount = allDoc.length
    //每一页数据
    let result = await doctorModel.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize))
    return {result,allCount}
}

//分类查询
let findDocByType = async (docType,page,pageSize)=>{
    
    let allDoc = await doctorModel.find({docType});
    //总的数据条数
    let allCount = allDoc.length
    //每一页数据
    let result = await doctorModel.find({docType}).skip((Number(page)-1)*pageSize).limit(Number(pageSize))
    return {result,allCount}
}
//关键字查询
let findDocByKw = async (kw,page,pageSize)=>{
    //通过正则表达式匹配关键字
    let regex = new RegExp(kw)
    //满足条件的所有数据
    let allDoc =await doctorModel.find({$or:[{office:{$regex:regex}},{name:{$regex:regex}}]})
    let allCount = allDoc.length
    //分页后满足关键字的数据
    let result = await doctorModel.find({$or:[{office:{$regex:regex}},{name:{$regex:regex}}]})
    .skip(Number(page-1)*pageSize).limit(Number(pageSize))
    return {result,allCount}
}
module.exports = {findDocByKw,findDocByType,insertDoc,findDoc,delDoc,updateDoc,findDocByPage}