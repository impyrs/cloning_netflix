const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MODE = process.env.npm_lifecycle_event;
const PATH = {
    app: path.join(__dirname, "../src/index.js"),
    output: path.join(__dirname, "../dist"),
    template: path.join(__dirname, "../src/index.html")
};




// webpack은 exports object가 필요하다. 반드시
const commonConfig = {
    entry: ["babel-polyfill", PATH.app],
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /(node_modules)/,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                },
                {
                    loader: 'img-loader'
                }]
            },
        ]
    },
    output: {
        path: PATH.output,
        filename: "bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: PATH.template,
            filename: "index.html"
        })
    ]
}

if(MODE == "build"){
    module.exports = merge(commonConfig, prodConfig);
}
else if(MODE == "start"){
    module.exports = merge(commonConfig, devConfig);
}