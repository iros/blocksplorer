require.config({

  // override data-main from script tag during debug mode
  baseUrl: '/',

  // map paths
  paths: {
    // bower components
    jquery: 'bower_components/jquery/jquery',
    handlebars: 'bower_components/handlebars/handlebars',
    ember: 'bower_components/ember/ember',
    typeahead: 'bower_components/typeahead.js/dist/typeahead.jquery',
    fuse: 'bower_components/Fuse/fuse',

    // aliases
    templates: 'public/templates',

    // loader plugins
    'amd-loader': 'bower_components/amd-loader/amd-loader',
    text: 'bower_components/requirejs-plugins/lib/text',
    json: 'bower_components/requirejs-plugins/src/json',
    cjs: 'bower_components/cjs/cjs'
  },

  // load non-amd dependencies
  shim: {
    jquery: {
      exports: 'jQuery'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    ember: {
      deps: ['jquery', 'handlebars'],
      exports: 'Ember'
    },
    bootstrap: {
      deps: ['jquery']
    },
    typeahead: {
      deps: ['jquery']
    },
    fuse: {
      exports: 'Fuse'
    }
  },

  // modules not included in optimized build
  stubModules: ['amd-loader', 'text', 'json', 'cjs']

});
