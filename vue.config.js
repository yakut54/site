const { defineConfig } = require('@vue/cli-service')
const pages = require('./config/pages')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const pageName = 'dist'

const outputDir = pageName
const publicPath = process.env.NODE_ENV === 'production'
  ? `/${pageName}`
  : '/'

module.exports = defineConfig({
  pages,
  outputDir,
  publicPath,
  productionSourceMap: false,
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin({
      //   analyzerPort: 5001,
      //   openAnalyzer: false,
      // })
    ]
  },
})

