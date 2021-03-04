const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2>')
 
console.log($('.title').text())