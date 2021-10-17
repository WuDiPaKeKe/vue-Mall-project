const path = require("path")
function resolve(dir) {
    return path.join(__dirname,dir)
}



module.exports = {
    lintOnSave:false,
    devServer:{
        proxy: {
          '/9000': {
            target: 'http://localhost:9000',
            pathRewrite: { '^/9000': '' },
          }
        },
    },
    configureWebpack:{
        resolve:{
            alias:{
                "components":resolve("src/components"),
                 // 给项目各个组件配别名
                "pages":resolve("src/pages"),
                "router":resolve("src/router"),
                "routes":resolve("src/routes"),
                "store":resolve("src/store"),
                "api":resolve("src/api"),
                "mock":resolve("src/mock")
                
                
            }
        }
    }
}