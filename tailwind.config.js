module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            backgroundColor: {
                primary: "var(--bg-primary)",
                secondary: "var(--bg-secondary)",
                decoration: "var(--decoration)",
            },
            textColor: {
                primary: "var(--text-primary)",
                secondary: "var(--text-secondary)",
                decoration: "var(--decoration)",
            },
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                roboto: ['var(--font-roboto)'],
                inter: ['var(--font-inter)'],
            },
        },
    },
    plugins: [],
}
