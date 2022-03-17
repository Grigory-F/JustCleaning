module.exports = {
    publicPath: '/JustCleaning/',
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:3000',
                changeOrigin: true
            },
        },
    },
    pwa: {
        name: 'Just Cleaning',
        iconPaths: {
            favicon32: 'img/icons/favicon32x32.png',
            favicon16: 'img/icons/favicon16x16.png',
            appleTouchIcon: 'img/icons/favicon152x152.png',
            maskIcon: 'img/icons/monochrome.svg',
            msTileImage: 'img/icons/favicon144x144.png',
        },

        workboxPluginMode: 'GenerateSW',
        assetsVersion: "",


        name: 'Just Cleaning',
        themeColor: '#0096AF',
        msTileColor: '#ffffff',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black-translucent',
        manifestOptions: {
            background_color: '#42B883',
            name: 'Just Cleaning',
            short_name: 'Just Cleaning',
            start_url: "/",
            display: 'fullscreen',
            orientation: "any",
            theme_color: this.themeColor,
            icons: [
                { 'src': './img/icons/android-chrome-192x192.png', 'sizes': '192x192', 'type': 'image/png' },
                { 'src': './img/icons/android-chrome-512x512.png', 'sizes': '512x512', 'type': 'image/png' },
                { 'src': './img/icons/android-chrome-maskable-192x192.png', 'sizes': '192x192', 'type': 'image/png', 'purpose': 'maskable' },
                { 'src': './img/icons/android-chrome-maskable-512x512.png', 'sizes': '512x512', 'type': 'image/png', 'purpose': 'maskable' }
            ]
        },
    }
}
