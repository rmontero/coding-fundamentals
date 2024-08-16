const path = require('path');

module.exports = {
    entry: './src/block.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'block.js',
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
};
