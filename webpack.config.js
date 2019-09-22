const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.jsx',
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      { test: /\.png$/, use: ['url-loader?mimetype=image/png'] },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: false,
              removeAttributeQuotes: false,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/html/index.html',
      filename: 'index.html',
    }),
  ],
};
