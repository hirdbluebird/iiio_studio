module.exports = function(grunt) {
	grunt.initConfig({
		compass: {
			dist: {
				options: {
					sassDir: 'assets/sass',
					cssDir: 'assets/css',
					environment: 'production',
					require: ['susy', 'breakpoint'],
					noLineComments: true
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
					'assets/sass/*.scss',
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
				files: 'assets/sass/*.scss',
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