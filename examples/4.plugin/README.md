# index.js

``` javascript
const greeting = require("./greeting");

const element = window.document.createElement("h3");
element.innerHTML = greeting;
window.document.body.appendChild(element);

console.log(process.env)
```

# greeting.js
``` javascript
module.exports = "Hello, World!";
```

# env
``` javascript
module.exports = {
  mode: "development"
};
```

# webpack.config.js

``` javascript
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  // mode: "development" || "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js"
  },
  plugins: [
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
 bundle.js   4.14 KiB       0  [emitted]  main
index.html  210 bytes          [emitted]  
Entrypoint main = bundle.js
chunk    {0} bundle.js (main) 227 bytes [entry] [rendered]
    > ./src/index.js main
 [0] ./src/index.js 193 bytes {0} [built]
     single entry ./src/index.js  main
 [1] ./src/greeting.js 34 bytes {0} [built]
     cjs require ./greeting [0] ./src/index.js 1:17-38
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    chunk    {0} index.html 529 KiB [entry] [rendered]
        > (webpack)/node_modules/html-webpack-plugin/lib/loader.js!(webpack)/node_modules/html-webpack-plugin/default_index.ejs 
     [2] (webpack)/buildin/global.js 472 bytes {0} [built]
         cjs require global [1] (webpack)/node_modules/lodash/lodash.js 1:0-41
     [3] (webpack)/buildin/module.js 497 bytes {0} [built]
         cjs require module [1] (webpack)/node_modules/lodash/lodash.js 1:0-41
         + 2 hidden modules
```

## Production mode

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 4.27.1
     Asset       Size  Chunks             Chunk Names
 bundle.js   1.09 KiB       0  [emitted]  main
index.html  210 bytes          [emitted]  
Entrypoint main = bundle.js
chunk    {0} bundle.js (main) 227 bytes [entry] [rendered]
    > ./src/index.js main
 [0] ./src/index.js 193 bytes {0} [built]
     single entry ./src/index.js  main
 [1] ./src/greeting.js 34 bytes {0} [built]
     cjs require ./greeting [0] ./src/index.js 1:17-38
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    chunk    {0} index.html 529 KiB [entry] [rendered]
        > (webpack)/node_modules/html-webpack-plugin/lib/loader.js!(webpack)/node_modules/html-webpack-plugin/default_index.ejs 
     [2] (webpack)/buildin/global.js 472 bytes {0} [built]
         cjs require global [1] (webpack)/node_modules/lodash/lodash.js 1:0-41
     [3] (webpack)/buildin/module.js 497 bytes {0} [built]
         cjs require module [1] (webpack)/node_modules/lodash/lodash.js 1:0-41
         + 2 hidden modules
```
