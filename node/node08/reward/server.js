const express = require('express')
const app = express()
const {sendAll} = require('./ws')

app.get('/reward',(req,res)=>{
    let {reward} = req.query
    sendAll(reward)
    res.send({err:0,msg:'发送ok'})
})
app.listen(3000,()=>{
    console.log('server start')
})