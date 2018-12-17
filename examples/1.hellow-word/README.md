# index.js

``` javascript
const greeting = require("./greeting");

const element = window.document.createElement("h3");
element.innerHTML = greeting;
window.document.body.appendChild(element);
```

# greeting.js
``` javascript
module.exports = "Hello, World!";
```

# webpack.config.js

``` javascript
module.exports = {
  // mode: "development" || "production",
  entry: "./src",
  output: {
    filename: "bundle.js"
  }
};
```

[`entry`](https://webpack.js.org/configuration/entry-context/#entry) 它设置应用程序的入口点。用于指示webpack在哪里是您的应用程序以及需要解决哪些模块的起始文件。Webpack在指定的路径中查找。默认情况下，如果您未指定文件扩展名，Webpack将采用文件扩展名.js（JavaScript）。Webpack默认加载JavaScript。

[`output`](https://webpack.js.org/configuration/output/#output-filename) 用于设置捆绑包的文件名。filename是唯一必需的设置。

# Info

## Unoptimized

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 4.27.1
    Asset     Size  Chunks             Chunk Names
bundle.js  4.1 KiB       0  [emitted]  main
Entrypoint main = bundle.js
chunk    {0} bundle.js (main) 201 bytes [entry] [rendered]
    > ./src main
 [0] ./src/index.js 167 bytes {0} [built]
     single entry ./src  main
 [1] ./src/greeting.js 34 bytes {0} [built]
     cjs require ./greeting [0] ./src/index.js 1:17-38
```

## Production mode

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 4.27.1
    Asset      Size  Chunks             Chunk Names
bundle.js  1.05 KiB       0  [emitted]  main
Entrypoint main = bundle.js
chunk    {0} bundle.js (main) 201 bytes [entry] [rendered]
    > ./src main
 [0] ./src/index.js 167 bytes {0} [built]
     single entry ./src  main
 [1] ./src/greeting.js 34 bytes {0} [built]
     cjs require ./greeting [0] ./src/index.js 1:17-38
```
