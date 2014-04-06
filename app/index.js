define(function(require) {
  var Ember = require('ember');

  var App = window.App = Ember.Application.create();

  // Inject templates into Ember
  require('templates');

  // Inject plugins into jQuery
  require('typeahead');

  // Load Controllers
  App.ApplicationController = require('app/controllers/application');
  App.SearchController = require('app/controllers/search');

  // Load Views
  App.TypeaheadView = require('app/views/typeahead');

  // Load Routes
  App.LoadingRoute = Ember.Route.extend();
  App.ApplicationRoute = require('app/routes/application');
  App.SearchRoute = require('app/routes/search');

  // Configure Router
  App.Router.map(function() {
    this.route('search', {
      path: '/search/:query'
    });
  });

  // Use pushState
  // App.Router.reopen({
  //   location: 'history'
  // });

  return App;
});
