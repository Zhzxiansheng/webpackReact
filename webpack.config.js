const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: __dirname+ "/app/main.js", // 入口文件
    output: { // 输出目录
        path:__dirname + "/public", //打包后的文件存放的地方
        filename:"bundle.js" //打包后输出的文件名，index.html 引入的就是这个
    },
    devServer:{
        contentBase: "./public", //本地服务器加载的页面所载的目录
        historyApiFallback: true, //不跳转
        inline: true, // 实时刷新
        hot: true
    },
    module:{
        rules: [
            {
                // 处理js 的
                test: /(\.jsx|\.js)$/,
                use: {
                    loader : "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                // exclude: /node_modules/,
                // query: {
                //     presets: ['es2015']
                // }
            },
            {
                // 处理CSS的
                test: /\.css$/,
                use:[
                    {
                        loader: "style-loader"
                    },{
                        loader:"css-loader",
                        options: {
                            modules : true, //指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' //指定css的类名格式
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]

            }
           
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new webpack.HotModuleReplacementPlugin()//热加载插;
    ],
}


// * "__dirname" 是node.js中的一个全局变量，它指向当前执行脚本所在的目录
// 现在去package.json 配置打包执行命令

// * 创建本地服务器
// now 使用 webpack构建本地服务器  webpack-dev-server  `npm install --save-dev webpack-dev-server`
// 在config文件中加 devServer 代码；在package.json文件中script 加入启动命令  npm run server


// * Bable 最常用： 1.解析ES6 的 `babel-env-preset` 2. 解析JSX的 `babel-preset-react`

// 一次性安装多个依赖包中间用空格隔开

// npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
// 这是配置module 规则 rules 
//npm install babel-preset-es2015 
/* 
    {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
        presets: ['es2015']
    }
}
*/


// 这个项目支持react .jsx文件了 想用react 必须安装 React 和 React-DOM 
// npm install --save react react-dom


 // * CSS 
 // css-loader style-loader 
 /*
    css-loader 作用： 让你能够使用 类似 @import 和 url(...)的方法实现require()的功能
    style-loader 作用： 将所有的计算后的样式假如页面中 
    二者组合到一起使你能够把样式表嵌入webpack打包后的js文件中
    安装
    npm install --save-dev style-loader css-loader
 */

 // CSS 预处理 和 postcss 插件(自动补全前缀) postcss-loader autoprefixer
 /*
    npm install --save-dev postcss-loader autoprefixer
 */

 /*
    HtmlWebpackPlugin 插件

    npm install --save-dev html-webpack-plugin

    作用；1.可以移除index.html 也就是说移除文件夹 public ；在app目录下，创建一个index.tmpl.html文件模板；这个模板和现在的index.html 一样。
    我感觉这个功能没啥用
    2热更新， 但是我感觉原来就有，这个加上去以后并没有什么变化， 只是log 的信息比较多了
    
 */

 /*
 Babel有一个叫做react-transform-hrm的插件，可以在不对React模块进行额外的配置的前提下让HMR正常工作

 npm install --save-dev babel-plugin-react-transform react-transform-hmr

 然后配置.babelrc文件
 */