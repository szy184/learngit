const path =require('path')
module.exports={
    mode:"development",
    entry:{
        xixi:'./demo4/src/xixi.js',
        hehe:'./demo4/src/hehe.js'
    },
    output:{
        path:path.join(__dirname,'./demo4/dist'),
        filename:'[name]_[hash].js'
        //name 代表的是入口的key值
        //hash 唯一不重复的hash
    }
}