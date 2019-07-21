let cssPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: {
        './vendors':'./src/vendors.js',
        './master/master': './src/master/master.js',

        './index/index': './src/index/index.js',
    },
    module:{
        rules: [
            {
                test: /\.scss/,
                use: [
                    cssPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    'sass-loader'
                ],
            }
        ]
    },
    plugins: [
        new cssPlugin()
    ]
}
