const assert = require('assert');
const app = require('../../src/app');

describe('\'slides\' service', () => {
  it('registered the service', () => {
    const service = app.service('slides');

    assert.ok(service, 'Registered the service');
  });
});
