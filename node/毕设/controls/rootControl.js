const rootModel = require('../db/model/rootModel')
//注册
let rootReg = async (name,pass)=>{
    //1.邮箱是否重复
    let isExst =await rootModel.findOne({name})
    let result ='';
    //如果查询到数据 返回查到的数据 没有返回假
    if(isExst){
        throw '已注册'
    }else{
        result = await rootModel.insertMany({name,pass})
    }
    return result
}
//用户登录
let rootLogin = async (name,pass)=>{
    let result = await rootModel.findOne({name,pass})
    if(result){
        return {msg:"登录ok",result}
    }else{
        throw '用户名或密码不存在'
    }
}

//退出登录
// let logOut = async (_id)=>{
//     let result = await UserModel.updateOne({_id},{token:''})
//     if(result){
//         return result
//     }else{
//         throw '退出失败请重试'
//     }
// }
module.exports = {rootReg,rootLogin}