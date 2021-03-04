/*
短信轰炸器  每隔 1s 发一条短信
邮箱轰炸器  没隔 1s 发一条邮件
通过第三方模块发送邮件  nodemailer
*/
//node_modules/nodemailer/lib/well-know/services.json

const nodemailer = require("nodemailer");//引入第三方nodemailer模块
function foo(){//封装
    let transporter = nodemailer.createTransport({  //创建发送邮件的对象
    host: "smtp.qq.com",//查询node_modules/nodemailer/lib/well-know/services.json
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: '737101985@qq.com', // 发送方邮箱账号
        pass: 'wjhfmjwopwjxbfca' // 邮箱的授权码 进入QQ邮箱-设置
    }
    });
    // 邮件的内容
    let content ={
    from: '"Fred Foo 👻" <737101985@qq.com>', // sender address
    to: "737101985@qq.com", // list of receivers
    subject: "Hello ✔", // Subject line
    
    html: "<b>欢迎光临逆战1911</b>" // html body
    }
    setInterval(function(){//计时器
        //调用sendMail方法发送 
        transporter.sendMail(content,(err)=>{
            console.log(err)//输出
        });
    },5000)
}
foo()//调用