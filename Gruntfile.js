'use strict';

module.exports = function(grunt) {
	// These plugins provide necessary tasks.
	grunt.initConfig({
		'watch' : {
  		 	scripts: {
    			files: ['**/*.js',"!public/**/*.js"],
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
				ui: 'bdd',
				reporter: 'tap'
			},
			all: { src: ['test/*.js','test/**/*.js','test/**/**/*.js'] }
		}
	});
	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', 'watch');
};
