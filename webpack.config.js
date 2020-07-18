const path = require("path");

const ClearWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{ test: /\.css$/, use: ["file-loader"] }],
    plugins: [new ClearWebpackPlugin()],
  },
};
