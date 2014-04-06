define(function(require) {

  var Ember = require('ember');
  var Fuse = require('fuse');

  return Ember.ArrayController.extend({
    query: '',

    // make a new fuse instance when the underlying content changes
    fuse: function() {
      return new Fuse(this.get('content'), {
        keys: ['name'],
        threshold: 0.4
      });
    }.property('content.@each'),

    // query the fuse instance
    request: function(query) {
      return this.get('fuse').search(query);
    },

    // get results from a fuse query
    results: function() {
      // extract the ID from each matching record
      var match = this.request(this.get('query')).mapProperty('id');
      // return results
      return this.filter(function (item) {
        return match.contains(item.id);
      });
    }.property('query')
  });

});
