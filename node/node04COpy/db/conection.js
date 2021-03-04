var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/NZ1911',{ useNewUrlParser: true,useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error',()=>{
    console.log('数据库连接失败')
});
db.once('open', function() {
  console.log('数据库第一次连接成功')
});