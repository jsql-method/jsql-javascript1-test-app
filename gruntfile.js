module.exports = function (grunt) {

    var path = require('path');
    var openPath = path.resolve() + "\\dist\\index.html";

    grunt.initConfig({

        clean: [
            './dist/'
        ],

        copy: {

            src: {

                files: [
                    {
                        expand: true,
                        cwd: './src',
                        src: ['*'],
                        dest: './dist'
                    }
                ]

            },

            jsql_plugin_local: {

                files: [
                    {
                        expand: true,
                        cwd: '../jsql-javascript-plugin/dist',
                        src: ['jsql-javascript.js'],
                        dest: './dist'
                    }
                ]

            },

            jsql_plugin_dist: {

                files: [
                    {
                        expand: true,
                        cwd: './node_modules/jsql-javascript',
                        src: ['jsql-javascript.min.js'],
                        dest: './dist'
                    }
                ]

            }

        },

        watch: {

            src: {
                files: ['src/*.js', 'src/*.html'],
                tasks: ['buildLocal', 'preprocess-watch'],
                options: {
                    nospawn: true
                }
            },

        },

        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            watches: {
                tasks: ["watch:src"]
            }
        },

        open: {
            dist: {
                path: openPath,
                app: 'chrome.exe'
            }
        },

        preprocess: {
            options: {
                context: {
                    HOST: null,
                    ENV: 'LOCAL'
                }
            },
            index: {
                src: 'src/index.html',
                dest: 'dist/index.html'
            },

        },

        jsql: {
            target: {
                options: {
                    apiKey: 'dawid.senko-javascript@jsql.it',
                    src: 'dist/cases.js',
                    dist: 'dist/cases.js',
                    devKeyFileName: 'test-key.key',
                    debug: true,
                    env: 'local'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jsql');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-preprocess');

    grunt.registerTask('buildDist', ['clean', 'copy:src', 'copy:jsql_plugin_dist', 'jsql',]);
    grunt.registerTask('buildLocal', ['clean', 'copy:src', 'copy:jsql_plugin_local', 'jsql',]);

    grunt.registerTask('preprocess-watch', function () {

        grunt.config('preprocess.options.context.HOST', 'http://localhost:9192');
        grunt.task.run('preprocess:index');

    });

    grunt.registerTask('dev', function () {

        grunt.task.run('buildLocal');

        grunt.config('preprocess.options.context.HOST', 'http://localhost:9192');

        grunt.task.run('preprocess:index');
        grunt.task.run('open:dist');
        grunt.task.run('concurrent:watches');

    });

    grunt.registerTask('default', function () {

        grunt.task.run('buildDist');

        grunt.config('preprocess.options.context.HOST', 'https://test-provider.jsql.it');
        grunt.config('preprocess.options.context.ENV', 'TEST');

        grunt.config('jsql.target.options.env', 'test');

        grunt.task.run('preprocess:index');

    });

};