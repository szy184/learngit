 //用户相关的数据模型

const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    studyId:{type:String,required:true},
    name:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:Number,required:true},
    sex:{type:String,required:true},
    tel:{type:Number,required:true},
})

let userModel = mongoose.model('users',userSchema)

module.exports = userModel