const https = require('https');//引入https模块
const cheerio = require('cheerio');//引入cheerio模块
const fs = require('fs');//引入fs模块
let url = 'https://www.qunar.com/';//地址变量
https.get(url, (res) => {
    //请求成功的回调  res  请求的返回结果对象
  const { statusCode } = res;
  const contentType = res.headers['content-type'];
  let rawData = ''; //声明变量
  res.on('data', (chunk) => { //数据传输片段
       rawData += chunk; //每一段数据进行拼接
    });
  res.on('end', () => {//数据传输结束，触发该代码
    //使用cheerio分析数据内容
      const $ = cheerio.load(rawData);
      $('img').each((index,el)=>{//遍历
        if(index>4){//打印 5 个
            return;
        }
          let url1 = 'https:'+$(el).attr('src');
          https.get(url1,(res)=>{
              res.setEncoding('binary');//图片二进制格式
              let rawData1 = '';
              res.on('data',(chunk)=>{
                  rawData1 += chunk;
              })
              res.on('end',()=>{//数据传输结束，触发该代码
                  fs.writeFile('./qunar'+index+'.jpg',rawData1,'binary',(err)=>{//创建xx.jpg
                      console.log(err);
                  })
              })
          }).on('error',(err)=>{//监听请求错误
              console.log('文件下载失败');
          })
      })
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});