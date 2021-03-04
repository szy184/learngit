const express = require('express');
const app  = express();
const bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.post('/test',(req,res)=>{
    console.log(req.body)
})
app.listen(3000,()=>{
    console.log('服务器启动');
})