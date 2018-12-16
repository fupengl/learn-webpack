var path = require("path");

module.exports = {
  // mode: "development" || "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  }
};
