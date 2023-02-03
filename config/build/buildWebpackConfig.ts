import {BuildOptions} from "./types/config";
import {Configuration} from "webpack";
import {buildResolvers} from "./buildResolvers";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const {mode, paths, isDev} = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    resolve: buildResolvers(),
    module: {
      rules: buildLoaders(options)
    },
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: buildDevServer(options),
  }
}
