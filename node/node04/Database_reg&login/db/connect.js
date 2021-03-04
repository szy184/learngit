//数据库的链接文件

var mongoose = require('mongoose');
//连接数据库 默认端口号：27017
mongoose.connect('mongodb://localhost:27017/NZ1911', {useNewUrlParser: true,useUnifiedTopology: true});

var db = mongoose.connection;//数据库的连接对象
db.on('error', ()=>{//错误监听
    console.log('数据库连接失败')
});
db.once('open', function() {//第一次连接的监听
  // we're connected!
  console.log('数据库第一次连接成功')
});