//用户相关的数据模型

const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    bookId:{type:String,required:true},
    bookName:{type:String,required:true},
    type:{type:String,required:true},
    path:{type:String,required:true},
    state:{type:Number,required:false},
    price:{type:Number,required:true},
    desc:{type:String,required:true},
})

let bookModel = mongoose.model('books',bookSchema)

module.exports = bookModel