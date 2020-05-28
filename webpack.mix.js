const mix = require('laravel-mix');

mix.disableNotifications();

mix.js('resources/js/site.js', 'public/js')
    .postCss('resources/css/site.css', 'public/css', [
        require('tailwindcss'),
        require('postcss-nesting'),
    ])
    .version();

if (mix.inProduction()) {
    mix.sourceMaps();
}

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//     .postCss('resources/css/cp.css', 'public/vendor/app/css', [
//         require('tailwindcss'),
//     ])
//     .version()
