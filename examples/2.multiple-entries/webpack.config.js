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
