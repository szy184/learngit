//scoket 服务器用来推送消息
const webscoket = require('ws');
const ws = new webscoket.Server({port:3003});
let clients = [];//用来保存所有的客户端对象
ws.on('connection',(client)=>{
    console.log('客户端已连接')
    clients.push(client)
})
//广播 给所有的用户发送一条消息
function sendAll(reward){
    let num = parseInt(Math.random()*3)
    for (let index = 0; index < clients.length; index++) {
         
        if(index==num){
            clients[index].send('恭喜中奖:获得'+reward);
        }else{
            clients[index].send('谢谢惠顾');
        }
    }
}
// setTimeout(()=>{
//     sendAll()
// },15000)
module.exports = {sendAll}