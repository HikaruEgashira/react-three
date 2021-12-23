// import * as path from 'node:path'
import type { Configuration } from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import WebpackBar from 'webpackbar'

export default (_: Record<string, string>, argv: Record<string, string>) => {
  const isDev = argv.mode === 'development'

  const baseConfig: Configuration = {
    entry: './src/main.tsx',
    output: {
      filename: '[name].[contenthash:8].js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'swc-loader',
          options: {
            minify: true,
            jsc: {
              minify: {
                compress: true,
                mangle: true,
              },
              parser: {
                syntax: 'typescript',
                tsx: true,
                dynamicImport: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                  refresh: isDev,
                },
              },
              target: 'es2019',
              loose: true,
            },
          },
        },
        {
          test: /\.scss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: '🌱PARK',
      }),
      new WebpackBar(),
    ],
    resolve: {
      extensions: ['.js', '.tsx', '.ts'],
    },
    cache: {
      type: 'filesystem',
    },
    devServer: {
      hot: true,
    },
    devtool: isDev && 'eval-cheap-module-source-map',
    stats: 'minimal',
    ignoreWarnings: [/limit/i],
  }

  if (isDev) {
    return merge(baseConfig, {
      plugins: [new ReactRefreshWebpackPlugin()],
    })
  }

  return baseConfig
}
