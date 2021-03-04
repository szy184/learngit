//将数据库相关的操作抽离处理
const bookModel = require('../db/model/bookModel')
//插入
let insertBook = async (obj)=>{
   let result = await bookModel.insertMany(obj)
   return result
}
let findOne = async (docName)=>{
    let result = await bookModel.findOne({docName})
    return result
}
//查询全部
let findBook = async ()=>{
    let result = await bookModel.find()
    return result
}
//删除
let delBook = async (_id)=>{
    let result = await bookModel.deleteOne({_id})
    return result
}
//修改数据
let updateBook = async (_id,updateInfo)=>{
    let result = bookModel.updateOne({_id},updateInfo)
    return result
}

module.exports = {findOne,insertBook,findBook,delBook,updateBook}