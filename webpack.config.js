module.exports = {
    entry: {
        index: './src/index/index.js',
        portfolio:'./src/portfolio/portfolio.js'

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
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
        },
        ]
    },

    devtool:"source-map"
}