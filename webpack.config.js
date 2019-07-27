let cssPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: {
        './ui-libs':'./src/ui-libs.js',
        './master/master': './src/master/master.js',

        './index/index': './src/index/index.js',
    },
    module:{
        rules: [

            {
                test: /\.ts/,
                loader: 'ts-loader'
            },

            {
                test: /\.scss/,
                use: [
                    cssPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url(url, resourcePath) {

                                //Для font-awesome.css разрешаем все url'ы
                                if (resourcePath.match(/font-awesome.scss$/)) {
                                    return true;
                                }
                                //А в остальных случаях запрещаем url только для изображений
                                else if (url.match(/\.(png|jp(e)g|svg|gif)($|\?.*)/)) {
                                    return false;
                                } else {
                                    return false;
                                }
                            }
                        }
                    },
                    'sass-loader'
                ],
            },


            //Конфигурация для font-awesome
            {
                test: /fontawesome-webfont\.(woff(2)?|eot|ttf|svg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './assets/fonts/',
                            publicPath: './assets/fonts/',
                        }
                    }
                ]
            },

        ]
    },
    plugins: [
        new cssPlugin()
    ]
}
