const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    module: {
        rules: [ // Development 환경에서는 CSS가 모든 것의 위에 온다. 그래서 index.js에서 import css 하는 것 같다.
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                    
                ]
            }
        ]
    },
    devServer : {
        contentBase: path.join(__dirname, "../src"),
        publicPath : "/",
        progress: true,
        port: 8080,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // 변경된 것만 다시 Load한다.
    ]
}