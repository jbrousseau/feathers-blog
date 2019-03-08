const blogPost = require('./blog-post/blog-post.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(blogPost);
};
