define(function(require) {

  var Ember = require('ember');

  return Ember.TextField.extend({
    classNames: ['typeahead'],
    didInsertElement: function() {
      Ember.run.next(function() {
        var el = this.$();
        var typeahead = el.typeahead({
          hint: true,
          highlight: true,
          minLength: 2
        }, {
          name: 'api',
          displayKey: 'name',
          source: function(query, callback) {
            callback(this.search.request(query).slice(0, 8));
          }.bind(this)
        });
        typeahead.on('typeahead:selected', function(e, item) {
          this.get('application').send('searchSubmit', item.name);
        }.bind(this));
      }.bind(this));
    }
  });

});
