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
