'use strict';

module.exports = function(grunt) {
	// These plugins provide necessary tasks.
	grunt.initConfig({
		'watch' : {
  		 	scripts: {
    			files: ['**/*.js'],
    			tasks: ['simplemocha'],
   			 	options: {
      			},
  		  	},
		},
		'simplemocha' : {
	 		options: {
			   globals: ['should'],
				timeout: 3000,
				ignoreLeaks: false,
				grep: '*-test',
				ui: 'bdd',
				reporter: 'tap'
			},
			all: { src: ['test/**/*.js'] }
		}
	});
	// For this to work, you need to have run `npm install grunt-simple-mocha`
	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', 'watch');
};