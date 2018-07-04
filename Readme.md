##  对node 和 webpack 版本要求较高，低版本可能在执行命令时报错。注意升级webpack版本
### 在Mac和 window 两种类型的电脑上在执行本地服务 npm run server 命令时可能会出现问题。window电脑在package.json 中的 server 命令后 删除 NODE_ENV=production &&

> npm install

编译
> npm start

本地服务

> npm run server

打包

> npm run build


####  1.npm init 生成package.json
(会有让你输入名称版本，各种信息，如果不想写直接回车就行)

### 2.安装webpack
全局安装
`npm install webpack -g`

局部安装
`npm install --save-dev webpack`

我所用到的
`cnpm install webpack -g`

报错
One CLI for webpack must be installed. These are recommended choices, delivered as separate packages:
 - webpack-cli (https://github.com/webpack/webpack-cli)
   The original webpack full-featured CLI.
 - webpack-command (https://github.com/webpack-contrib/webpack-command)
   A lightweight, opinionated webpack CLI.
We will use "npm" to install the CLI via "npm install -D".
Which one do you like to install (webpack-cli/webpack-command):
选择方式
`webpack-cli`

需要升级webpack-cli 

`sudo cnpm install webpack-cli -g`  

webpack -v 查看安装版本

#### 支持
* react 
* less less-loadder
* es6
* postcss-loader  autoprefixer(自动补全CSS前缀)
* style-loader
* css-loader
