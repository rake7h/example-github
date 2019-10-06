import Ember from 'ember';

export function log(param) {
    console.log('Logger','logger',param[0]);
    return ;
}

export default Ember.Helper.helper(log);
