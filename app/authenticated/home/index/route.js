import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
  tabSession: Ember.inject.service('tab-session'),

  model() {
    let currentUser = this.get('tabSession').get('git_user');

    let repos = this.get('store').query('github-repository', { user: currentUser, type: 'public' }).then((xhr)=>{
      return xhr;
    });

    return Ember.RSVP.hash({
      repos: repos
    });
  }
});
