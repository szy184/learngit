const fs = require('fs')//引入fs模块
const path = require('path')//引入path模块
function loaddir(tagdir,deep){
    let info = fs.readdirSync(tagdir)//读取当前文件
    //console.log(info)
    let file = []//声明存放文件的数组变量
    let dir = []//声明存放文件夹的数组变量
    info.forEach(item=>{//遍历info
        let nextdir = path.join(tagdir,item)//声明变量（路径）
        let state = fs.statSync(nextdir)//声明变量（文件/文件夹）
        if(state.isFile()){//判断state是否为文件
            file.push(item) //是 将item放入file中
        }else{
            dir.push(item)//否则放入dir中
        }
    });
    dir.forEach(item=>{//文件夹递归
    console.log(item)//打印文件夹名
        let nexttag = path.join(tagdir,item)//声明变量（路径）
        let nextdeep = deep+1//声明变量（层级）
        loaddir(nexttag,nextdeep)//调用函数（递归）
    });
    let count=file.length-1 //计数器
    file.forEach(item => {//文件递归
        if(count--){
            console.log(`  ${item}`) //打印文件名
        }else{
            console.log(`${item}`)  
        }  
    });

}
loaddir(__dirname,1);//调用