const path = require("path");
const Dotenv = require("dotenv-webpack");
const DotenvPlugin = require('webpack-dotenv-plugin');
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: "production",
    entry: "./src/server.ts",
    output: {
        filename: "build.js",
        path: path.resolve(__dirname, "dist"),
    },
    target: "node",
    plugins: [
        new Dotenv(),
    ],
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".json"],
    },
};