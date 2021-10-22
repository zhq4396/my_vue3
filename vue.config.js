module.exports = {
    //  基本路径
    publicPath: "./",
    //  构建时的输出目录
    outputDir: "vue3",
    //  放置静态资源的目录
    assetsDir: "static",
    //  html 的输出路径
    indexPath: "index.html",
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5 //按照屏幕宽度375px去书写页面(它可以适配vant,mintui的样式)
                    })
                ]
            }
        }
    },
    // devServer: {
    //     host: 'localhost',
    //     port: 3000,
    //     https: false,
    //     hotOnly: false,
    //     proxy: {
    //         '/api': {
    //             target: "https://api.xwhx.top/",
    //             changeOrigin: true,
    //             secure: false,
    //             pathRewrite: {
    //                 "^/api": ""
    //             }
    //         },
    //     }

    // }
}