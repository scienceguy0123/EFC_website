module.exports = {
    entry: {
        index: './src/index.js'

    },
    output: {
        
        path: __dirname + '/dist',
        filename: "[name].bundle.js"
        
    },
       
    module:{

        rules: [
        {
            test: /\.scss$/,
            use:["style-loader", "css-loader", "sass-loader"]
        },

        {
            test:/\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader'
            }
        }
        ]
    },

    devtool:"source-map"
}