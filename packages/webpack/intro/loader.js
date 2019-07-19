// loader

// example 
// install related loader
npm install --save-dev css-loader
npm install --save-dev ts-loader

module.exports = {
    module: {
        rules: [
            {test: /\.css$/, use: 'css-loader'},
            {test: /\.ts$/, use: 'ts-loader'}
        ]    
    }    
};


// use loader

// config
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                {loader: 'style-loader'},
                {
                    loader: 'css-loader',
                    option: {
                        modules: true    
                    }
                }
            ]
        }
    ]    
}

// lineLink
import Style form 'style-loader!css-loader?modules!./styles.css';

// cli
// webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader';



