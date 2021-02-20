const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const prodConfig = require("./webpack.pro");
const devConfig = require("./webpack.dev");

const commonConfig = {
  entry: "./src/axios.js", // 打包入口文件
  output: {
    filename: "axios.js",
    path: path.resolve("dist"),
    library: "axios",
    globalObject: "this",
    libraryTarget: "umd",
    libraryExport: "default",
  },
  module: {
    rules: [
      // 配置 babel 的解析，同时在项目的跟目录下有.babelrc的babel配置文件
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 每次打包都先清理出口（dist）文件夹
  ],
};
module.exports = (env) => {
  // 根据执行命令判断开发环境or生产环境，启用不同的配置文件
  if (env && env.production) {
    return merge(commonConfig, prodConfig);
  } else {
    return merge(commonConfig, devConfig);
  }
};
