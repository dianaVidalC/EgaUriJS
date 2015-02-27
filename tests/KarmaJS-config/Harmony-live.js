// Karma configuration
// Generated on Sun Feb 15 2015 00:44:37 GMT+0100 (Hora estándar romance)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "../../",


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha", "expect"],


    // list of files / patterns to load in the browser
    files: [
      { pattern: "tests/Harmony/script.js",       included: false, watched: true, served: true },
      { pattern: "tests/Harmony/sync-loading.js", included: false, watched: true, served: true },
      { pattern: "src/main/Harmony/EgaUri.js",    included: false, watched: true, served: true },
      { pattern: "src/main/Harmony/modules/*.js", included: false, watched: true, served: true },
      "tests/lib/traceur.js",
      "tests/lib/es6-module-loader.min.js",
      "tests/lib/system.min.js",
      "tests/lib/mocha.min.js",
      "tests/lib/chai.min.js",
      "tests/Harmony/karma-live.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["mocha"],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Chrome", "Firefox", "ChromeCanary"],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
