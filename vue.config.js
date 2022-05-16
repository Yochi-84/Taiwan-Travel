const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  pages: {
    // router 的名字
    index: {
      // page 的入口
      entry: './src/main.js',
      // 模板来源
      template: './public/index.html',
      // 在 dist/index.html 的输出
      filename: './index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'TRAVEL 台灣觀光指南',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
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
  }
}
