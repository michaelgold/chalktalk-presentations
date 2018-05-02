const presentations = require('./presentations/presentations.service.js');
const users = require('./users/users.service.js');
const slides = require('./slides/slides.service.js');
const images = require('./images/images.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(presentations);
  app.configure(users);
  app.configure(slides);
  app.configure(images);
};
