var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: "source-map", //配置生成 Source Maps 的选项
    entry: __dirname + "/app/main.js", //入口文件路径
    output: {
        path: __dirname + "/build/", //存放打包后文件的地方路径
        filename: "bundle.js" //打包后的文件名
    },
    devServer: {
        port: "9000",
        inline: true,
        historyApiFallback: true,
        hot: true
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
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."), //在这个数组中new一个实例就可以了
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new一个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ]
}
