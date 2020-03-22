const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
    important: true,
    theme: {
        container: {
            center: true
        },
        extend: {
            spacing: {
                0.5: "0.125rem",
                7: "1.625rem",
                13: "3.125rem",
                14: "3.5rem",
                34: "7.5rem"
            },
            fontSize: {},
            borderRadius: {
                xl: "0.875rem"
            },
            marginTop: {
                34: "9rem"
            },
            maxWidth: {
                10: "10%",
                20: "20%",
                30: "30%",
                40: "40%",
                50: "50%",
                60: "60%",
                70: "70%",
                80: "80%",
                90: "90%",
                100: "100%",
                none: "none"
            },
            maxHeight: {
                "80vh": "80vh",
                "70vh": "70vh",
                "60vh": "60vh",
                "50vh": "50vh",
                none: "none"
            },
            colors: {},
            inset: {
                "5%": "5%",
                "4%": "4%",
                "3%": "3%",
                "2%": "2%",
                "1%": "1%"
            },
            width: {},
            zIndex: {
                60: 60,
                70: 70
            },
            gridTemplateRows: {
                8: "repeat(8, minmax(0, 1fr))",
                10: "repeat(10, minmax(0, 1fr))",
                11: "repeat(11, minmax(0, 1fr))",
                layout: "fit-content(100px) repeat(10, minmax(0, 1fr)) fit-content(100px)"
            },
            gridRow: {
                "span-7": "span 7 / span 7",
                "span-8": "span 8 / span 8",
                "span-9": "span 9 / span 9",
                "span-10": "span 10 / span 10",
                "span-11": "span 11 / span 11",
                "span-12": "span 12 / span 12"
            }
        }
    },
    variants: {
        backgroundColor: ["responsive", "hover", "focus", "disabled"],
        border: ["responsive", "hover", "focus", "disabled"],
        color: ["responsive", "hover", "focus"],
        opacity: ["responsive", "hover", "focus", "disabled"]
    },
    plugins: [
        ({ addBase, config }) => {
            addBase({})
        },
        ({ addUtilities }) => addUtilities({})
    ]
}
