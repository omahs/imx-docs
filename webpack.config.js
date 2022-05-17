const webpack = require('webpack')
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      process: { env: {} },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'], // other stuff
    fallback: {
      stream: require.resolve('stream-browserify'),
      path: require.resolve('path-browserify'),
      url: require.resolve('url/'),
      buffer: require.resolve('buffer/'),
      querystring: require.resolve('querystring-es3'),
      process: require.resolve('process/browser'),
    },
  },
  alias: {
    process: 'process/browser',
  },
}
