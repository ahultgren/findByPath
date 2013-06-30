"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        globalstrict: true,
        node: true
      },
      lib: {
        files: {
          src: ['Gruntfile.js', 'index.js', 'package.json', 'test/*.js']
        }
      }
    },
    browserify: {
      options: {
        alias: './index.js:findByPath'
      },
      'dist/findByPath.js': ['index.js']
    },
    uglify: {
      browser: {
        files: {
          'dist/findByPath.min.js': ['dist/findByPath.js']
        }
      }
    }
  });

  // npm tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['jshint', 'browserify', 'uglify']);
};
