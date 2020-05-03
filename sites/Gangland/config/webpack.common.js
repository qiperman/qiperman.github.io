const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: ["@babel/polyfill", Path.resolve(__dirname, "../src/js/index.js")]
  },
  output: {
    path: Path.join(__dirname, "../build"),
    filename: "js/[name].[contenthash].js"
  },
  resolve: {
    alias: {
      "@": Path.resolve(__dirname, "../src"),
      root: Path.resolve(__dirname, "../public"),
      assets: Path.resolve(__dirname, "../src/assets")
    }
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, "../public"), to: "public" }
    ]),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, "../src/index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
          },
          {
            loader: "eslint-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*)?$/,
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
        test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets",
            name: "[path][contenthash].[ext]",
            context: "src/assets"
          }
        }
      }
    ]
  }
};
