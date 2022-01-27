module.exports = {
    publicPath: '/JustCleaning/',
    pwa: {
        name: 'Just Cleaning',
        iconPaths: {
            favicon32: 'img/icons/favicon32x32.png',
            favicon16: 'img/icons/favicon16x16.png',
            appleTouchIcon: 'img/icons/favicon152x152.png',
            maskIcon: 'img/icons/monochrome.svg',
            msTileImage: 'img/icons/favicon144x144.png',



        },
        name: 'Just Cleaning',
        themeColor: '#0096AF',
        msTileColor: '#ffffff',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black-translucent',
        manifestOptions: {
            background_color: '#42B883',
            name: this.name,
            short_name: this.name,
            start_url: this.publicPath,
            display: 'fullscreen',
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
