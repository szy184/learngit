const mongoose = require('mongoose')
let outSchema = new mongoose.Schema({
    bookId:{type:String,required:true},
    bookName:{type:String,required:true},
    studyId:{type:String,required:true},
    studentName:{type:String,required:true},
    state:{tyep:Number,required:false},
    desc:{type:String,required:false},


})


let outModel = mongoose.model('outs',outSchema)

module.exports = outModel