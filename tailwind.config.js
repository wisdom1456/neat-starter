const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: {
        mode: "all",
        content: ["./**/*.html"],
        options: {
            whitelist: []
        }
    },
    theme: {
        animation: {
            fadeIn: "fadeIn 1s ease-in forwards",
            slideIn: "slideIn 2s ease-out"
        },
        keyframes: {
            fadeIn: {
                "0%": { opacity: 0 },
                "100%": { opacity: 1 }
            },
            slideIn: {
                "0%": { opacity: "0", transform: "translateY(-30px)" },
                "100%": { opacity: "1", transform: "translateY(0)" }
            }
        },
        container: {
            center: true
        },
        extend: {
            colors: {
                br: {
                    100: "#E6F0FF",
                    200: "#BFDAFF",
                    300: "#17baa3",
                    400: "#1764b1",
                    500: "#1715ba",
                    600: "#155ba4",
                    700: "#004098",
                    800: "#003072",
                    900: "#070e32"
                }
            },
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans]
            }
        },
        backgroundImage: (theme) => ({
            "marble-back": "linear-gradient(rgba(255,255,255, .4), rgba(255,255,255, .4)), url('/static/img/bg/orig-marbleback2.jpg')",
            "tampa-back": "linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .7)), url('/static/img/locs/tampa-back.jpg')",
            "hero-back": "linear-gradient(rgba(0,0,0, 0.2), rgba(0,0,0, 0.4)), url('/static/img/bg/orig-columnsback3.jpg')",
            "waves-back": "linear-gradient(rgba(255,255,255, .4), rgba(255,255,255, .4)), url('/static/img/bg/orig-beachflow.jpg')",
            "gradient-back": "linear-gradient(0.25turn, #17baa3, #070e32, #1715ba)",

            ambulance: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/orig-ambulance.jpg')",
            bank: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/orig-bank.jpg')",
            home: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/orig-condo.jpg')",
            debt: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/orig-debt.jpg')",
            police: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/orig-police.jpg')",
            court: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/orig-court.jpg')"
        })
    },
    variants: {
        animation: ["motion-safe"]
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")]
};
