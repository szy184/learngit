/*
1.产生token
2.验证token合法性
*/

const jsonwebtoken = require('jsonwebtoken')
let payload = {name:'网易',ps:123}
let secret ="afgsgdfbh214"
//参数1 要加密的数据  参数2 产生token的密钥
let token = jsonwebtoken.sign(payload,secret)//可同步可异步 产生token
console.log(token)

//参数1 要验证的token  参数2 产生token的密钥
let result = jsonwebtoken.verify(token,secret)//可同步可异步 验证token
console.log(result)