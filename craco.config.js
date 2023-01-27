module.exports = {
    style: {
        sass: {
            loaderOptions: {
                additionalData: ` @import "src/styles/global.scss";`,
            },
        },
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: "Application name",
    //         template: './src/index.html'
    //     })
    // ],
};