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
                    900: "#00204C"
                }
            },
            fontFamily: {
                sans: ["Cabin", ...defaultTheme.fontFamily.sans]
            }
        },
        backgroundImage: (theme) => ({
            "hero-back": "url('/static/img/bg/columnsback2.jpg')",
            "marble-back": "url('/static/img/bg/marbleback2.jpg')",
            "footer-texture": "url('/static/img/footer-texture.png')"
        })
    },
    variants: {
        animation: ["motion-safe"]
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")]
};
