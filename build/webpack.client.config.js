/*
 * @Author: Michael 
 * @Date: 2018-05-11 15:07:20 
 * @Last Modified by: Michael
 * @Last Modified time: 2018-06-12 15:34:38
 */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const glob = require('glob')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const port = process.env.PORT || 8089

const config = merge(base, {
  entry: {
    app: './src/client-entry.js'
  },
  resolve: {
    alias: {
      'create-api': './create-api-client.js'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"',
      'process.env.DEBUG_API': '"true"'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return (
          /node_modules/.test(module.context) && !/\.css$/.test(module.request)
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new HTMLPlugin({
      template: 'src/index.template.html'
    }),
    // 这是将服务器的整个输出
    // 构建为单个 JSON 文件的插件。
    // 默认文件名为 `vue-ssr-server-bundle.json`
    new VueSSRClientPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:' + port }),
  ]
})
module.exports = config