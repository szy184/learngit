const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    us:{type:String},
    ps:{type:String}
}) 
const UserModel = mongoose.model('users',userSchema)

module.exports = UserModel