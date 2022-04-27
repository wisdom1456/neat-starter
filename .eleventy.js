const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");
const pluginPWA = require("eleventy-plugin-pwa");
const Image = require("@11ty/eleventy-img");
const path = require("path");

async function imageShortcode(src, alt) {
    let srcPrefix = `./src`;
    src = srcPrefix + src;
    console.log(`Generating image(s) from:  ${src}`);
    if (alt === undefined) {
        // Throw an error on missing alt (alt="" works okay)
        throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
    }
    let metadata = await Image(src, {
        widths: [400, 600, 800],
        formats: ["webp", "jpeg"],

        urlPath: "/images/",
        outputDir: "./_site/images/",

        /* =====
      Now we'll make sure each resulting file's name will
      make sense to you. **This** is why you need
      that `path` statement mentioned earlier.
      ===== */
        filenameFormat: function(id, src, width, format, options) {
            const extension = path.extname(src);
            const name = path.basename(src, extension);
            return `${name}-${width}w.${format}`;
        }
    });
    let lowsrc = metadata.jpeg[0];
    return `<picture>
      ${Object.values(metadata)
          .map((imageFormat) => {
              return `  <source type="${imageFormat[0].sourceType}" class="object-cover" srcset="${imageFormat.map((entry) => entry.srcset).join(", ")}">`;
          })
          .join("\n")}
      <img
      class="object-cover h-full w-full"
        src="${lowsrc.url}"
        width="${lowsrc.width}"
        height="${lowsrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async">
    </picture>`;
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addJavaScriptFunction("image", imageShortcode);

    // Disable automatic use of your .gitignore
    eleventyConfig.setUseGitIgnore(false);

    // Merge data instead of overriding
    eleventyConfig.setDataDeepMerge(true);

    // human readable date
    eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
    });

    eleventyConfig.addPlugin(pluginPWA, {
        swDest: "./_site/service-worker.js",
        globDirectory: "./_site",
        clientsClaim: true,
        skipWaiting: true
    });

    // Syntax Highlighting for Code blocks
    eleventyConfig.addPlugin(syntaxHighlight);

    // To Support .yaml Extension in _data
    // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

    // Copy Static Files to /_Site
    eleventyConfig.addPassthroughCopy({
        "./src/admin/config.yml": "./admin/config.yml",
    "./node_modules/alpinejs/dist/cdn.min.js": "./static/js/alpine.js",
    "./node_modules/prismjs/themes/prism-tomorrow.css":
      "./static/css/prism-tomorrow.css",
      "./src/static/css/critical.css": "./static/css/critical.css"
    });

    // Copy Image Folder to /_site
    eleventyConfig.addPassthroughCopy("./src/static/img");
    eleventyConfig.addPassthroughCopy("./src/static/js");
    eleventyConfig.addPassthroughCopy("./src/static/fonts");
    eleventyConfig.addPassthroughCopy("manifest.json");
    eleventyConfig.addPassthroughCopy("robots.txt");

    // Copy favicon to route of /_site
    eleventyConfig.addPassthroughCopy({ "./src/static/img/favicons": "./" });

    // Minify HTML
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        // Eleventy 1.0+: use this.inputPath and this.outputPath instead
        if (outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
            return minified;
        }

        return content;
    });

    // Let Eleventy transform HTML files as nunjucks
    // So that we can use .html instead of .njk
    return {
        dir: {
      input: "src",
        },
    htmlTemplateEngine: "njk",
  };
    };
