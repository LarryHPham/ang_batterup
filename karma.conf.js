
module.exports = function(config) {
    config.set({

        basePath: '.',

        frameworks: ['jasmine'],

        files: [
            // paths loaded by Karma
            {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},
            {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
            {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/http.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
            {pattern: 'karma-test-shim.js', included: true, watched: true},

            // paths loaded via module imports
            {pattern: 'dist/**/*.js', included: false, watched: true},

            // paths to support debugging with source maps in dev tools
            {pattern: 'app/**/*.ts', included: false, watched: false},
            {pattern: 'app/**/*.spec.ts', included: false, watched: false},
            {pattern: 'dist/**/*.js.map', included: false, watched: false}
        ],

        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            '/app/': '/base/app/'
        },

        port: 9876,

        logLevel: config.LOG_INFO,

        colors: true,

        autoWatch: true,

        browsers: ['Chrome'],

        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-spec-reporter'
        ],

        client: {
            captureConsole: true,
            clearContext: false
        },

        // 'coverage' reporter generates the coverage
        reporters: ['spec'],

        // Source files that you want to generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        // preprocessors: {
        //     'dist/**/!(*spec).js': ['coverage']
        // },

        // coverageReporter: {
        //     reporters:[
        //         {type: 'json', subdir: '.', file: 'coverage-final.json'}
        //     ]
        // },

        singleRun: true 
    });
};