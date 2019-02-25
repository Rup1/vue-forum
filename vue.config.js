module.exports = {
  chainWebpack: config => config.resolve.symlinks(false),
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          exclude: [
            /node_modules/
          ],
          use: {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        }
      ]
    }
  }
}

