const outModel = require('../db/model/outModel')
//借出
let insert = async (obj)=>{
    let {bookId} = obj
    let isExst =await outModel.findOne({bookId})
    let result ='';
    //如果查询到数据 返回查到的数据 没有返回假
    if(isExst){
        throw '已借出'
    }else{
        result = await outModel.insertMany(obj)
    }
    return result
 }
 //查询全部
 let find = async ()=>{
     let result = await outModel.find()
     return result
 }
 //删除
 let del = async (_id)=>{
    let result=''
     let isExst = await outModel.findOne({_id})
     if(isExst){
        result = await outModel.deleteOne({_id})
     }else{
         throw '删除信息不存在'
     }
     return result
 }

 //分页查询
 let findByPage = async (page,pageSize)=>{
     let allDoc = await outModel.find();
     //总的数据条数
     let allCount = allDoc.length
     //每一页数据
     let result = await outModel.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize))
     return {result,allCount}
 }
module.exports = {insert,find,del,findByPage}