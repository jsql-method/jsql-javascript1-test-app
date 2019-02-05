module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    var path = require('path');
    var openPath = path.resolve() + "\\dist\\index.html";

    grunt.initConfig({

        clean: [
            './dist/'
        ],

        concat: {
            options: {
                separator: ''
            },
            dist: {
                src: ['src/cases_config.js', 'src/cases_insert.js', 'src/cases_select.js', 'src/cases_delete.js', 'src/cases_update.js'],
                dest: 'dist/cases.js'
            }
        },

        copy: {

            src: {

                files: [
                    {
                        expand: true,
                        cwd: './src',
                        src: ['index.html'],
                        dest: './dist'
                    }
                ]

            },

            jsql_plugin_local: {

                files: [
                    {
                        expand: true,
                        cwd: '../jsql-javascript-plugin/dist',
                        src: ['jsql-javascript.min.js'],
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
                tasks: ['buildLocal'],
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

        jsql: {
            target: {
                options: {
                    apiKey: '==u3SsBh4ZQxdZpLxcyCZCo8i4hAF0lliKNWwMgst0fg==G7x78vNdHH0OSFC0aOdp',
                    src: 'dist/cases.js',
                    dist: 'dist'
                }
            }
        }

    });

    grunt.registerTask('buildDist', ['clean', 'copy:src', 'concat:dist', 'copy:jsql_plugin_dist', 'jsql']);
    grunt.registerTask('buildLocal', ['clean', 'copy:src', 'concat:dist', 'copy:jsql_plugin_local', 'jsql']);

    grunt.registerTask('dev', function () {
        grunt.task.run('buildLocal');
        grunt.task.run('open:dist');
        grunt.task.run('concurrent:watches');
    });

    grunt.registerTask('default', function () {
        grunt.task.run('buildDist');
        //grunt.task.run('open:dist');
    });

};