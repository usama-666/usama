/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}", // For Next.js 13+
    ],
    theme: {
        extend: {
            colors: {
                DEFAULT: "#000",
                100: "#000319",
                softbg: "#000311",
            },
        },
    },
    plugins: [],
};
