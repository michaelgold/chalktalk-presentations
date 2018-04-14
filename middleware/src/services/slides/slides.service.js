// Initializes the `slides` service on path `/slides`
const createService = require('feathers-nedb');
const createModel = require('../../models/slides.model');
const hooks = require('./slides.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'slides',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/slides', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('slides');

  service.hooks(hooks);
};
