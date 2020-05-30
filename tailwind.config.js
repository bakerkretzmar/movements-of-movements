const defaults = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        content: [
            './resources/views/**/*.html',
            './resources/js/**/*.js',
        ],
        options: {
            whitelistSelectorsChildren: [/^prose/],
        },
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['effra', ...defaults.fontFamily.sans],
            },
        },
        container: {
            center: true,
            padding: '1rem',
        },
    },
    variants: {
        display: ['responsive', 'group-hover'],
    },
    plugins: [require('@tailwindcss/ui')],
};
