/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
        extend: {
            colors: {
                "primary": "#303446",
                "secondary": "#232634",
                "tertiary": "#292c3c",
                "text-primary": "#c6d0f5"
            },
            fontFamily: {
                "jetbrains-mono": ["JetBrains Mono", "monospace"],
            }
        },
    },
    plugins: [],
}

