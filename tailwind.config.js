module.exports = {
    purge: {
        mode: "all",
        content: ["./**/*.html"],
        options: {
            whitelist: []
        }
    },
    theme: {
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
            }
        },
        backgroundImage: (theme) => ({
            "hero-back": "url('/static/img/bg/columnsback2.jpg')",
            "marble-back": "url('/static/img/bg/marbleback2.jpg')",
            "footer-texture": "url('/static/img/footer-texture.png')"
        })
    },
    variants: {},
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")]
};
