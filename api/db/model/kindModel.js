const mongoose = require('mongoose')
let kindSchema = new mongoose.Schema({
    kindName:{type:String,required:true},
})


let kindModel = mongoose.model('kinds',kindSchema)

module.exports = kindModel