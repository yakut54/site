const { defineConfig } = require('@vue/cli-service')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const pageName = 'dist'

const outputDir = pageName
const publicPath = process.env.NODE_ENV === 'production'
  ? `/${pageName}`
  : '/'

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath,
  outputDir,
  configureWebpack: {
    
    plugins: [
      // new BundleAnalyzerPlugin({
      //   analyzerPort: 5001,
      //   openAnalyzer: false,
      // })
    ]
  },
  pages: {
    'index': {
      entry: './src/pages/Home/index.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'gifts': {
      entry: './src/pages/Gifts/index.js',
      template: 'public/index.html',
      title: 'Gifts',
      chunks: ['chunk-vendors', 'chunk-common', 'gifts']
    },
    'about': {
      entry: './src/pages/About/index.js',
      template: 'public/index.html',
      title: 'About',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    }
  }
})