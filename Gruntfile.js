module.exports = function(grunt) {
	grunt.initConfig({
		compass: {
			dist: {
				options: {
					sassDir: 'assets/sass',
					cssDir: 'assets/css',
					environment: 'production',
					require: ['susy', 'breakpoint']
				}
			}
		},
		autoprefixer: {
			css: {
				src: 'assets/css/*.css',
				options: {
					map: true
				}
			}
		},
		watch: {
			css: {
				files: 'assets/sass/*.scss',
				tasks: ['compass', 'autoprefixer:css']
			}
		}
	});
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
}