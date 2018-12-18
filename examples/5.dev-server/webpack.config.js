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
