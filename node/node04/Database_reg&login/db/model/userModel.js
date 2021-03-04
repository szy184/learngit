//创建数据模型
const mongoose = require('mongoose');

//创建schema对象
let UserSchema = new mongoose.Schema({
    us:{type:String},
    ps:{type:String}
})

//将schema对象与数据集合相关联
let UserModel = mongoose.model('users',UserSchema)

module.exports = UserModel