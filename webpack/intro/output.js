// output 
// filename  output file name
// path absolute path

// webpack.config.js
const config = {
    output: {
        filename: 'bundle.js',
        path: '/home/assets'
    }    
};

module.exports = config;


// many entry point
// substitutions be sure each file has only name

// webpack.config.js
const config = { 
    entry: {
        app: './app/app.js',
        vendors: '/home/vendors'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
};

// write to hard disk ./dist/app.js ./dist/vendors.js





