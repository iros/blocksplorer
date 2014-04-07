define(function(require) {

  var Ember = require('ember');
  var config = require('cjs!config/app');

  return Ember.Route.extend({
    model: function(params) {
      var api = params.query;
      var url = config.s3_endpoint+api+".json";
      return Ember.$.getJSON(url).then(null, function() {
        return {query: params.query};
      });
    },
    setupController: function(controller, model) {
      // it would be better if blocks was stored as
      // an array so this conversion wasn't required
      var blocks = [];
      for(var blockId in model.blocks) {
        var block = model.blocks[blockId];

        block.url = block.thumbnail.length > 0 ?
          "http://bl.ocks.org/" + block.userId + "/" + blockId :
          "http://gist.github.com/" + blockId;

        block.id = blockId;
        blocks.push(block);
      }
      this.controller.set('blocks', blocks);
      this.controller.set('query', model.api);
    }
  });

});
