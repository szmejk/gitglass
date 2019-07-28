const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    
    output: {
        path:path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}