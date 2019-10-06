import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | failpage', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:failpage');
    assert.ok(route);
  });
});
