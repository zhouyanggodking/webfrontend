/**
 * ver 1.1: modified by yxzhang 12/08/2015
 *      add 'grunt dev' task for run the server only without watching file changes for build or testing
 *      fix some syntax error by removing unnecessary comma
 */


module.exports = function (grunt) {

    //project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jasmine: {
            options: {
                keepRunner: true,
                specs: [
                    'build/**/*Test.js'
                ],
                template: require('grunt-template-jasmine-requirejs'),
                templateOptions: {
                    //requireConfigFile: './src/main.js',
                    //requireConfig: {
                    //    baseUrl: './'
                    //}
                },

            },
            app: {
            }
        },//jasmine end        

        copy: {
            app: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: 'third-party-lib',
                    dest: 'build',
                    filter: 'isFile'
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['jasmine']);

   
};
