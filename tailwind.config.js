const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./**/*.html"],
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
                    900: "#003072"
                    //#020a36
                }
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif']
            }
        },
        backgroundImage: (theme) => ({
            "marble-back": "linear-gradient(rgba(255,255,255, .4), rgba(255,255,255, .4)), url('/static/img/posts/orig-marbleback2.jpg')",
            "tampa-back": "linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .7)), url('/static/img/posts/orig-tampa1.jpg')",
            "hero-back": "linear-gradient(rgba(0,0,0, 0.2), rgba(0,0,0, 0.4)), url('/static/img/posts/orig-columnsback3.jpg')",
            "waves-back": "linear-gradient(rgba(255,255,255, .4), rgba(255,255,255, .4)), url('/static/img/posts/orig-beachflow.jpg')",
            "waves-back1": "linear-gradient(rgba(0,0,0, .4), rgba(0,0,0, .4)), url('/static/img/posts/orig-beachflow.jpg')",
            "gradient-back": "linear-gradient(0.25turn, #17baa3, #070e32, #1715ba)",

            ambulance: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/posts/orig-ambulance.jpg')",
            bank: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/posts/orig-bank.jpg')",
            home: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/posts/orig-condo.jpg')",
            debt: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/posts/orig-debt.jpg')",
            police: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/posts/orig-police.jpg')",
            court: "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/posts/orig-court.jpg')"
        })
    },
    variants: {
        animation: ["motion-safe"]
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/forms")]
};
