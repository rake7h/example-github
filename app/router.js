import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('authenticated',{path: '/'}, function() {
    this.route('home', {path: 'repositories'}, function() {
      this.route('repository', {path: ':repo_name'}, function() {
        this.route('tree',{path: 'tree/:tree_path'});
        this.route('blob',{path: 'blob/:blob_id'});
      });
    });
  });
  this.route('login');
  this.route('logout');
  this.route('failpage');
  this.route('loading');
});

export default Router;
