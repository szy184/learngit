//食品相关的数据模型

const mongoose = require('mongoose')

let doctorSchema = new mongoose.Schema({
    name:{type:String,required:true},
    img:{type:String,required:false},
    age:{type:Number,required:true},
    office:{type:String,required:true},
    docType:{type:String,required:true},
    desc:{type:String,required:false},
    num:{type:Number,required:true}
})

let doctorModel = mongoose.model('doctors',doctorSchema)

module.exports = doctorModel