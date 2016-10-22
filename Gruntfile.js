module.exports = function(grunt) {
	grunt.initConfig({
		compass: {
			dist: {
				options: {
					sassDir: 'assets/scss/',
					cssDir: 'assets/css',
					environment: 'development',
					outputStyle: 'compressed',
					require: 'susy'
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
		cssmin: {
			minify: {
				expand: true,
				src: 'assets/css/*.css'
			}
		},
		browserSync: {
			bsFiles: {
				src: [
					'assets/scss/modules/*.scss',
					'index.html'
				]
			},
			options: {
				watchTask: true,
				server: './'
			}
		},
		watch: {
			css: {
				files: 'assets/scss/modules/*.scss',
				tasks: ['compass', 'autoprefixer:css', 'cssmin:minify']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['browserSync', 'watch']);
}