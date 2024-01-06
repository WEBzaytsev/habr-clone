const spacing = require('./resources/tailwind-settings/spacing');
const colors = require('./resources/tailwind-settings/colors');
const fontSize = require('./resources/tailwind-settings/fontSize');
const lineHeight = require('./resources/tailwind-settings/lineHeight.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./resources/views/app.blade.php', './resources/js/**/*.{vue,js,ts,jsx,tsx}'],
    future: {
        hoverOnlyWhenSupported: true,
    },
    theme: {
        extend: {
            spacing,
            colors,
            fontSize,
            lineHeight,
            fontFamily: {
                roboto: 'Roboto, sans-serif',
                inter: 'Inter, sans-serif',
            },
            maxWidth: {},
            borderRadius: {
                10: '10px',
                20: '20px',
                30: '30px',
                40: '40px',
                60: '60px',
                80: '80px',
            },
            screens: {},
        },
    },
    plugins: [],
};
