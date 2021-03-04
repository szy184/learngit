let url = 'mongodb://101.200.169.41:27017/test'
const mongoose = require('mongoose')
mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false })
var db = mongoose.connection;
db.on('error',()=>{
    console.log('数据库连接失败')
})
db.once('open',function(){
    console.log('数据库连接成功')
})