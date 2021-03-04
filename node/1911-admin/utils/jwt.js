const JWT = require('jsonwebtoken')
//对jwt相关的封装
const secret = 'afefvfdhthdsh'//密匙
let createToken = (data,expiresIn)=>{//创建token的函数
    let obj = {}
    obj.data = data||null //token数据
    obj.ctime = (new Date()).getTime()//存入token的时间
    obj.expiresIn = expiresIn||1000*60*60*24//设置的过期时间
   let token =  JWT.sign(obj,secret)//产生的token
    return token
}
let verfiToken = (token)=>{//验证token函数
    let result = null
    try{
        let {data,ctime,expiresIn} = JWT.verify(token,secret)//验证token
        let nowTime = (new Date()).getTime()
        if(nowTime-ctime-expiresIn){
            result = data
        }
    }
    catch(err){
    }
   
    return result
}

module.exports = {createToken,verfiToken}