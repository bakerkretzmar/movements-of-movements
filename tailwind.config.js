const defaults = require('tailwindcss/defaultTheme');

module.exports = {
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
    variants: {},
    plugins: [],
};
