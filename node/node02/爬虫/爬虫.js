/*
将去哪儿网首页的图片爬到本地
1.先获取到去哪网的网址  https://www.qunar.com/
2.将网址下载到本地  http  https
3.分析网址里的内容  图片链接
4.根据图片链接   下载图片到本地
    xxx.html
    xx.jpg
    xxx.txt
    xxx.doc
    xxx.mp3
*/
//通过http模块发起网络请求
const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio');
 let url = 'https://www.qunar.com/';
//let url = 'https://www.baidu.com/';
https.get(url,(res)=>{
    //请求成功的回调  res 请求的返回结果对象
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
    
    //监听数据改变  当一个数据片段传递完毕后触发
    let rawData = '';
    res.on('data',(chunk)=>{ //数据传输片段
        rawData += chunk;//将每一段数据进行拼接
        console.log('数据变了');
    })

    //数据传输结束  所有数据传输完毕后触发
    res.on('end',()=>{
       // console.log('数据传输结束');
        // 1.fs.writeFile('./baidu.html',rawData,(err)=>{
        //     if(err){
        //         console.log('下载失败')
        //     }
        //     else{
        //         console.log('下载成功')
        //     };
    // })
        //2.使用cheerio 分析数据内容
        const $ = cheerio.load(rawData);
        $('img').each((index,el)=>{
            // console.log('图片'+index);
            // console.log($(el).attr('src'))
            // fs.writeFile('./img'+index+'.jpg',rawData,'binary',(err)=>{
            //     console.log(err)
            // })

            if(index>4){
                return;
            }

            let url1= 'https:'+$(el).attr('src');
            https.get(url1,(res)=>{
                res.setEncoding('binary');//图片二进制格式
                let rawData1 = '';
                res.on('data',(chunk1)=>{
                    rawData1 += chunk1;
                })
                res.on('end',()=>{
                   // console.log(rawData1);
                    fs.writeFile('./qunar'+index+'.jpg',rawData1,'binary',(err)=>{
                        console.log(err);
                    })
                })
              
            }).on('error',(err)=>{
                console.log('文件下载失败');
            })
        })

    }).on('error',(e)=>{
        console.error(`Got error: ${e.message}`);
    });

})
