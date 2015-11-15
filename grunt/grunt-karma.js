﻿/** 
    My job is to kick off various Karma unit test runner tasks
*/
module.exports = function (grunt) {

    var basePath = '';

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    var frameworks = ['jasmine'];

    // list of files / patterns to load in the browser
    var src = [

    ];

    var files = [
    ];

    // list of files to exclude
    var exclude = [
        'app/tests/specs/*.js',
        'js/concat.js'
    ];

    var preprocessors = {
        'js/**/*.html': ['ng-html2js']
    };

    var coveragePreprocessors = {
        'js/**/*.html': ['ng-html2js'],
        'js/**/*.js': ['coverage']
    }

    //https://github.com/karma-runner/karma-ng-html2js-preprocessor
    var ngHtml2JsPreprocessor = {
        prependPrefix: 'app/',
        moduleName: 'test_templates'
    };

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    var reporters = ['progress'];

    // web server port
    var port = 9876;

    // enable / disable colors in the output (reporters and logs)
    var colors = true;

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    var logLevel = 'INFO';

    var config = {

        //Task to run Karma tests using PhantomJS - runs one time
        unit: {

            basePath: basePath,
            frameworks: frameworks,
            src: src,
            files: files,
            exclude: exclude,
            preprocessors: preprocessors,
            ngHtml2JsPreprocessor: ngHtml2JsPreprocessor,
            reporters: reporters,
            port: port,
            colors: colors,
            logLevel: logLevel,

            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: true,

            // start these browsers
            // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
            // use PhantomJS for a 'silent' run
            //browsers: ['Chrome'],
            browsers: ['PhantomJS'],

            // Continuous Integration mode
            // if true, Karma captures browsers, runs the tests and exits
            singleRun: true
        },

        //Task to run Karma tests using Chrome - runs continuously
        chrome: {
            basePath: basePath,
            frameworks: frameworks,
            src: src,
            files: files,
            exclude: exclude,
            preprocessors: preprocessors,
            ngHtml2JsPreprocessor: ngHtml2JsPreprocessor,
            reporters: reporters,
            port: port,
            colors: colors,
            logLevel: logLevel,

            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: true,

            // start these browsers
            // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
            // use PhantomJS for a 'silent' run
            browsers: ['Chrome'],

            // Continuous Integration mode
            // if true, Karma captures browsers, runs the tests and exits
            singleRun: false
        },

        //Task to produce Karma coverage report using PhantomJS - runs one time
        coverage: {
            basePath: basePath,
            frameworks: frameworks,
            src: src,
            files: files,
            // list of files to exclude
            exclude: [
                'tests/*.js'
            ],

            // preprocess matching files before serving them to the browser
            // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
            preprocessors: coveragePreprocessors,

            ngHtml2JsPreprocessor: ngHtml2JsPreprocessor,
            // test results reporter to use
            // possible values: 'dots', 'progress'
            // available reporters: https://npmjs.org/browse/keyword/karma-reporter
            reporters: ['progress', 'coverage'],

            coverageReporter: {
                type: 'html',
                dir: 'tests/coverage/',
                file: 'coverage.html'
            },

            junitReporter: {
                outputFile: 'test-results.xml'
            },

            port: port,
            colors: colors,
            logLevel: logLevel,

            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: true,

            // start these browsers
            // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
            // use PhantomJS for a 'silent' run
            browsers: ['PhantomJS'],

            // Continuous Integration mode
            // if true, Karma captures browsers, runs the tests and exits
            singleRun: true
        }

    }

    return config;
};

