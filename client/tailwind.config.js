/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                Dark: "#20232C",
                dark500: "#23262D",
                dark400: "#2A2C36",
            },
        },
    },
    plugins: [],
};
