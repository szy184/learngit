const express = require('express');
const router = express.Router();

router.get('/add',(req,res)=>{
    res.send('食物添加');
})
router.get('/del',(req,res)=>{
    res.send('食品删除');
})

module.exports = router;