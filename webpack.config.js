var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + "/app",
    entry: ["./scripts/main",'./styles/main.scss'],
    output: {
        path: __dirname + "/dist/",
        filename: "[name].js",
        publicPath: '/dist/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ],
        rules: [
            /*
            your other rules for JavaScript transpiling go in here
            */
            { // regular css files
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1',
                }),
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: 'styles/[name].bundle.css',
            allChunks: true,
        }),
    ],
}