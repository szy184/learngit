//这个路由负责文件上传

const express = require('express');
const multer = require('multer');
const fs = require('fs')
const path = require('path')
const upload = multer({});
const router = express.Router();

router.post('/img',upload.single('hehe'),(req,res)=>{//上传
    
    let {buffer,mimetype,size} = req.file
    //判断尺寸  1.前端判断  2，后端判断
    if(size>=20000000){
        return res.send({err:-1,msg:'图片尺寸过大'})
    }
    //限制文件类型  1.前端判断  2，后端判断
    let types = ['jpg','png','gif','jpeg'];
    let extName = mimetype.split('/')[1];
    if(types.indexOf(extName)===-1){
        return res.send({err:-2,msg:'图片类型错误'})
    }
    //将静态资源目录下
    //http://localhost:3000/public/img/1581686391511_729373.jpeg
    let name = (new Date()).getTime()+`_`+parseInt(Math.random()*999999)
    fs.writeFile(path.join(__dirname,`../public/img/${name}.${extName}`),buffer,(err)=>{
        if(err){
            res.send({err:-3,msg:'文件上传失败'})
        }else{
            res.send({err:0,msg:'文件上传ok',path:`/public/img/${name}.${extName}`})
        }
    })
})

module.exports = router