# index.js

``` javascript
module.exports = function() {
  console.log("This is the index page");
};
```

# webpack.config.js

``` javascript
var path = require("path");

module.exports = {
  // mode: "development" || "production",
  context: path.join(__dirname, "src"),
  entry: {
    index: "./index",
    user: ["./user", "./account"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  }
};
```

# Info

## Unoptimized

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 4.27.1
   Asset      Size  Chunks             Chunk Names
index.js  3.75 KiB       0  [emitted]  index
 user.js  4.29 KiB       1  [emitted]  user
Entrypoint index = index.js
Entrypoint user = user.js
chunk    {0} index.js (index) 74 bytes [entry] [rendered]
    > ./index index
 [0] ./index.js 74 bytes {0} [built]
     single entry ./index  index
chunk    {1} user.js (user) 189 bytes [entry] [rendered]
    > user
 [1] multi ./user ./account 40 bytes {1} [built]
     multi entry 
 [2] ./user.js 73 bytes {1} [built]
     single entry ./user [1] multi ./user ./account user[0]
 [3] ./account.js 76 bytes {1} [built]
     single entry ./account [1] multi ./user ./account user[1]
```

## Production mode

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 4.27.1
   Asset       Size  Chunks             Chunk Names
index.js  994 bytes       0  [emitted]  index
 user.js   1.08 KiB       1  [emitted]  user
Entrypoint index = index.js
Entrypoint user = user.js
chunk    {0} index.js (index) 74 bytes [entry] [rendered]
    > ./index index
 [0] ./index.js 74 bytes {0} [built]
     single entry ./index  index
chunk    {1} user.js (user) 189 bytes [entry] [rendered]
    > user
 [1] multi ./user ./account 40 bytes {1} [built]
     multi entry 
 [2] ./user.js 73 bytes {1} [built]
     single entry ./user [1] multi ./user ./account user[0]
 [3] ./account.js 76 bytes {1} [built]
     single entry ./account [1] multi ./user ./account user[1]
```
