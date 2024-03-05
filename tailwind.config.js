/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                'main-bg': '#F5F8FF',
                'second-bg': '#6172F3',
                'title-color': '#09090B',
                'desc-title-color': '#E0EAFF',
                'desc-text-color': 'rgba(224, 234, 255, 0.75)',
                'button-bg': '#8098F9',
                'gray-color': '#71717A',
            },
            backgroundImage: {
                'cyrcle-gradient': 'linear-gradient(174deg, rgba(164, 188, 253, 0.20) 4.83%, rgba(68, 76, 231, 0.16) 91.13%), radial-gradient(50% 50% at 50% 50%, rgba(68, 76, 231, 0.16) 0%, rgba(68, 76, 231, 0.06) 100%)',
                'cyrcle-border-gradient': 'linear-gradient(163deg, rgba(68, 76, 231, 0.16) 6.85%, rgba(0, 0, 0, 0.00) 89.34%), radial-gradient(50% 50% at 50% 50%, rgba(68, 76, 231, 0.16) 0%, rgba(68, 76, 231, 0.06) 100%);'
            },
            borderRadius: {
                'card-rounded': '50px'
            }
        },
    },
    plugins: [],
}