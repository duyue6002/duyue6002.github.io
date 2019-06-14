const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /.js$/,
        use: "babel-loader"
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240
            }
          }
        ]
      },
      {
        test: /.(otf|woff|woff2|eot|ttf)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./dist",
    hot: true
  }
};
