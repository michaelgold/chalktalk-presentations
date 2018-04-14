const assert = require('assert');
const app = require('../../src/app');

describe('\'presentations\' service', () => {
  it('registered the service', () => {
    const service = app.service('presentations');

    assert.ok(service, 'Registered the service');
  });
});
