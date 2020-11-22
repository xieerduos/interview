const productionGzipExtensions = /\.(js|css|html|svg)$/i;
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const path = require('path');

console.log('process.env.ENV:', process.env.ENV);
module.exports = {
    publicPath: './', // 跟域上下文目录
    outputDir: process.env.ENV === 'qa' ? 'qa' : 'rd', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录（js, css, img, fonts）
    lintOnSave: true, // 是否开启eslint保存检测，有效值 true | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译
    transpileDependencies: [], // 默认babel-loader忽略node_modules, 这里可增加例外的包依赖包名
    productionSourceMap: false,
    configureWebpack: config => {
        // https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
        if (process.env.NODE_ENV === 'production') {
            config.plugins = [
                ...config.plugins,
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: productionGzipExtensions,
                    threshold: 2048,
                    minRatio: 0.8
                })
            ];
        } else {
            // 为开发环境修改配置...
            config.devtool = 'cheap-module-eval-source-map';
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            // set第一个参数：设置的别名，第二个参数：设置的路径
            .set('@', path.join(__dirname, './src/index'));
    },
    parallel: require('os').cpus().length > 1
};
