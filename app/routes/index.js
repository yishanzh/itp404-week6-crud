import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    // $.getJSON('/api/posts');
    return this.store.findAll('post'); //the store is a global cache of all the data and applications.
  }
});
