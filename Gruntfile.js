module.exports = function (grunt) {
    //project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        requirejs: {
            compile: {
                options: {
                    //baseUrl: 'angular-ui-router',
                    dir: 'dist/tamaleng',
                    modules: [{
                        name: 'main'
                    }],
                    removeCombined: true,
                    mainConfigFile: 'angularjs-demo/main.js'
                }
            },

        },//requirejs end

        clean: {
            dist: ['dist/**']
        },//clean end

    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean','requirejs']);
};
