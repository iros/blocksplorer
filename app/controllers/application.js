define(function(require) {

  var Ember = require('ember');

  return Ember.ObjectController.extend({
    needs: ['search'],
    search: Ember.computed.alias('controllers.search')
  });

});
