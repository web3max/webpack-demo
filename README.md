![SpringBride](http://upload-images.jianshu.io/upload_images/6171922-d747406cb169a6d7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

最近在学习 Webpack,网上大多数入门教程都是基于 Webpack 1.x 版本的,
我学习 Webpack 时候是看了 [**zhangwang**](http://www.jianshu.com/u/7091a52ac9e5) 
的 [**<<入门Webpack，看这篇就够了>>**](http://www.jianshu.com/p/42e11515c10f) 写的非常好,
不过是基于 Webpack 1.x 版本的,语法上和 Webpack 2.x 有一点不同.我学习时是使用 Webpack 2.6.1 版本,
所以我就寻思着基于  [**zhangwang**](http://www.jianshu.com/u/7091a52ac9e5) 
的 [**<<入门Webpack，看这篇就够了>>**](http://www.jianshu.com/p/42e11515c10f) 写下这篇 Webpack 2.x 的入门实战,
是我学习 Webpack 的记录.听说 Webpack 3.x 版本快要出了,不得不感叹前端领域发展的真是太快了!

## Webpack 是什么?

> Webpack 是前端资源模块化管理和打包工具。

> Webpack 可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。

> Webpack 可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。

> Webpack 通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS、 SASS 等。

一图胜千言,下图足够说明上面巴巴拉拉一大堆是啥了!

![bundle your assets](http://upload-images.jianshu.io/upload_images/6171922-f40a5af399821919.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如果在开发中你遇到了以下问题,那么使用 Webpack 吧!
- 载入有问题的依赖项
- 意外引入一些你不需要在生产中用上的 CSS 样式表和 JS 库，使项目膨胀
- 意外的多次载入库
- 遇到作用域的问题 (CSS 和 JavaScript 都会有)
- 寻找一个让你在 JavaScript 中使用 Node/Bower 模块的构建系统，要么就得依靠一个令人发狂的后端配置才能正确地使用这些模块
- 需要优化资产asset交付，但你担心会弄坏一些东西

对于模块的组织，通常有如下几种方法：
- 分开写几个 js 文件,使用 script 标签加载
- CommonJS 进行同步加载, Node.js 就使用这种方式
- AMD进行异步加载, require.js 使用这种方式
- 新的 ES6 模块

## Webpack 的特点

- 丰富的插件，流行的插件都有,方便进行开发工作
- 大量的加载器，便于处理和加载各种静态资源
- 将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。
- 发布工具

## Webpack 的优势

- Webpack 以 commonJS 的形式来书写脚本，但对 AMD/CMD/ES6 模块 的支持也很全面，方便旧项目进行代码迁移。
- 所有资源都能模块化。
- 开发便捷，能替代部分 Grunt/Gulp 的工作，比如打包、压缩混淆、图片转 base64、SASS 解析成 CSS 等。
- 扩展性强，插件机制完善，特别是支持模块热替换（见  [**模块热替换**](http://www.css88.com/doc/webpack2/concepts/hot-module-replacement/) ）的功能让人眼前一亮。

## Webpack 与 Grunt / Gulp

在没有学习 Webpack 之前我对  Webpack、Grunt、Gulp 的认识很模糊,只知道好像这三个东西都是前端自动化工具,都是用来使前端自动化、模块化、工程化的,这三者是可以替代彼此的前端工具.

其实 Webpack 和 Gulp / Grunt  并没有太多的可比性，Gulp / Grunt 是一种能够优化前端开发流程的自动化工具，而 Webpack 是一种模块化的解决方案，不过 Webpack 的优点使得 Webpack 可以替代 Gulp / Grunt 一部分工作。

Grunt / Gulp 的工作方式是：在一个配置文件中，指明对某些文件需要进行哪些处理,例如：编译、组合、压缩等任务的具体步骤，Grunt / Gulp 之后可以自动替你完成这些任务。Grunt / Gulp的工作流程如下图：

![Gulp / Grunt](http://upload-images.jianshu.io/upload_images/1031000-d0693c06bb3a00e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Webpack 的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（ 如：index.js ），Webpack 将从这个文件开始找到你的项目的所有依赖文件，使用 loaders 处理它们，最后打包为一个浏览器可识别的 JavaScript 文件。Webpack工作方式如下图：

![Webpack](http://upload-images.jianshu.io/upload_images/1031000-160bc667d3b6093a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如果实在要进行比较,Webpack  的处理速度更快更直接,因为 Webpack 的历史包袱小.Webpack 还能打包更多不同类型的文件。

## 开始使用 Webpack

初步了解 Webpack 后，就可以开始学习使用 Webpack。这里会以一个小的 Demo 为例子来一步一步进行动手学习!

### 安装 Webpack

Webpack 可以使用 npm 安装,如果你还不知道 npm 为何物,请 Google,也可以参考 [Node.js 安装配置](http://www.runoob.com/nodejs/nodejs-install-setup.html)和 [NPM 使用介绍](http://www.runoob.com/nodejs/nodejs-npm.html)快速了解、安装 npm.

使用终端在该文件夹中执行下述指令就可以完成安装,由于网络原因安装过程可能需要一些时间。

```
//全局安装
npm install -g webpack
//安装到你的项目目录
npm install --save-dev webpack
```

Webpack 可以全局安装,也可以安装到你的项目目录.刚开始学习 Webpack 为了方便,建议同时全局安装和安装到你的项目目录..

### 新建 Webpack 项目
**1.** 新建一个文件夹,命名为 webpack-demo,webpack-demo 就是你的项目名,项目名建议使用小写字母，并且不带空格，不能含有大写字母.

**2.** 在 webpack-demo 文件夹中创建一个 package.json 文件，这是一个标准的 npm 说明文件，里面蕴含了丰富的信息，包括当前项目的依赖模块，自定义的脚本任务等等。在终端中使用 npm init 命令可以自动创建这个 package.json 文件.

```
npm init
```

输入这个命令后，终端会问你一系列诸如项目名称,项目版本,项目描述,入口文件,作者等信息，不过不用担心，如果你不准备在 npm 中发布你的模块，这些问题的答案都不重要，回车默认即可.这些信息今后都可以更改 package.json 来修改,所以不用担心.

**3.** 在 webpack-demo 文件夹中创建两个文件夹 app 文件夹和 public 文件夹, app 文件夹用来存放原始数据,例如: SASS 文件、LESS 文件、JavaScript 模块等，public 文件夹用来存放经过 Webpack 处理过的 app 文件夹数据,这也是准备给浏览器读取的数据,其中包括使用 Webpack 打包后的 js 文件等。在这里还需要在 public 文件夹中创建 index.html 文件.在 app 文件夹中创建 Greeter.js 和 main.js 文件，此时项目结构如下图所示:

![项目结构](http://upload-images.jianshu.io/upload_images/6171922-cf2a7dd5754319a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**4.** 在 public 文件夹中的 index.html 文件只有最基础的 html 代码，它唯一的目的就是加载打包后的 js 文件 bundle.js.


```
// index.html

<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <title>webpack-demo</title>
</head>

<body>
    <div id='root'>
    </div>
    <script type="text/javascript" src="bundle.js"></script>
</body>

</html>
```

**5.** 在 app 文件夹中的 Greeter.js 只包括一个用来返回问候信息的 html 元素的函数。

```
// Greeter.js

module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = "Hi there and greetings!";
    return greet;
}
```

**6.** 在 app 文件夹中的 main.js 用来把 Greeter 模块(其实可以简单的把它看作 Greeter.js)返回的节点插入页面。

```
// main.js

var greeting = require('./Greeter.js');
document.getElementById('root').appendChild(greeting());
```

### Webpack 配置文件

Webpack 配置文件其实也是一个简单的 JavaScript 模块，可以把所有与项目构建相关的信息放在里面。在 webpack-demo 文件夹根目录下新建一个名为 webpack.config.js 的文件，并在其中进行最简单的配置.如下所示，它包含入口文件路径和存放打包后文件的地方路径。

```
// webpack.config.js

module.exports = {
    entry: __dirname + "/app/main.js", //入口文件路径
    output: {
        path: __dirname + "/public/", //存放打包后文件的地方路径
        filename: "bundle.js" //打包后的文件名
    }
}
```

> 注：__dirname 是 node.js 中的一个全局变量，它指向当前 js 文件所在的目录.

现在只需要在终端里运行 webpack 命令就可以了，这条命令会自动参考 webpack.config.js 文件中的配置选项打包你的项目，输出结果如下:

![终端结果](http://upload-images.jianshu.io/upload_images/6171922-d4ef20b686aa3e30.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

此时项目的 public 文件夹下也会出现打包好的 bundle.js 文件.此时项目结构如下图所示:

![项目结构](http://upload-images.jianshu.io/upload_images/6171922-ecf9dc2353d4bbe7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

可以看出 webpack 同时编译了 main.js 和 Greeter,js,打开 public 目录下的 index.html 文件,就可以看到最终效果,如下图:

![最终效果](http://upload-images.jianshu.io/upload_images/6171922-0739951957c32cef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 利用 npm 更快捷的执行打包任务

通过 Webpack 配置文件和执行 webpack 命令其实是比较烦人且容易出错的，不过值得庆幸的是 npm 可以引导任务执行，对其进行配置后可以使用简单的 npm start 命令来代替这些繁琐的命令。在 package.json 中对 npm 的脚本部分进行相关设置，相当于把 npm 的 start 命令指向 webpack 命令，设置方法如下:

```
// package.json

{
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "scripts": {
        "start": "webpack"
    },
    "author": "",
    "license": "ISC"
}
```

执行 npm start 后命令行的输出显示:

![npmStartTermialResult](http://upload-images.jianshu.io/upload_images/6171922-013d2aa156f883a2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

现在只需要使用 npm start 就可以打包文件了.打开 public 目录下的 index.html 文件,看到的最终效果是不是与之前的一样.

## 利用 Webpack 生成 Source Maps

简单说，Source Maps 就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置.有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码。这无疑给开发者带来了很大方便.为了方便调试可以利用 Webpack 生成 Source Maps.

在 Webpack 的配置文件中配置 Source Maps，需要配置 devtool，它有以下四种不同的配置选项，各有优缺点，描述如下：

- source-map 在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最方便调试的 Source Maps，但是这个文件会比较大,会减慢打包文件的构建速度.
- cheap-module-source-map 在一个单独的文件中生成一个不带列映射的 Source Maps，不带列映射能够提高项目构建速度，但这也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列，会对调试造成不便.
- eval-source-map 在同一个文件中生成干净的完整的 Source Maps。这个选项可以在不影响构建速度的前提下生成完整的 Source Maps，但是对打包后输出的 js 文件的执行具有性能和安全的隐患。不过在开发阶段这是一个非常好的选项，但是在生产阶段一定不要用这个选项.
- cheap-module-eval-source-map 这是在打包文件时最快的生成 Source Maps 的方法，生成的Source Map 会和打包后的 js 文件同行显示，没有列映射，和 eval-source-map 选项具有相似的缺点,文件的执行具有性能和安全的隐患.

上述选项由上到下打包速度越来越快，不过同时也具有越来越多的负面作用，较快的构建速度的后果就是对打包的文件执行有一定影响。在学习阶段以及在小到中型的项目上，eval-source-map是一个很好的选项，不过记得只在开发阶段使用它.

编辑 webpack-demo 文件夹下的 webpack.config.js 文件配置 devtool 选项,生成 Source Maps 文件.配置 devtool 后的 webpack.config.js 文件如下: 


```
// webpack.config.js

module.exports = {
    devtool: "source-map", //配置生成 Source Maps 的选项
    entry: __dirname + "/app/main.js", //入口文件路径
    output: {
        path: __dirname + "/public/", //存放打包后文件的地方路径
        filename: "bundle.js" //打包后的文件名
    }
}
```

执行 npm start 命令后就能生成对应的 Source Maps,终端输出信息如下图:

![终端输出信息](http://upload-images.jianshu.io/upload_images/6171922-2d38a2d00238a9c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

此时项目中 public 文件夹下也生成了名为 bundle.js.map 的 Source Maps 文件.此时项目结构如下图所示:

![项目结构](http://upload-images.jianshu.io/upload_images/6171922-cc49c4ee883a07a9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 使用 Webpack 构建本地服务器

想不想让你的浏览器监测你修改的代码，并自动刷新修改后的结果.其实 Webpack 提供一个可选的本地开发服务器，这个本地服务器基于 node.js 构建，可以实现你想要的这些功能，不过它是一个单独的组件，在 Webpack 中进行配置之前需要单独安装它作为项目依赖.在终端中输入下面的指令安装对应组件.建议同时全局安装和安装到你的项目目录.

```
//全局安装
npm install -g webpack-dev-server
//安装到你的项目目录
npm install --save-dev webpack-dev-server
```

devserver 作为 Webpack 配置选项中的一项，具有以下配置选项

- contentBase 默认 webpack-dev-server 会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"文件夹下）.
- port 设置默认监听端口，如果省略，默认为"8080".
- inline 设置为 true，当源文件改变时会自动刷新页面.
- historyApiFallback 在开发单页应用时非常有用，它依赖于 HTML5 history API，如果设置为 true，所有的跳转将指向 index.html.

编辑 webpack-demo 文件夹下的 webpack.config.js 文件配置以上选项.

```
// webpack.config.js

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
    }
}
```
在终端中输入如下命令,构建本地服务器:

```
webpack-dev-server
```

终端输出信息如下图,表示 Webpack 构建的本地服务器已启动.

![终端输出信息](http://upload-images.jianshu.io/upload_images/6171922-c05e6aab3bff8e82.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在浏览器中打开 http://localhost:9000/ 就可以看到像之前一样的问候语页面.

![结果](http://upload-images.jianshu.io/upload_images/6171922-158ec2295ac97afc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

也可以使用 npm 更快捷的执行任务,编辑 webpack-demo 文件夹下的 package.json 文件 scripts 选项.

```
// package.json

{
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "scripts": {
        "start": "webpack",
        "dev": "webpack-dev-server --devtool eval --progress --content-base build"
    },
    "author": "",
    "license": "ISC"
}
```

在终端中执行 npm run dev 命令,输出信息如下图,一样可以启动的本地服务器.

![image.png](http://upload-images.jianshu.io/upload_images/6171922-086bf67af509a1d3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

按 ***Ctrl + C*** 即可退出本地服务器.

## 一切皆模块

Webpack 有一个不可不说的优点，它把所有的文件都可以当做模块处理，包括你的 JavaScript 代码，也包括 CSS 和 fonts 以及图片等等，只要通过合适的 Loaders，它们都可以被当做模块被处理.

### Loaders

webpack 可以使用 loader 来预处理文件。这允许你打包除 JavaScript 之外的任何静态资源.通过使用不同的 loader，Webpack 通过调用外部的脚本或工具可以对任何静态资源进行处理，比如说分析 JSON 文件并把它转换为 JavaScript 文件，或者说把 ES6 / ES7 的 JS 文件转换为现代浏览器可以识别的 JS 文件.对 React 开发而言，合适的 Loaders 可以把 React 的 JSX 文件转换为 JS 文件.

Loaders 需要单独安装并且需要 在webpack.config.js 下的 modules 关键字下进行配置，Loaders 的配置选项包括以下几方面：

- test：一个匹配 Loaders 所处理的文件的拓展名的正则表达式（必须）
- loader：loader 的名称（必须）
- include/exclude: 手动添加必须处理的文件/文件夹,或屏蔽不需要处理的文件/文件夹（可选）
- query：为 Loaders 提供额外的设置选项（可选）

继续动手实践,修改 app 文件夹下的 Greeter.js 文件,把问候消息放在一个单独的 JSON 文件里,通过 loader 的使 Greeter.js 可以读取该 JSON 文件.

**1.** 在 app 文件夹下创建 config.json 文件,并输入如下代码:

```
//config.json

{
	"greetText": "Hi there and greetings from JSON!"
}
```

**2.** 编辑 app 文件夹下的 Greeter.js 文件,修改后如下:

```
// Greeter.js

var config = require('./config.json');

module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
}
```

**3.** 安装支持导入 JSON 文件的 json-loader .由于 webpack 2.× 默认支持导入 JSON 文件.如果你使用自定义文件扩展名，可能仍然需要使用此 loader.在终端中运行如下命令,安装 json-loader 到你的项目中.

```
//安装到你的项目中
npm install --save-dev json-loader
```

因为 json-loader 安装到你的项目目录里了,所以 webpack-demo 项目下会新增一个 node_modules 文件夹用于存放安装的 json-loader.此时的项目结构如下:

![项目结构](http://upload-images.jianshu.io/upload_images/6171922-6c7789f9d711b83c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**4.** 编辑 webpack.config.js 文件配置 modules 选项,添加 json-loader,编辑后的文件如下:

```
// webpack.config.js

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
        }]
    }
}

```

在终端中输入 npm start 重新编译打包,再在浏览器中打开 public 文件夹下的 index.html 文件,如果看到和下图一样的,就说明 json-loader 配置成功了.

![index.html](http://upload-images.jianshu.io/upload_images/6171922-1a95a41ffe92c753.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### Babel

Babel 其实是一个编译 JavaScript 的平台，它的强大之处表现在可以通过编译帮你达到以下目的：

- 把 ES6 / ES7 标准的 JavaScript 转化为浏览器能够解析的 ES5 标准的 JavaScript. 
- 使用基于 JavaScript 进行了拓展的语言，比如 React 的 JSX.

### Babel的安装与配置

Babel 其实是几个模块化的包，其核心功能位于称为 babel-core 的 npm 包中，不过 Webpack 把它们整合在一起使用，但是对于每一个你需要的功能或拓展，你都需要安装单独的包.用得最多的是解析 ES6 的 babel-preset-es2015 包和解析 JSX 的 babel-preset-react 包.

先来安装这些依赖包,输入如下命令,把这些依赖包安装到你的项目中.

```
// 利用 npm 一次性安装多个依赖模块，模块之间用空格隔开
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react

//安装 React 和 React-DOM
npm install --save react react-dom
```

编辑 webpack.config.js 文件配置 modules 选项,添加 Babel 配置,编辑后的文件如下:


```
// webpack.config.js

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
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}
```

使用 ES6 的语法，更新 app 文件夹下的 Greeter.js 文件,并返回一个 React 组件,修改后的代码如下:

```
// Greeter.js

import React, { Component } from 'react';
import config from './config.json';

class Greeter extends Component {
    render() {
        return (<div> { config.greetText } </div>);
        }
    }

    export default Greeter;
```

使用 ES6 的模块定义和渲染 Greeter 模块,修改 app 文件夹下的 main.js 文件,修改后的代码如下:

```
// main.js

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

render(<Greeter />, document.getElementById('root'));
```

在终端中运行 npm start 命令重新编译打包,终端输出信息如下:

![终端输出信息](http://upload-images.jianshu.io/upload_images/6171922-37b879ff317de42d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在浏览器中打开 public 文件夹下的 index.html 文件,如果看到和下图一样的,就说明已经成功配置了 Babel.

![index.html](http://upload-images.jianshu.io/upload_images/6171922-1a95a41ffe92c753.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### Babel的配置选项

Babel 其实可以完全在 webpack.config.js 文件中进行配置，但是考虑到 babel 具有非常多的配置选项，在单一的 webpack.config.js 文件中进行配置往往使得这个文件显得太复杂，因此一些开发者支持把 babel 的配置选项放在一个单独的名为 ".babelrc" 的配置文件中。我们现在的 babel 的配置并不算复杂，不过之后我们会再加一些东西，因此现在我们就提取出相关部分，分两个配置文件进行配置, Webpack 会自动调用 .babelrc 里的 babel 配置选项.

编辑 webpack.config.js 文件配置 modules 选项,添加 Babel 配置,编辑后的文件如下:

```
// webpack.config.js

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
        }]
    }
}
```

在 webpack-demo 文件夹下新建 .babelrc 文件,添加如下代码:

```
// .babelrc

{
	"presets": ['es2015', 'react']
}
```

在终端中运行 npm start 命令重新编译打包,终端输出信息如下:

![终端输出信息](http://upload-images.jianshu.io/upload_images/6171922-d1c97e55966383bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在浏览器中打开 public 文件夹下的 index.html 文件,如果看到和下图一样的,就说明已经成功配置了 Babel.

![index.html](http://upload-images.jianshu.io/upload_images/6171922-1a95a41ffe92c753.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### CSS

Webpack 提供两个工具处理样式表，css-loader 和 style-loader.

- css-loader 使你能够使用类似 @import 和 url(...) 的方法实现 require() 的功能
- style-loader 将所有的计算后的样式加入页面中

二者组合在一起使你能够把样式表嵌入 Webpack 打包后的 JS 文件中。

先来安装 css-loader, style-loader,输入如下命令,把这些依赖包安装到你的项目中.

```
npm install --save-dev style-loader css-loader
```

编辑 webpack.config.js 文件配置 modules 选项,添加处理样式表配置,编辑后的文件如下:

```
// webpack.config.js

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
            loader: 'style-loader!css-loader' //添加对样式表的处理,感叹号的作用在于使同一文件能够使用不同类型的 loader
        }]
    }
}

```

接下来，在 app 文件夹里创建一个名为 main.css 的文件，在文件中添加如下代码,对一些元素设置样式.

```
// main.css

html {
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
    margin: 0;
    padding: 0;
}
```

Webpack 只有单一的入口，其它的模块需要通过 import, require, url 等导入相关位置，为了让 Webpack 能找到 main.css 文件，我们把它导入 app 文件夹下的 main.js 中.修改 app 文件夹下的 main.js 文件,修改后的代码如下:

```
// main.js

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.css'; //导入css文件

render(<Greeter/>, document.getElementById('root'));
```

在终端中运行 npm start 命令重新编译打包,终端输出信息如下:

![终端输出信息](http://upload-images.jianshu.io/upload_images/6171922-ce984178eb36f9d0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在浏览器中打开 public 文件夹下的 index.html 文件,如果看到和下图一样的,就说明已经配置成功了.

![index.html](http://upload-images.jianshu.io/upload_images/6171922-d6487985942c51a4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

通常情况下，css 会和 js 打包到同一个文件中，并不会打包为一个单独的 css 文件，不过通过合适的配置 Webpack 也可以把 css 打包为单独的文件的。
不过这也只是 Webpack 把 css 当做模块而已，继续看一个真的 CSS 模块的实践.

### CSS module

在过去的一些年里，JavaScript 通过一些新的语言特性、更好的工具、更好的实践方法（比如说模块化）发展得非常迅速。模块使得开发者把复杂的代码转化为小的、干净的、依赖声明明确的单元，且基于优化工具，依赖管理和加载管理可以自动完成。

不过前端的另外一部分，CSS 的发展就相对慢一些，大多的样式表却依旧是巨大且充满了全局类名，这使得维护和修改都非常困难和复杂。

CSS modules 的技术就能够把 JS 的模块化思想带入 CSS 中来，通过 CSS 模块，所有的类名，动画名默认都只作用于当前模块.

Webpack 从一开始就对 CSS 模块化提供了支持，在 CSS loader 中进行配置后，你所需要做的一切就是把 modules 传递到需要的地方，然后就可以直接把 CSS 的类名传递到组件的代码中，且这样做只对当前组件有效，不必担心在不同的模块中具有相同的类名可能会造成的问题。

编辑 webpack.config.js 文件配置 modules 选项,添加处理样式表配置,编辑后的文件如下:

```
// webpack.config.js

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

```

接下来，在 app 文件夹里创建一个名为 Greeter.css 的文件，在文件中添加如下代码,对一些元素设置样式.

```
// Greeter.css

.root {
    background-color: #eee;
    padding: 10px;
    border: 3px solid #ccc;
}
```

导入 .root 到 Greeter.js 中,修改 app 文件夹下的 Greeter.js 文件,修改后的代码如下:

```
// Greeter.js

import React, { Component } from 'react';
import config from './config.json';
import styles from './Greeter.css'; //导入 .root 到 Greeter.js 中

class Greeter extends Component {
    render() {
        return ( <div className={styles.root}> { config.greetText } </div>);
        }
    }

    export default Greeter;

```

在终端中运行 npm start 命令重新编译打包,终端输出信息如下:

![终端输出信息](http://upload-images.jianshu.io/upload_images/6171922-c618ccf27d09b782.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在浏览器中打开 public 文件夹下的 index.html 文件,如果看到和下图一样的,就说明已经配置成功了.

![index.html](http://upload-images.jianshu.io/upload_images/6171922-b273397dd8cb4e5e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

CSS modules 也是一个很大的主题，有兴趣的话可以去[官方文档](https://github.com/css-modules/css-modules)查看更多消息.下面两篇文章也可以看看:

- [CSS Modules 用法教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)
- [CSS Modules 详解及 React 中实践](http://www.tuicool.com/articles/nYjyEzZ)

### CSS 预处理器

CSS 预处理器可以将 SASS、LESS 文件转化为浏览器可识别的 CSS 文件,以下是常用的CSS 预处理器 loaders.

- Less Loader
- Sass Loader
- Stylus Loader

其实也存在一个 CSS 的处理平台 PostCSS，它可以帮助你的 CSS 实现更多的功能，可以看看[<<PostCSS 是个什么鬼东西？>>](https://segmentfault.com/a/1190000003909268).

举例来说如何使用 PostCSS，我们使用 PostCSS 来为 CSS 代码自动添加适应不同浏览器,不同版本的 CSS 前缀。首先安装 postcss-loader 和 autoprefixer（自动添加前缀的插件）,安装到你的项目中.

```
npm install --save-dev postcss-loader autoprefixer
```
编辑 webpack.config.js 文件配置 modules 选项,添加 postcss-loader 处理样式表配置,编辑后的文件如下:

```
// webpack.config.js

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
            loader: 'style-loader!css-loader?modules!postcss-loader' //跟前面相比就在后面加上了 !postcss-loader
        }]
    }
}

```

在 webpack-demo 文件夹下新建 postcss.config.js 文件,添加如下代码:

```
// postcss.config.js

module.exports = {
    plugins: [
    	//调用autoprefixer插件,还可以配置选项添加需要兼容的浏览器版本.
        require("autoprefixer")({ browsers: ['ie>=8', '>1% in CN'] })
    ]
}

```

现在你写的样式会自动根据 Can i use 里的数据添加不同前缀了.在终端中运行 npm start 命令重新编译打包,终端输出信息如下:

![终端输出信息](http://upload-images.jianshu.io/upload_images/6171922-d2b14d4617b1e4ad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在浏览器中打开 public 文件夹下的 index.html 文件,如果看到和下图一样的,就说明已经成功配置了 PostCSS.

![index.html](http://upload-images.jianshu.io/upload_images/6171922-7820033b119edf76.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 插件(Plugins)

插件(Plugins)是用来拓展 Webpack 功能的，它会在整个构建过程中生效，执行相关的任务。
Loaders 和 Plugins 常常被弄混，但是他们其实是完全不同的东西，可以这么说，Loaders 是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个;插件并不直接操作单个文件，它直接对整个构建过程其作用。

Webpack 有很多内置插件，同时也有很多第三方插件，可以让我们完成更加丰富的功能。

#### 使用插件的方法

要使用某个插件，我们需要通过 npm 安装它，然后要做的就是在 Webpack 配置中的 Plugins 关键字部分添加该插件的一个实例.

编辑 webpack.config.js 文件配置 Plugins 选项,添加一个实现版权声明的 BannerPlugin 插件,BannerPlugin 是内置插件不需要使用 npm 安装.编辑后的文件如下:

```
// webpack.config.js

var webpack = require("webpack");
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
            loader: 'style-loader!css-loader?modules!postcss-loader' //跟前面相比就在后面加上了 !postcss-loader
        }]
    },
    plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc.")//在这个数组中new一个实例就可以了
    ]
}

```

在终端中运行 npm start 命令重新编译打包,终端输出信息如下:

![终端输出信息](http://upload-images.jianshu.io/upload_images/6171922-02a0e451a77db850.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在浏览器中打开 public 文件夹下的 index.html 文件,如果看到和下图一样的,就说明已经成功配置了 BannerPlugin 插件.

![index.html](http://upload-images.jianshu.io/upload_images/6171922-4065baf51446b91b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 常用插件

给大家推荐几个常用的插件

#### HtmlWebpackPlugin

这个插件的作用是依据一个简单的模板，帮你生成最终的 html 文件，这个文件中自动引用了你打包后的 JS 文件。每次编译都在文件名中插入一个不同的哈希值。

##### 安装 HtmlWebpackPlugin 到你的项目中

```
npm install --save-dev html-webpack-plugin
```

在使用 HtmlWebpackPlugin 之前,需要对 webpack-demo 项目结构做一些改变.

**1.** 移除 public 文件夹.

**2.** 在 app 目录下，创建一个文件名为 index.tmpl.html 模板文件，在编译过程中,HtmlWebpackPlugin 插件会依据此模板生成最终的 html 页面,会自动添加所依赖的 css、 js、favicon等文件.index.tmpl.html 模板文件代码如下:

```
// index.tmpl.html

<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <title>webpack-demo</title>
</head>

<body>
    <div id="root"></div>
</body>

</html>
```

**3.** 在 webpack-demo 文件夹下新建一个 build 文件夹用来存放最终的输出文件.

**4.** 编辑 webpack.config.js 文件配置 Plugins 选项,添加 HtmlWebpackPlugin 插件,修改 output 选项.编辑后的文件如下:

```
// webpack.config.js

var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "source-map", //配置生成 Source Maps 的选项
    entry: __dirname + "/app/main.js", //入口文件路径
    output: {
        path: __dirname + "/build/", //存放打包后文件的地方路径
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
            loader: 'style-loader!css-loader?modules!postcss-loader' //跟前面相比就在后面加上了 !postcss-loader
        }]
    },
    plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."), //在这个数组中new一个实例就可以了
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new一个插件的实例，并传入相关的参数
        })
    ]
}

```

此时项目结构如下图所示:

![项目结构](http://upload-images.jianshu.io/upload_images/6171922-def1222420975517.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在终端中运行 npm start 命令重新编译打包,终端输出信息如下:

![终端输出信息](http://upload-images.jianshu.io/upload_images/6171922-8cdb74fbfe8d84c2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

此时项目结构已经发生改变,build 文件夹下存放了最终的输出的文件,项目结构如下图所示:

![项目结构](http://upload-images.jianshu.io/upload_images/6171922-3a52fb51e65074a4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在浏览器中打开 build 文件夹下的 index.html 文件,如果看到和下图一样的,就说明已经成功配置了 HtmlWebpackPlugin 插件.

![index.html](http://upload-images.jianshu.io/upload_images/6171922-baffecbd01dacce7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### Hot Module Replacement

Hot Module Replacement（HMR）也是 Webpack 里很有用的一个插件，它允许你在修改组件代码后，自动刷新实时预览修改后的效果。
在 Webpack 中使用 HMR 也很简单，只需要做两项配置.

- 在 Webpack 配置文件中添加 HMR 插件
- 在 Webpack Dev Server 中添加 hot 参数

不过配置完这些后，JS 模块其实还是不能自动热加载的，还需要在你的 JS 模块中执行一个 Webpack 提供的 API 才能实现热加载，虽然这个 API 不难使用，但是如果是 React 模块，使用我们已经熟悉的 Babel 可以更方便的实现功能热加载。

**整理下思路，具体实现方法如下**

- Babel 和 Webpack 是独立的工具,二者可以一起工作,二者都可以通过插件拓展功能.
- HMR 是一个 Webpack 插件,它让你能浏览器中实时观察模块修改后的效果，但是如果你想让它工作，需要对模块进行额外的配额.
- Babel 有一个叫做 react-transform-hrm 的插件，可以在不同 React 模块进行额外的配置下让 HMR 正常工作.

编辑 webpack.config.js 文件配置 Plugins / devServer 选项,添加 Hot Module Replacement 插件.编辑后的文件如下:

```
// webpack.config.js

var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
        new webpack.HotModuleReplacementPlugin() //热加载插件
    ]
}

```

安装 react-transform-hmr 插件

```
npm install --save-dev babel-plugin-react-transform react-transform-hmr
```

编辑在 webpack-demo 文件夹下的 .babelrc 文件,编辑后的文件如下:

```
// .babelrc

{
  "presets": ["react", "es2015"],
  "env": {
    "development": {
    "plugins": [["react-transform", {
       "transforms": [{
         "transform": "react-transform-hmr",
         "imports": ["react"],
         "locals": ["module"]
       }]
     }]]
    }
  }
}
```

编辑 webpack-demo 文件夹下的 package.json 文件 scripts 选项,添加 --hot 选项开启代码热替换.

```
// package.json

{
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "scripts": {
        "start": "webpack",
        "dev": "webpack-dev-server --devtool eval --progress --content-base build --hot"
    },
    "author": "",
    "license": "ISC"
}
```


在终端中执行 npm run dev 命令,输出信息如下图,一样可以启动自动热加载.

![终端输出信息](http://upload-images.jianshu.io/upload_images/6171922-7a8e1567300d8728.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在浏览器中打开 http://localhost:9000/ 就可以看到像之前一样的问候语页面.

![结果](http://upload-images.jianshu.io/upload_images/6171922-2d811815751bbd08.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

现在当你使用 React 时，就可以热加载模块了.按 ***Ctrl + C*** 即可退出自动热加载.

## 产品阶段的构建

我们已经使用 Webpack 构建了一个完整的开发环境.但是在产品阶段,可能还需要对打包的文件进行额外的处理，比如说优化、压缩、缓存以及分离 CSS 和 JS.

对于复杂的项目来说，需要复杂的配置，这时候分解配置文件为多个小的文件可以使得事情井井有条，以 webpack-demo 项目来说，我们在 webpack-demo 文件夹下创建一个名为 webpack.production.config.js 的文件，在里面加上基本的配置代码,如下:

```
// webpack.production.config.js

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
```

编辑 webpack-demo 文件夹下的 package.json 文件 scripts 选项,添加 build 选项,编辑后的文件如下:

```
// package.json

{
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "scripts": {
        "start": "webpack",
        "dev": "webpack-dev-server --devtool eval --progress --content-base build --hot",
        "build": "webpack --config ./webpack.production.config.js --progress"
    },
    "author": "",
    "license": "ISC"
}
```
在终端中执行 npm run build 命令,输出信息如下图:

![输出信息](http://upload-images.jianshu.io/upload_images/6171922-fe65bc077baed8a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

说明分解配置文件为多个小的文件成功了.

### 优化插件

Webpack 提供了一些在发布阶段非常有用的优化插件，它们大多来自于 Webpack 社区，可以通过 npm 安装，通过以下插件可以完成产品发布阶段所需的功能.

- OccurrenceOrderPlugin: 为组件分配 ID，通过这个插件 Webpack 可以分析和优先考虑使用最多的模块，并为它们分配最小的 ID.
- UglifyJsPlugin：压缩JS代码.
- ExtractTextPlugin：分离 CSS 和 JS 文件.

我们来看看如何使用它们，OccurrenceOrderPlugin 和 UglifyJS plugins 都是内置插件，我们只需要安装 ExtractTextPlugin 插件.

安装 ExtractTextPlugin 插件

```
npm install --save-dev extract-text-webpack-plugin
```

编辑 webpack.config.js 文件配置 Plugins 选项,添加这三个插件,因为要分离 css 所以还要配置 module 下的 loaders 选项.编辑后的文件如下:

```
// webpack.config.js

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
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader?modules!postcss-loader"
            })
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

```

在终端中执行 npm start 命令,输出信息如下图:

![输出信息](http://upload-images.jianshu.io/upload_images/6171922-326d7fd84ad7da26.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

此时项目结构已经发生改变,build 文件夹下多出了抽离出来的 style.css 文件还有对应的 style.css.map 文件,项目结构如下图所示:

![项目结构](http://upload-images.jianshu.io/upload_images/6171922-370c6b7e1db15ae4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如果你打开 build 文件夹下的 bundle.js 文件,就可以看到 bundle.js 文件内容已经被压缩处理了.

说明这三个插件已经配置成功了.

### 缓存

为了加快加载速度,合理的利用缓存是必不可少的.使用缓存的最好方法是
保证文件名和文件内容是匹配的.内容改变，名称也相应改变.

Webpack 可以把一个哈希值添加到打包文件的文件名中,添加特殊的字符串混合体
([name], [id] and [hash])到输出文件名前,便于修改 BUG 以后,对应更新用户本地的缓存文件.

编辑 webpack.config.js 文件修改 output / plugins 选项.编辑后的文件如下:

```
// webpack.config.js

var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: "source-map", //配置生成 Source Maps 的选项
    entry: __dirname + "/app/main.js", //入口文件路径
    output: {
        path: __dirname + "/build/", //存放打包后文件的地方路径
        filename: "[name]-[hash].js" //打包后的文件名
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
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader?modules!postcss-loader"
            })
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
        new ExtractTextPlugin("[name]-[hash].css")
    ]
}

```

在终端中执行 npm start 命令,输出信息如下图:

![输出信息](http://upload-images.jianshu.io/upload_images/6171922-e96b9d60830f3d62.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

此时项目 build 文件夹下的 main.css 和 main.js 文件都对应的加上了哈希值.项目结构如下图所示:

![项目结构](http://upload-images.jianshu.io/upload_images/6171922-e3116877ff56b3ef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如果你打开 build 文件夹下的 index.html 文件,就可以看到引用的 css、js 文件名也对应发生了改变,这样修改 BUG 以后,也能对应更新用户本地的缓存文件.

## 进阶,永不止步

其实到这里我的这篇 Webpack 2.x 的入门实战已经完结了!但这也只是个入门而已!在实际项目中运用还是不够的,还有很多细节我并没深入讲,
所以大家还想进阶的话建议好好去看看 [**webpack-china**](https://doc.webpack-china.org/) 的文档.

另外实战项目 [**webpack-demo 的源码**](https://github.com/longhuicode/webpack-demo),我已经放到 Github 上去了,欢迎大家提意见.

还有一点我觉得很重要,要学会看控制台输出信息,能够看控制台输出信息解决的问题,就不要上 Google 搜了!

## 鸣谢

这篇 Webpack 2.x 的入门实战是基于 [**zhangwang**](http://www.jianshu.com/u/7091a52ac9e5) 
的 [**<<入门Webpack，看这篇就够了>>**](http://www.jianshu.com/p/42e11515c10f) 写出来的,是我学习 Webpack 的实战记录.
特别感谢 [**zhangwang**](http://www.jianshu.com/u/7091a52ac9e5) 付出,如果你觉得这篇文章对你有帮助,
请转到 [**zhangwang**](http://www.jianshu.com/u/7091a52ac9e5) 为他点个赞.