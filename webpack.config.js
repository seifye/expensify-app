// listing directories on the server (yarn run live-server)

// This is a nodeJS script for webpack configuration
// Entry => Output

// A loader lets you customize the behavior of web pack when it loads a given file. 
// We can set a loader rule to convert as example (JSX and ES6 to ES5) and (SCSS to CSS) 

/* We can specify (the type of source map we want to use. some are better suited for development
and some other are suited for produvtion) in the devtool section. Source maps are used to let the
Chrome browser figure out where the original line was and navigate you to that instead of the bundle.js
file. Using source maps makes the debugging much much faster. */

/* The web pack dev server is a replacement for live-server. It is not generating the bundle file.
it's not actually writing the physical file (that exists in the public folder) which can slow things
down. It is just serving it up from memory which keeps our development server super snappy and fast. */

const path = require('path')

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            use: ['style-loader', 'css-loader', 'sass-loader'],
            test: /\.s?css$/ 
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public'),
        // This lets the routing happens in the client side instead of the server side
        historyApiFallback: true,
        disableHostCheck: true
    }
}
