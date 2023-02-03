import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const {isDev} = options;

  const styleLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resPath: string) => resPath.includes('.module.'),
              localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]"
            }
          },
        },
        "sass-loader",
      ],
    }

  const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    };

  return [
    typescriptLoader,
    styleLoader,
  ]
}
