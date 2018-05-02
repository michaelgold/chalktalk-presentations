const { authenticate } = require('@feathersjs/authentication').hooks;

const commonHooks = require('feathers-hooks-common');
const { restrictToOwner, restrictToRoles } = require('feathers-authentication-hooks');



const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    idField: '_id',
    ownerField: '_id'
  })
];

const userRestriction = [
  authenticate('jwt'),
  restrictToRoles({
    roles: 'admin, user'
  })
];

const adminRestriction = [
  authenticate('jwt'),
  restrictToRoles({
    roles: 'admin'
  })
];

module.exports = {
  before: {
    all: [],
    find: [ ...userRestriction ],
    get: [ ...userRestriction ],
    create: [ ...adminRestriction, hashPassword() ],
    update: [ ...adminRestriction, hashPassword() ],
    patch: [ ...adminRestriction, hashPassword()  ],
    remove: [ ...adminRestriction ]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
