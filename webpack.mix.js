let mix = require('laravel-mix');

mix.options({
    processCssUrls: true,
    uglify: {
        sourceMap: false,
        uglifyOptions: {
            compress: true
        }
    },
    clearConsole: false,
    imgLoaderOptions: {
        enabled: true
    },
    fileLoaderDirs: {
        images: 'images',
        fonts: 'fonts'
    },
    resourceRoot: ''
});

mix.setPublicPath('compiled');

mix.js('./src/js/main.js', 'main.js');

mix.sass('./src/sass/main.scss', 'main.css');