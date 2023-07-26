const { VantResolver } = require("unplugin-vue-components/resolvers");
const ComponentsPlugin = require("unplugin-vue-components/webpack");
const path = require('path')
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
const {NODE_ENV, VUE_APP_BASE_USERHTTP, VUE_APP_CDN, VUE_APP_ENV,VUE_APP_BASE_APIHTTP} = process.env

const IS_PROD = NODE_ENV === 'production'
module.exports = {
    // 公共路径(必须有的)
  // publicPath: VUE_APP_CDN,
  // 输出文件目录
  outputDir: 'dist',
   //指定生成静态资源的存放路径
  assetsDir: 'assets',
  devServer: {
    host: 'localhost',
    // https: true, //是否https
    disableHostCheck: true,
    open: NODE_ENV === 'development',
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '/idaasweb': {
        target: VUE_APP_BASE_USERHTTP,
        changeOrigin: true, //是否跨域
      },
      '/api': {
        target: VUE_APP_BASE_APIHTTP,
        changeOrigin: true, //是否跨域
      
      },
    },
  },
    css: {
    extract: IS_PROD, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: !IS_PROD, // 开启 CSS source maps
    loaderOptions: {}, // css预设器配置项
  },
  configureWebpack:(config)=> {
    // 添加插件
      config.plugins.push(...[
        ComponentsPlugin({
        resolvers: [VantResolver()],
      })
      ])
      // 文件结尾后缀省略
    Object.assign(config.resolve, {
      alias: {
        '@': resolve( './src'),
      },
    })

  },
  // configureWebpack: {
      
  //     resolve: {  
  //     alias: {  
  //       '@': path.join(__dirname, 'src')  
  //     }  
  //   } ,
  // plugins: [
  //     ComponentsPlugin({
  //       resolvers: [VantResolver()],
  //     }),
  //   ],
  // },
};
