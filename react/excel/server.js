const express = require('express')
const fs = require('fs')
const XLSX = require('xlsx')
const app = new express()

let arr = [
    ['姓名','age','sex'],
    ['joky','19','male'],
    ['marry','22','woman']
]
let sheet = XLSX.utils.aoa_to_sheet(arr)
let book = XLSX.utils.book_new()
XLSX.utils.book_append_sheet(book,sheet)
XLSX.writeFile(book,'heeh.xlsx')
//返回数据的接口
app.get('/getexcel',(req,res)=>{
    let file =fs.readFileSync('./heeh.xlsx')
    //让文件作为附件的形式下载
    res.attachment('呵呵哒.xlsx')
    res.send(file)
})
app.listen(3000,()=>{
    console.log('server start')
})