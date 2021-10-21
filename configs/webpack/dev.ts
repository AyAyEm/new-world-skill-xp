import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { mergeWithRules } from 'webpack-merge';

import commonConfig from './common';

process.env.NODE_ENV = 'development';
export const devConfig = mergeWithRules({
  module: {
    rules: {
      test: 'match',
      use: {
        loader: 'match',
        options: 'replace',
      },
    },
  },
})(commonConfig, {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './index.tsx',
  ],
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [require.resolve('react-refresh/babel')],
          },
        }],
      },
    ],
  },
  devServer: {
    hot: true,
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
    open: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [new ReactRefreshWebpackPlugin()],
});
export default devConfig;
