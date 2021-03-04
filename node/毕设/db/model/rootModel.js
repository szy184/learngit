//用户相关的数据模型

const mongoose = require('mongoose')

let rootSchema = new mongoose.Schema({
    name:{type:String,required:true},
    pass:{type:String,required:true}
})

let rootModel = mongoose.model('roots',rootSchema)

module.exports = rootModel