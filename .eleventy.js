module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('index', 'layouts/index.hbs');
  eleventyConfig.addLayoutAlias('main', 'layouts/main.hbs');

  return {
    dir: {
      input: 'source/content',
      includes: 'includes',
      data: 'data',
      output: 'dist'
    },
    dataTemplateEngine: 'hbs',
    markdownTemplateEngine: 'hbs',
    htmlTemplateEngine: 'hbs',
    templateFormats: ['hbs']
  }
};
