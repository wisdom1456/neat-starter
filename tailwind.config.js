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
                "0%": { opacity: '0', transform: 'translateY(-30px)'},
                "100%": { opacity: '1', transform: 'translateY(0)'}
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
                    500: "#1e4da2",
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
            "marble-back": "linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.4)), url('/static/img/bg/beach.jpg')",
            "destin-back": "linear-gradient(rgba(255,255,255, 0.1), rgba(255,255,255, 0.8)),url('/static/img/bg/trees1.jpg')",
            "footer-texture": "url('/static/img/footer-texture.jpg')",
            "ambulance": "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/ambulance_c.jpg')",
            "bank": "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/bank_c.jpg')",
            "home": "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/home_c.jpg')",
            "debt": "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/debt_c.jpg')",
            "police": "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/police_c.jpg')",
            "court": "linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 1)),url('/static/img/pareas/court_c.jpg')",
        })
    },
    variants: {
        animation: ["motion-safe"]
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")]
};
