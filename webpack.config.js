const path = require('path')    //node内置模块

module.exports = {
    entry: './src/index.js',  //入口文件路径
    output: {
        path: path.resolve(__dirname, 'dist'),  //出口文件   __dirname依据当前路径  
        filename: 'main.js'    //出口文件名称
    },
    //这是需要安装上面webpack-dev-server再进行配置
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src'),
        },
        compress: true,
        port: 8087,    //设置端口
        open: true,    //打开浏览器
        hot: true,      //热更新
        host: 'localhost',    //指定地址
    },
}