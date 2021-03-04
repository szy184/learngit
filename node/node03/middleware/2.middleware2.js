const express = require('express');
const app = express();

function middleware(req,res,next){
    console.log('这里是中间件');
    next();
}
app.use(middleware);//使用全局自定义中间件，放在起始位置

app.get('/hehe',(req,res)=>{
    console.log('hehe');
})
app.get('/xixi',(req,res)=>{
    console.log('xixi');
})
app.listen(3000,()=>{
    console.log('服务器启动成功')
})