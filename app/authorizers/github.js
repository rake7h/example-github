import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  session: service(),

  authorize(sessionData, block) {
    console.log('sessionData.access_token',sessionData.access_token)
    if (this.get('session.isAuthenticated') && !isEmpty(sessionData.access_token)) {
      block('Authorization', `token ${sessionData.access_token}`);
    }
  }
});
