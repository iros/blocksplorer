define(function(require) {

  var Ember = require('ember');

  return Ember.Route.extend({
    model: function (params) {
      return require('json!config/api.json');
    },
    setupController: function(controller, model) {
      this.controllerFor('search').set('content', model);
    },
    actions: {
      searchSubmit: function(query) {
        // this action is triggered with the query on typehead:selected
        // there is probably a better way to integrate this
        if (query) {
          this.controllerFor('search').set('query', query);
        }
        this.transitionTo('search', this.controllerFor('search').get('query'));
      }
    }
  });

});
