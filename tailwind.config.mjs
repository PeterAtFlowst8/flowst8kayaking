/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2F4858", // Charcoal Blue
                secondary: "#08B2E3", // Bright Sky
                accent: "#FC60A8", // Hot Pink
                highlight: "#CEEC97", // Lime Cream
                peach: "#F4B393", // Peach Glow
                dark: "#1A2C38", // Darker Charcoal
                light: "#F0F8FF", // Alice Blue
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                heading: ["var(--font-outfit)"],
            },
            animation: {
                aurora: "aurora 6s linear infinite",
            },
            keyframes: {
                aurora: {
                    "0%": { backgroundPosition: "50% 50%, 50% 50%" },
                    "100%": { backgroundPosition: "350% 50%, 350% 50%" },
                },
            },
        },
    },
    plugins: [],
};
