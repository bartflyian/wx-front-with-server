module.exports = { 
    // 选项...
    publicPath:"./",
    outputDir:"dist",
    assetsDir:"assets",
    indexPath:"index.html",
    filenameHashing:true,
    pages:undefined,
    lintOnSave:false,
    runtimeCompiler:false,
    transpileDependencies:[],
    productionSourceMap:false,
    crossorigin:undefined,
    integrity:false,
    devServer: {
      port: 8080, // 端口号
      host: '0.0.0.0',
      https: false, // https:{type:Boolean}
      open: true, //配置自动启动浏览器 
      proxy: {
        "/api": {
          target: "http://127.0.0.1:3000/",
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api':''
          }
        },
        // "/foo": {
        //   target: "<other_url>"
        // }
      } // 配置多个代理
    },
    css: { // 配置css模块
    	loaderOptions: { // 向预处理器 Loader 传递配置选项
        	less: { // 配置less（其他样式解析用法一致）
            		javascriptEnabled: true // 设置为true
        	}
    	}
    },
    configureWebpack: {
      devtool: 'source-map'
    }
  };