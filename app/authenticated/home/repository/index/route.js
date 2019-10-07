import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let repositoryModel = this.modelFor('authenticated.home.repository');

    return Ember.RSVP.hash({
       tree: repositoryModel.tree,

       //breadcrub navigator
       repo:repositoryModel.repo
    });
  }
});
