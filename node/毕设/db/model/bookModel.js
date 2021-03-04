//预约相关的数据模型

const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    userName:{type:String,required:true},
    docName:{type:String,required:true},
    type:{type:Number,required:false},
    office:{type:String,required:true},
    desc:{type:String,required:false},
    num:{type:Number,required:true}
})

let bookModel = mongoose.model('books',bookSchema)

module.exports = bookModel