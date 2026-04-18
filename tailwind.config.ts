module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                flash: {
                    '0%, 100%': { opacity: '0' },
                    '10%': { opacity: '1' },
                    '20%': { opacity: '0' },
                    '30%': { opacity: '1' },
                    '40%': { opacity: '0' },
                },
            },
            animation: {
                flash: 'flash 1.2s linear infinite',
            }
        },
    },
};