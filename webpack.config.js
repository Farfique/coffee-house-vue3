const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        //dependency: { not: ['url'] },
        type: 'asset/resource',
        // generator : {
        //   filename : 'assets/img/[name][ext][query]',
        // }
      },
      {
        test: /\.(?:svg)$/i,
        type: 'asset/resource',
        generator : {
          filename : 'src/assets/svg/[name][ext][query]',
        }
      },
      {
        test: /\.(?:mp3|wav|ogg|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
        assetModuleFilename: '[file]',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static : {
      directory: path.join(__dirname, 'dist'),
      watch: true,
    },
    compress: true,
    port: 9000,
  },
  target: ['web', 'es6'],
  plugins: [
    new MiniCssExtractPlugin({ filename: '[contenthash].css' }),
    //new MiniCssExtractPlugin({ filename: '[file].css' }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new HtmlWebpackPlugin({filename: 'menu.html', template: './src/templates/menu.html' }),
    new CopyWebpackPlugin({
        patterns: [
            {
            // context: path.resolve(__dirname, 'src'),
               context: path.resolve(__dirname),
                from: 'src/assets/**',
                to: path.resolve(__dirname, 'dist')        
            }
        ]}),
      new CleanWebpackPlugin(),
    ]
}