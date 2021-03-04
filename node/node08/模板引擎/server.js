const express = require('express');
const app = express();

app.set('view engine','ejs');
app.get('/test',(req,res)=>{
    //res.send({err:0,msg:'OK'})
    //渲染一个模板引擎文件
    res.render('index',{name:'网易',age:21})
})
app.listen(3000,()=>{
    console.log('server start')
})