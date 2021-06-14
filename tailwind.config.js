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
            "hero-back": "linear-gradient(rgba(0,0,0, 0.2), rgba(0,0,0, 0.4)), url('/static/img/bg/columnsback3.jpg')",
            "watercolors-back": "linear-gradient(rgba(255,255,255, .4), rgba(255,255,255, .4)), url('/static/img/bg/marbleback2.jpg')",
            "waves-back": "linear-gradient(rgba(255,255,255, .4), rgba(255,255,255, .4)), url('/static/img/beachflow.jpg')",
            "tampa-back": "linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .7)), url('/static/img/locs/tampa-back.jpg')",
            "plaid-back": "linear-gradient(rgba(0,0,0, 0), rgba(0,0,0, 0)), url('/static/img/bg/Plaid_1024x768.png')",
            "beach-back": "linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0, 0.7)), url('/static/img/bg/destinwater_c.jpg')",
            "marble-back": "linear-gradient(rgba(255,255,255, 0.8), rgba(255,255,255, 0.4)),url('/static/img/bg/marbleback2.jpg')",
            "group-back": "linear-gradient(rgba(255,255,255, 0.8), rgba(255,255,255, 0.4)),url('/static/img/bg/group-back.jpg')",
            "group-back2": "linear-gradient(rgba(0,0,0, 0.8), rgba(0,0,0, 0.4)),url('/static/img/bg/group-back3.jpg')",
            "pen-back": "linear-gradient(rgba(0,0,0, 0.4), rgba(0,0,0, 0.6)),url('/static/img/bg/pen.jpg')",
            "footer-texture": "url('/static/img/footer-texture.jpg')",
            ambulance: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/ambulance_c.jpg')",
            bank: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/bank_c.jpg')",
            home: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/condo.jpg')",
            debt: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/debt_c.jpg')",
            police: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/police_c.jpg')",
            court: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/court_c.jpg')",
            "gradient-back": "linear-gradient(0.25turn, #17baa3, #070e32, #1715ba)",
            "gradient-back1": "linear-gradient(0.25turn, #17baa3, #c57e38, #1715ba)"
        })
    },
    variants: {
        animation: ["motion-safe"]
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")]
};
