import { module, test } from 'qunit';
import { visit, click, setupOnerror, resetOnerror } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { AJAXError } from 'example/utils/errors';
import server from 'example/utils/server';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    // Squelch AJAX error to allow us to test failure scenarios
    // Note: This only works with RSVP!
    //
    // setupOnerror(error => {
    //   if (error instanceof AJAXError) {
    //     return;
    //   }
    //
    //   throw error;
    // });
  });

  hooks.afterEach(function() {
    resetOnerror()
  });

  test('success', async function(assert) {
    await visit('/');

    server.put('/foos/1', () => [200, {}, {}]);

    await click('button');

    assert.dom('.message').doesNotExist();
    assert.dom('button').doesNotExist();
  });

  test('failure', async function(assert) {
    await visit('/');

    server.put('/foos/1', () => [500, {}, {}]);

    await click('button');

    assert.dom('.message').hasText('Internal Server Error');
    assert.dom('button').exists();
  });
});
