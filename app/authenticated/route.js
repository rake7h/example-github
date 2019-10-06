import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
  tabSession: Ember.inject.service('tab-session'),

  model() {
    let user = this.get('store').findRecord('github-user', '#').then((user)=>{
      this.get('tabSession').set('git_user',user.login);
      return user;
    })

    let currentUser = this.get('tabSession').set('git_user');
    let repos = this.get('store').query('github-repository', { user: currentUser, type: 'all' }); // get all repositories for user

    return Ember.RSVP.hash({
      user: user,
      repos: repos
    });
  }
});
