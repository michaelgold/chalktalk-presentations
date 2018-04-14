const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const local = require('@feathersjs/authentication-local');


module.exports = function (app) {
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local());

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies),

        // This hook adds the `roles` attribute to the JWT payload by
        // modifying params.payload.
        hook => {
          // make sure params.payload exists
          hook.params.payload = hook.params.payload || {};
          // merge in a `roles` property
          Object.assign(hook.params.payload, {roles: hook.params.user.roles});
          Object.assign(hook.params.payload, {id: hook.params.user._id});
        }
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    }
  });
};
