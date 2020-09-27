const path = require('path')
module.exports = {
    entry: {
        context: path.join(__dirname, 'src'),
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js",
        publicPath: "/dist"
    },
    devServer: {
        overlay: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
}
