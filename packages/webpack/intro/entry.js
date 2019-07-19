// single entry
// entry: string | Array <string>

webpack.config.js
const config = {
    entry: {
        main: './path/to/app/app.js'    
    }    
};

module.exports = config;


// obj language
// entry: {[entryChunkName: string]: string|Array<string>}

const config = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    }
};

