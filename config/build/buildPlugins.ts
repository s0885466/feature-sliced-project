import HtmlWebpackPlugin from "html-webpack-plugin";
import {WebpackPluginInstance, ProgressPlugin} from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({paths, isDev}: BuildOptions): WebpackPluginInstance[] => {
  return [
    new MiniCssExtractPlugin({
      filename: isDev ? "css/[name].css" : "css/[name].[contenthash].css",
      chunkFilename: isDev ? "css/[id].css" : "css/[id].[contenthash].css",
    }),
    new HtmlWebpackPlugin({template: paths.html}),
    new ProgressPlugin()
  ]
}
