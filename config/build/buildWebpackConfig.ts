import {BuildOptions} from "./types/config";
import {Configuration} from "webpack";
import {buildResolvers} from "./buildResolvers";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const {mode, paths} = options;

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
      rules: buildLoaders()
    },
    plugins: buildPlugins(options)
  }
}
