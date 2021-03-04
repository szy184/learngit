const express = require('express');
const router = express.Router();//创建路由对象

router.get('/login',(req,res)=>{
    res.send('这里是用户登录');
})
router.get('/reg',(req,res)=>{
    res.send('这里是用户注册');
})

module.exports = router;