const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        // rest of the code
    },
    plugins: [
        addVariablesForColors,
    ],
};

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors)?.map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
