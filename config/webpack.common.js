const path = require("path");
const { EnvironmentPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
require("dotenv").config();

module.exports = {
  entry: {
    app: path.resolve("src", "index.tsx"),
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin()],
  },

  output: {
    path: path.resolve("build"),
    publicPath: "/",
    filename: "static/js/[name].[fullhash].js",
    chunkFilename: "static/js/bundle.[chunkhash].js",
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "static/img/[name].[hash:7].[ext]",
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.svg?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: ["file-loader"],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new EnvironmentPlugin(["NODE_ENV"]),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve("public", "index.html"), filename: "index.html" }),
    new CopyPlugin({
      patterns: [{ from: "public", to: "build" }],
    }),
  ],
};
