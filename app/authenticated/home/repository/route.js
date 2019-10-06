import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let repoName = params.repo_name;
    let tree = this.get('store').queryRecord('github-tree', { repo: repoName, sha: 'master' }).then((xhr)=>{
      console.log('xhr',xhr)
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
      repo:repoName      
    });
  }
});
