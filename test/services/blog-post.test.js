const assert = require('assert');
const app = require('../../src/app');

describe('\'blogPost\' service', () => {
  it('registered the service', () => {
    const service = app.service('blog-post');

    assert.ok(service, 'Registered the service');
  });
});
