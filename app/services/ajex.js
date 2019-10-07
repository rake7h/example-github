import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  session: Ember.inject.service(),
  headers: Ember.computed('session.access_token', {
    get() {
      let headers = {};
      const authToken = this.get('session.access_token');
      if (authToken) {
        headers['auth-token'] = authToken;
      }
      return headers;
    }
  })
});
