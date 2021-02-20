const HTMlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new HTMlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
