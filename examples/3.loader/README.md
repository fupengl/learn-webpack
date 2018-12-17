# index.js

``` javascript
import './index.scss'

require('../../../assets/webpack.png')

export default class HelloWorld {
  constructor() {
  }

  test() {
    const element = window.document.createElement("h3");
    element.innerHTML = 'hello word';
    element.className = 'index'
    window.document.body.appendChild(element);
  }

  static say(){
    console.log('hello word\n')
  }
}

const helloWorld = new HelloWorld()

helloWorld.test();

HelloWorld.say();
```

# webpack.config.js

``` javascript
module.exports = {
  // mode: "development" || "production",
  context: __dirname + "/src",
  entry: ".",
  output: {
    filename: "[name].js"
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
  }
};
```

# Info

## Unoptimized

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 4.27.1
      Asset      Size  Chunks             Chunk Names
    main.js  23.3 KiB       0  [emitted]  main
webpack.png   145 KiB          [emitted]  
Entrypoint main = main.js
chunk    {0} main.js (main) 17.6 KiB [entry] [rendered]
    > . main
 [0] ./index.js 440 bytes {0} [built]
     [exports: default]
     single entry .  main
 [1] ./index.scss 1.22 KiB {0} [built]
     harmony side effect evaluation ./index.scss [0] ./index.js 1:0-22
 [2] (webpack)/node_modules/css-loader/dist/cjs.js!(webpack)/node_modules/sass-loader/lib/loader.js!./index.scss 403 bytes {0} [built]
     cjs require !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss [1] ./index.scss 2:14-132
 [6] (webpack)/assets/webpack.png 57 bytes {0} [built]
     cjs require ../../../assets/webpack.png [0] ./index.js 3:0-38
     + 3 hidden modules
```

## Production mode

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 4.27.1
      Asset      Size  Chunks             Chunk Names
    main.js  7.28 KiB       0  [emitted]  main
webpack.png   145 KiB          [emitted]  
Entrypoint main = main.js
chunk    {0} main.js (main) 17.6 KiB [entry] [rendered]
    > . main
 [0] ./index.js 440 bytes {0} [built]
     [exports: default]
     single entry .  main
 [1] ./index.scss 1.22 KiB {0} [built]
     [no exports used]
     harmony side effect evaluation ./index.scss [0] ./index.js 1:0-22
 [2] (webpack)/node_modules/css-loader/dist/cjs.js!(webpack)/node_modules/sass-loader/lib/loader.js!./index.scss 403 bytes {0} [built]
     cjs require !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss [1] ./index.scss 2:14-132
 [6] (webpack)/assets/webpack.png 57 bytes {0} [built]
     cjs require ../../../assets/webpack.png [0] ./index.js 3:0-38
     + 3 hidden modules
```
