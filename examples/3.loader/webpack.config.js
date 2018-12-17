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
