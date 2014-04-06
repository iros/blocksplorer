module.exports = (grunt) ->
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.initConfig

    jshint:
      options:
        jshintrc: '.jshintrc'
      all: [
        'app/**/*.js'
      ]

    less:
      css:
        src: 'styles/style.less'
        dest: 'public/style.css'

    copy:
      assets:
        expand: true
        cwd: 'assets'
        src: '**/*'
        dest: 'public'

    watch:
      options:
        livereload: true
      css:
        files: ['styles/*']
        tasks: ['less']
      jade:
        files: ['app/pages/*']
        tasks: ['jade:develop']
      handlebars:
        files: ['app/templates/**']
        tasks: ['handlebars']
      app:
        files: [
          'app/**'
          '!app/templates/**'
          'test/**'
        ]

    clean:
      public: ['public']

    jade:
      develop:
        src: 'app/pages/index.jade'
        dest: 'public/index.html'
        options:
          data:
            config: require('./config/app'),
            debug: true
      production:
        src: 'app/pages/index.jade'
        dest: 'public/index.html'
        options:
          data:
            config: require('./config/app'),
            debug: false

    handlebars:
      templates:
        src: 'app/templates/**/*.hbs'
        dest: 'public/templates.js'
        options:
          amd: true
          templateBasePath: 'app/templates/'

    requirejs:
      options:
        baseUrl: '',
        mainConfigFile: 'config/requirejs.js'
        name: 'bower_components/almond/almond'
        out: 'public/app.js'
      develop:
        options:
          optimize: 'none'
      production:
        options:
          deps: ['app/index']
          insertRequire: ['app/index']

  grunt.renameTask('emberTemplates', 'handlebars')
  grunt.registerTask('work', [
    'jshint'
    'copy'
    'jade:develop'
    'handlebars'
    'less'
    'server:develop'
    'watch'
  ])
  grunt.registerTask('production', [
    'clean'
    'copy'
    'jade:production'
    'handlebars'
    'requirejs:production'
    'less',
    'server',
    'watch'
  ])

  grunt.registerTask('default', ['work'])

  grunt.registerTask 'server', ->
    process.env.NODE_ENV = 'development' if @flags.develop
    require('./app');
