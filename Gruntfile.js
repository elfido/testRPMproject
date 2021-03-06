module.exports = function(grunt) {
	grunt.initConfig({
	  easy_rpm: {
	    options: {
	        name: "Fido_RPM",
	        version: "0.1.0",
	        release: "1",
	        buildArch: "x86_64",
	        requires: ["nodejs >= 0.10.22"],
	        rpmDestination: "dist"
	    },
	    release: {
		    files: {
		        '/opt/nodesample': ['lib/**/*.js', 'node_modules/**/*', 'index.js', 'package.json']
		    }
	    }
	  }
	});
	grunt.loadNpmTasks('grunt-easy-rpm');
	grunt.registerTask('default', ['easy_rpm']);
};