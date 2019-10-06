import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    login() {
      this.get('session').authenticate('authenticator:torii', 'github').then(()=>{
          this.transitionToRoute('authenticated.home');
      })
      .catch(()=>{
        if(this.get('session.isAuthenticated')) {
          this.transitionToRoute('authenticated.home');
        }
      })
    }
  }
});
