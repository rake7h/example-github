import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin,{
  tabSession: Ember.inject.service('tab-session'),

  actions: {
    logout() {
      this.get('session').invalidate();
      this.get('tabSession').clear();
    }
  }
});
