module.exports = {
    devtool: "source-map", //配置生成 Source Maps 的选项
    entry: __dirname + "/app/main.js", //入口文件路径
    output: {
        path: __dirname + "/public/", //存放打包后文件的地方路径
        filename: "bundle.js" //打包后的文件名
    },
    devServer: {
        contentBase: "./public",
        port: "9000",
        inline: true,
        historyApiFallback: true,
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
            loader: 'style-loader!css-loader?modules' //跟前面相比就在后面加上了 ?modules
        }]
    }
}
