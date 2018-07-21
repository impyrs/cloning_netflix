const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
    entry: "./index.js",
    devServer : {
        contentBase: path.join(__dirname, "src"),
        publicPath : "/",
        progress: true,
        port: 8080
    },
    output : {
        path: path.join(__dirname, "out"),
        filename: "bundle.js"
    },

};