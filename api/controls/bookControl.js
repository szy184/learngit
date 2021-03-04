const BookModel = require('../db/model/bookModel')

let insertBook = async (obj)=>{
    let {bookId} = obj
    let isExst =await BookModel.findOne({bookId})
    let result ='';
    //如果查询到数据 返回查到的数据 没有返回假
    if(isExst){
        throw 'bookId已存在'
    }else{
        result = await BookModel.insertMany(obj)
    }
    return result
 }
 //查询全部
 let findBook = async (bookId)=>{
     let result=''
     if(bookId){
        result = await BookModel.find({bookId})
     }else{
        result = await BookModel.find()
     }
    
     return result
 }
 //删除
 let delBook = async (bookId)=>{
    let result=''
    let isExst = await BookModel.findOne({bookId})
    if(isExst){
       result = await BookModel.deleteOne({bookId})
    }else{
        throw '删除信息不存在'
    }
     
    
     return result
 }
 //修改数据
 let updateBook = async (bookId,updateInfo)=>{
     let result = BookModel.updateOne({bookId},updateInfo)
     console.log(result)
     return result
 }
 //分页查询
 let findBookByPage = async (page,pageSize)=>{
     let allDoc = await BookModel.find();
     //总的数据条数
     let allCount = allDoc.length
     //每一页数据
     let result = await BookModel.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize))
     return {result,allCount}
 }
module.exports = {insertBook,findBook,delBook,updateBook,findBookByPage}