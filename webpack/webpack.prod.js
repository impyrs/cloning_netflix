const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATH = {
    build: path.join(__dirname, "../dist")
}

module.exports = {
    mode: "production",
    module: {
        rules: [ // Development 환경에서는 CSS가 모든 것의 위에 온다. 그래서 index.js에서 import css 하는 것 같다.
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ // production 에서는 loader의 결과의 text를 extract 한다. developement에서는 loader를 이용한다.
                    fallback: "style-loader",
                    use: [
                        {   // style-loader 쓰지 않고, 아래에서 나온 결과를 extract를 한다. 뭔말인지 모르겠음..
                            loader: "css-loader",
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: "postcss-loader"
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(PATH.build,{
            root: process.cwd()
        }),
        new ExtractWebpackPlugin("styles.css")
    ]
}