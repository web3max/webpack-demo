var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/main.js", //入口文件路径
    output: {
        path: __dirname + "/build/", //存放打包后文件的地方路径
        filename: "bundle.js" //打包后的文件名
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: "json-loader"
        }, {
            test: /\.js$/,
            exclude: /node_modules/, //编译打包时需要排除 node_modules 文件夹
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules!postcss-loader' //跟前面相比就在后面加上了 !postcss-loader
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new一个插件的实例，并传入相关的参数
        })
    ]
}
