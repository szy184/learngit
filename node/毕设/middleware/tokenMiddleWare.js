const {verfiToken} = require('../utils/jwt')
const {tokenCheck} = require('../controls/userControl')
let tokenMiddleWare = (req,res,next)=>{
    let {token} = req.body
    if(!token){
        return res.send({err:-997,msg:'token丢失'})
    }
    //获取验证token的状态码
    let tokenState = verfiToken(token)
    console.log(tokenState)
    if(tokenState){
        //判断数据库token和用户传递的token 是否一致
        tokenCheck(tokenState._id,token)
        .then(()=>{
            next()
        })
        .catch((err)=>{
            res.send({err:-999,msg:err})
        })
    }else{
        res.send({err:-998,msg:'token失效'})
    }
}
module.exports = tokenMiddleWare