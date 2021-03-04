const path = require('path')
module.exports={
    mode:'production',
    entry:'./demo5/src/index.js',
    output:{
        path:path.join(__dirname,'./demo5/dist'),
        filename:'main.js'
    },
    module: {
        rules: [
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {}
              }
            ]
          }
        ]
      }
}