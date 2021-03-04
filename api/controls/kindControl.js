const kindModel = require('../db/model/kindModel')

let insert = async (kindName)=>{
    let isExst =await kindModel.findOne({kindName})
    let result ='';
    //如果查询到数据 返回查到的数据 没有返回假
    if(isExst){
        throw '书籍类型已存在'
    }else{
        result = await kindModel.insertMany({kindName})
    }
    return result
 }
 //查询全部
 let find = async ()=>{
     let result = await kindModel.find()
     return result
 }
 //删除
 let del = async (_id)=>{
    let result=''
    let isExst = await kindModel.findOne({_id})
    if(isExst){
       result = await kindModel.deleteOne({_id})
    }else{
        throw '删除信息不存在'
    }
     
    
     return result
 }
 //修改数据
 let update = async (_id,updateInfo)=>{
     let result = kindModel.updateOne({_id},updateInfo)
    //  console.log(result)
     return result
 }
module.exports = {insert,find,del,update}