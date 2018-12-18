# index.js

``` javascript
import './index.scss'

import { HelloWorld } from './greeting'

const helloWorld = new HelloWorld()

helloWorld.test();

HelloWorld.say();
```

# greeting.js
``` javascript
export class HelloWorld {
  constructor() {
  }

  test() {
    const element = window.document.createElement("h3");
    element.innerHTML = `hello word ${process.env.mode}`;
    element.className = 'index'
    window.document.body.appendChild(element);
  }

  static say(){
    console.log('hello word\n')
  }
}
```

# webpack.config.js

``` javascript
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development" || "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|gif|jpeg|jpg)\??.*$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: `[name].[ext]`
            }
          }
        ]
      }
    ]
  },
  devtool: "inline-source-map",
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: __dirname + "/dist", // static root array/string
    compress: true, // gz
    port: 9000,
    hot: true,
    inline: true,
    open: "Chrome",
    proxy: {
      // proxy
      "/api": "http://localhost:3000"
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(require("./config/test.env"))
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: "webpack index"
    })
  ]
};
```

[`entry`](https://webpack.js.org/configuration/entry-context/#entry) 它设置应用程序的入口点。用于指示webpack在哪里是您的应用程序以及需要解决哪些模块的起始文件。Webpack在指定的路径中查找。默认情况下，如果您未指定文件扩展名，Webpack将采用文件扩展名.js（JavaScript）。Webpack默认加载JavaScript。

[`output`](https://webpack.js.org/configuration/output/#output-filename) 用于设置捆绑包的文件名。filename是唯一必需的设置。

# Info

## Unoptimized

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 4.27.1
     Asset       Size  Chunks             Chunk Names
 bundle.js    124 KiB       0  [emitted]  main
index.html  210 bytes          [emitted]  
Entrypoint main = bundle.js
chunk    {0} bundle.js (main) 17.6 KiB [entry] [rendered]
    > ./src/index.js main
 [0] ./src/index.js 137 bytes {0} [built]
     [no exports]
     single entry ./src/index.js  main
 [1] ./src/index.scss 1.22 KiB {0} [built]
     harmony side effect evaluation ./index.scss [0] ./src/index.js 1:0-22
 [2] (webpack)/node_modules/css-loader/dist/cjs.js!(webpack)/node_modules/sass-loader/lib/loader.js!./src/index.scss 403 bytes {0} [built]
     cjs require !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss [1] ./src/index.scss 2:14-132
     module.hot.accept !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss [1] ./src/index.scss 21:1-42:3
     cjs require !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss [1] ./src/index.scss 22:19-137
 [6] ./src/greeting.js 313 bytes {0} [built]
     [exports: HelloWorld]
     harmony side effect evaluation ./greeting [0] ./src/index.js 2:0-40
     harmony import specifier ./greeting [0] ./src/index.js 3:23-33
     harmony import specifier ./greeting [0] ./src/index.js 5:0-10
     + 3 hidden modules
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    chunk    {0} index.html 529 KiB [entry] [rendered]
        > (webpack)/node_modules/html-webpack-plugin/lib/loader.js!(webpack)/node_modules/html-webpack-plugin/default_index.ejs 
     [2] (webpack)/buildin/global.js 475 bytes {0} [built]
         cjs require global [1] (webpack)/node_modules/lodash/lodash.js 1:0-41
     [3] (webpack)/buildin/module.js 546 bytes {0} [built]
         cjs require module [1] (webpack)/node_modules/lodash/lodash.js 1:0-41
         + 2 hidden modules
```

## Production mode

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 4.27.1
     Asset       Size  Chunks             Chunk Names
 bundle.js    102 KiB       0  [emitted]  main
index.html  210 bytes          [emitted]  
Entrypoint main = bundle.js
chunk    {0} bundle.js (main) 17.6 KiB [entry] [rendered]
    > ./src/index.js main
 [0] (webpack)/node_modules/css-loader/dist/cjs.js!(webpack)/node_modules/sass-loader/lib/loader.js!./src/index.scss 403 bytes {0} [built]
     cjs require !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss [1] ./src/index.scss 2:14-132
     module.hot.accept !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss [1] ./src/index.scss 21:1-42:3
     cjs require !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss [1] ./src/index.scss 22:19-137
 [1] ./src/index.scss 1.22 KiB {0} [built]
     [no exports used]
     harmony side effect evaluation ./index.scss [5] ./src/index.js + 1 modules 1:0-22
 [5] ./src/index.js + 1 modules 455 bytes {0} [built]
     [no exports]
     single entry ./src/index.js  main
     | ./src/index.js 137 bytes [built]
     |     [no exports]
     |     single entry ./src/index.js  main
     | ./src/greeting.js 313 bytes [built]
     |     [exports: HelloWorld]
     |     [all exports used]
     |     harmony side effect evaluation ./greeting  ./src/index.js 2:0-40
     |     harmony import specifier ./greeting  ./src/index.js 3:23-33
     |     harmony import specifier ./greeting  ./src/index.js 5:0-10
     + 3 hidden modules
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    chunk    {0} index.html 529 KiB [entry] [rendered]
        > (webpack)/node_modules/html-webpack-plugin/lib/loader.js!(webpack)/node_modules/html-webpack-plugin/default_index.ejs 
     [2] (webpack)/buildin/global.js 475 bytes {0} [built]
         cjs require global [1] (webpack)/node_modules/lodash/lodash.js 1:0-41
     [3] (webpack)/buildin/module.js 546 bytes {0} [built]
         cjs require module [1] (webpack)/node_modules/lodash/lodash.js 1:0-41
         + 2 hidden modules
```
