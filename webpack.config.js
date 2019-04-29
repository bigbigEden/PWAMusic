const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  entry: {
    app:'./src/index.js',
  },
  output: {
    filename: 'static/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve:{
    alias:{
      '@': resolve('src'),
    }
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase: './dist',
    proxy:{
        '/api': {       //印射为/api
            target: 'http://localhost:3000',  // 接口域名
            secure: false,  // 如果是https接口，需要配置这个参数
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/api': '/'   //需要rewrite的,
            }              
        }
    },
    hot:true
  },
  module:{
  	rules:[
      {
        test:/(\.jsx|\.js)$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query: {
          presets: ['env','react'],  
        }
      },
      {
        test: /\.less$/,
         use:[
         MiniCssExtractPlugin.loader,
         'css-loader',
         'less-loader'
        ],
        exclude:/node_modules/,
      },
      {
        test:  /\.css$/,
         use:[
         MiniCssExtractPlugin.loader,
         'css-loader',
        ],
        exclude:/node_modules/,
      },
      {
       test: /\.(png|svg|jpg|webp|gif)$/,
       use: [
         'file-loader'
       ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use:[
          'file-loader'
        ]
      } 
    ],
  },
  plugins:[
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:7].css'
    })
  ]
};