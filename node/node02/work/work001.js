const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');

let url = 'https://www.baidu.com';
request(url, function (error, response, body) {
  console.error('error:', error); // 错误信息
  console.log('statusCode:', response && response.statusCode); //返回对象
  //console.log('body:', body); // 需要的数据
  let $ = cheerio.load(body);
  $('img').each((index,el)=>{
      let imgSrc = $(el).attr('src');
     // if(imgSrc.indexOf('http://'===-1)){
         if(/^(http:).*$/.test(imgSrc)){

         }else{
              imgSrc = 'http:'+imgSrc
         }
         
      //}
      console.log(imgSrc)
      loadImg(index,imgSrc)
  })
});
function loadImg(index,src){
    if(/^.*(png)$/.test(src)){
       request(src)
      .pipe(fs.createWriteStream(`./${index}.png`))
    }
    if(/^.*(jpg)$/.test(src)){
        request(src)
        .pipe(fs.createWriteStream(`./${index}.jpg`))
    }
    if(/^.*(gif)$/.test(src)){
        request(src)
        .pipe(fs.createWriteStream(`./${index}.gif`))
    }
}