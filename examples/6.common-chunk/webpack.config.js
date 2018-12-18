module.exports = {
  // mode: "development" || "production",
  context: __dirname + "/src",
  entry: {
    pageA: "./pageA",
    pageB: "./pageB",
    pageC: "./pageC"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0 // This is example is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  output: {
    filename: "[name].js"
  }
};
