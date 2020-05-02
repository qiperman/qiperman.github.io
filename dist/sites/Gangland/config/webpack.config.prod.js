const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),
    new HtmlWebpackInlineSVGPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(svg)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets",
            name: "[path][contenthash].[ext]",
            context: "src/assets",
            emitFile: true
          }
        }
      },
      {
        test: /\.s?css/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "group-css-media-queries-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  }
});
