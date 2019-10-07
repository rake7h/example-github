import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let repositoryModel = this.modelFor('authenticated.home.repository');
    let repoName = repositoryModel.repo;
    let sha = params.tree_path;

    let tree = this.get('store').queryRecord('github-tree', {repo: repoName, sha: sha }).then((xhr)=>{
      let directories = xhr.directories;
      let files = xhr.files;

      let tree =[];

      for(let i in directories) {
        let a = {
         name: i,
         kind: 'dir',
         sha: directories[i]
        }
        tree.push(a);
      }
      for(let i in files) {
        let a = {
         name: i,
         kind: 'file',
         sha: files[i]
        }
        tree.push(a);
      }
      return tree;
    })

    return Ember.RSVP.hash({
      tree: tree,

      //breadcrub navigator
    });
  }
});
