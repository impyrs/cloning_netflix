const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
    entry: "./index.js",
    module:{
        rules: [

        ]
    },
    output : {
        path: path.join(__dirname, "out"),
        filename: "potato.js"
    },
    plugins: [new UglifyJsPlugin()]

};