module.exports = {

    mode: 'development',

    //入口

    entry: __dirname + '/src/index.ts',

    //出口

    output: {

        path: __dirname + '/dist',

        filename: 'bundle.js',

    },

    module: {

        rules: [

            {

                test: /\.tsx?$/,

                use: {

                    loader: 'ts-loader'

                }

            },

        ]

    },

    resolve: {
        extensions: [".ts", ".js", ".jsx"],
        // alias: {
        //     "@": __dirname + "/src",
        // },
    }
}