const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    https: true,
    historyApiFallback: true,
  },
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
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/html/index.html',
      filename: 'index.html',
    }),
    new HtmlWebPackPlugin({
      template: 'src/html/signin.html',
      filename: 'signin.html',
    }),
    new HtmlWebPackPlugin({
      template: 'src/html/buy.html',
      filename: 'buy.html',
    }),
    new HtmlWebPackPlugin({
      template: 'src/html/buy-confirm.html',
      filename: 'buy-confirm.html',
    }),
    new HtmlWebPackPlugin({
      template: 'src/html/buy-payment.html',
      filename: 'buy-payment.html',
    }),
    new HtmlWebPackPlugin({
      template: 'src/html/tickets.html',
      filename: 'tickets.html',
    }),
    new HtmlWebPackPlugin({
      template: 'src/html/tickets-detail.html',
      filename: 'tickets-detail.html',
    }),
    new HtmlWebPackPlugin({
      template: 'src/html/tickets-update.html',
      filename: 'tickets-update.html',
    }),
    new HtmlWebPackPlugin({
      template: 'src/html/profile.html',
      filename: 'profile.html',
    }),
  ],
};
