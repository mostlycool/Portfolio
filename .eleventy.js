module.exports = function(eleventyConfig) {
  // Passthrough for static assets (images, fonts, etc.)
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("images");

  // Filter for current year
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    },
    passthroughFileCopy: true
  };
};
