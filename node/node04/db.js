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

//创建schema对象  相当于创建表头
var foodSchema = new mongoose.Schema({
    //数据表头
    name: {type:String},
    age:{type:Number}
  });
//schema对象中声明的字段就是需要的字段  多余的不被处理

//将schema对象和数据集合进行关联
//mongoose.model(关联的集合名(复数), schema对象)
var foodModel = mongoose.model('foods', foodSchema);
//要关联的集合名如果写的是单数形式 mongoose会自动变成复数形式(英文)

//执行查询语句
// foodModel.insertMany({name:'hehe',age:123})
// .then((data)=>{
//     console.log('then',data)
// })
// .catch((err)=>{
//     console.log('catch',err)
// })

//查询操作
foodModel.find()
.then((data)=>{
    console.log('then',data)
})
.catch((err)=>{
    console.log('catch',err)
})

//删除操作
// foodModel.remove({_id:'5e45385d57ddd90480a57e06'})
// .then((data)=>{
//     console.log('then',data)
// })
// .catch((err)=>{
//     console.log('catch',err)
// })

//更新
// foodModel.update({_id:'5e4537f7b32b0a16a01f20df'},{$set:{name:'秀儿'}})
// .then((data)=>{
//     console.log('then',data)
// })
// .catch((err)=>{
//     console.log('catch',err)
// })