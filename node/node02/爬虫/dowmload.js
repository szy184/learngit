/*
下载一个图片
http 或者 https 模块
数据是分段了  data  end  error
*/

const https = require('https');
const fs = require('fs');

//let url = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1912956482,2097081754&fm=26&gp=0.jpg'
let url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581410935120&di=667b32bd2e69f252c3f69c5d49c5a701&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2659453266%2C784181086%26fm%3D214%26gp%3D0.jpg';
https.get(url,(res)=>{
    res.setEncoding('binary');//图片二进制格式
    let rawData = '';
    res.on('data',(chunk)=>{
        rawData += chunk;
    })
    res.on('end',()=>{
        console.log(rawData);
        fs.writeFile('./start.jpg',rawData,'binary',(err)=>{
            console.log(err);
        })
    })
}).on('error',(err)=>{
    console.log('文件下载失败');
})