//错误的捕获  同步捕获 trycatch
const fs = require('fs')
console.log(1)
try {//需要捕获错误的代码
    fs.mkdirSync('./test')
} catch (error) {//需要捕获的代码出现错误就会执行catch 方法  也不会阻断下面代码执行
    console.log(error)
}
console.log(2)
//同步    抛出错误  会终止以下代码的执行


//异步的捕获错误  错误的回调优先  在回调函数中第一个参数一定是表示错误信息
//错误状态   null 表示执行Ok  包含错误信息则表示失败
// fs.mkdir('./test',(err)=>{
//     console.log(err)
// })