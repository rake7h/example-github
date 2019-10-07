import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
  tabSession: Ember.inject.service('tab-session'),
  redirect() {
    this.transitionTo('authenticated.home');
  },
  model() {
    let user = this.get('store').findRecord('github-user', '#').then((user)=>{
      this.get('tabSession').set('git_user',user.login);
      return user;
    })

    return Ember.RSVP.hash({
      user: user,
    });
  }
});
