import Route from '@ember/routing/route';

export default Route.extend({
  host: 'https://api.github.com',
  ajax: Ember.inject.service(),

  model(params) {
    let repositoryModel = this.modelFor('authenticated.home.repository');
    let repoName = repositoryModel.repo;
    let sha = params.blob_id;
    let host = this.get('host');
    let url = `${host}/repos/${repoName}/git/blobs/${sha}`;

    let blobContent = this.get('ajax').request(url).then((xhr)=>{
      let content = {
        value: atob(xhr.content),
        size:xhr.size
      };
      return content;
    }).catch(()=>{
    })

    return Ember.RSVP.hash({
      blobContent: blobContent,
    });
  }
});
