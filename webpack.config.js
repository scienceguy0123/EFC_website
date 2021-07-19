module.exports = {
    entry: {
        index: './src/index/index.js',
        portfolio:'./src/portfolio/portfolio.js',
        activity:'./src/activity/activity.js',
        crew:'./src/crew/crew.js',
        contact:'./src/contact/contact.js'
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