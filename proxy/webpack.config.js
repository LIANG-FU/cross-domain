const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');       //html文件打包，压缩

module.exports = {
    mode: 'production',
    entry: {        //入口文件
        index: './src/index.js',
    },
    output: {       //出口文件

        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.min.js'
    },
    devServer:{
        port:3000,
        // 显示加载打包进度
        progress:true,
        // 指定静态资源目录
        contentBase:'./build',
        proxy:{
            '/':{
                target:'http://127.0.0.1:8003',
                changeOrigin:true
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',      //指定要打包的html
            filename:'index.html',       //指定输出路径和文件名
        }),
    ]
};