const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './public/js/main.js',
    output: { path: __dirname + '/public/js/bundle', filename: 'bundle.js' },
    resolve: {
      root: __dirname,
        alias: {
          Main: 'public/components/Main.jsx',
          Nav: 'public/components/Nav.jsx',
          Weather: 'public/components/Weather.jsx',
          About: 'public/components/About.jsx',
          Examples: 'public/components/Examples.jsx'
        },
        extensions: ['' , '.js' , 'jsx']
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
