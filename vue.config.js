const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/Taiwan-Travel/dist',

  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/root.scss";'
      }
    }
  }
})

module.exports = {
  pages: {
    index: {
      entry: './src/main.js',
      template: './public/index.html',
      filename: './index.html',
      title: 'TRAVEL 台灣觀光指南',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    search: {
      entry: './src/main_search.js',
      template: './public/index.html',
      filename: './index.html',
      title: 'TRAVEL 台灣觀光指南',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    info: {
      entry: './src/main_info.js',
      template: './public/index.html',
      filename: './index.html',
      title: 'TRAVEL 台灣觀光指南',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/root.scss";'
      }
    }
  },

  publicPath: '/Taiwan-Travel/dist'
}
