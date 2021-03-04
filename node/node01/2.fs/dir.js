/*
创建文件夹  mkdir
删除文件夹  rmdir
修改文件夹  rename
读取文件夹  readdir
*/

const fs = require('fs')
// fs.mkdir('./hehe',(err)=>{
//     console.log(err)
// })
// let result = fs.mkdirSync('./haha')
// console.log(result)

// fs.rmdir('./haha',(err)=>{
//     console.log(err)
//     if(err){console.log('删除失败')}
//     else{console.log('删除成功')}
// })

// let result = fs.rmdirSync('./hehe')
// console.log(result)

// fs.rename('./test','./demo',(err)=>{
//     console.log(err)
// })

fs.readdir('./',(err,info)=>{
    //err 读取状态   info 读取到的内容
    console.log(err,info)
})