const express = require('express');
const path = require('path');
const fs = require('fs')
const bodyParser = require('body-parser')
var multer  = require('multer')
//创建multer对象
var upload = multer({})
const app = express();

app.use('/public',express.static(path.join(__dirname,'./www')))

//上传图片必须用post方式
app.post('/file',upload.single('xixi'),(req,res)=>{
//req.file 上传文件信息默认是不存在的 只有被multer中间件处理过才有
console.log(req.file)
//buffer 上传的图片的数据
let {buffer,mimetype,size,originalname} = req.file
//及那个buffer写入文件内部
//防止文件被覆盖  保证文件的唯一性  时间戳
let name = (new Date()).getTime()+'_'+parseInt(Math.random()*1000000)
//让后缀名 和源文件保持一致
let  ext = originalname.split('.')[1]
fs.writeFile(path.join(__dirname,`./www/${name}.${ext}`),buffer,(err)=>{
    if(err){
        res.send({err:-1,msg:'图片上传失败'})
    }else{
        res.send({err:0,msg:'图片上传ok'})
    }
})
})
app.listen(3000,()=>{
    console.log('服务器启动')
})