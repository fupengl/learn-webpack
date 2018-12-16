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
var path = require("path");

module.exports = {
  // mode: "development" || "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  }
};
```

# Info

## Development mode

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 4.27.1
    Asset     Size  Chunks             Chunk Names
bundle.js  4.1 KiB       0  [emitted]  main
Entrypoint main = bundle.js
chunk    {0} bundle.js (main) 201 bytes [entry] [rendered]
    > ./src/index.js main
 [0] ./src/index.js 167 bytes {0} [built]
     single entry ./src/index.js  main
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
    > ./src/index.js main
 [0] ./src/index.js 167 bytes {0} [built]
     single entry ./src/index.js  main
 [1] ./src/greeting.js 34 bytes {0} [built]
     cjs require ./greeting [0] ./src/index.js 1:17-38
```
