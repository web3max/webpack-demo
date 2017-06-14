module.exports = {
    plugins: [
    	//调用autoprefixer插件,还可以配置选项添加需要兼容的浏览器版本.
        require("autoprefixer")({ browsers: ['ie>=8', '>1% in CN'] })
    ]
}
