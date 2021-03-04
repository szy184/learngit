const path =require('path')
//单入单出口
module.exports={
    entry:'./demo3/src/index.js',//指定入口文件
    output:{
        path:path.join(__dirname,'./demo3/output'),//出口文件夹
        filename:'xixi.js'//出口的文件名
    }
}