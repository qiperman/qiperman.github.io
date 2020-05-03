const merge = require("webpack-merge");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackInlineSVGPlugin({
      runPreEmit: true
    })
  ],
  module: {
    rules: [
      {
        test: /icons\/.*\.svg$/,
        use: [

          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              emitFile: false
            }
          }
        ]
      },
      {
        test: /\.s?css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
});
