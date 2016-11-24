module.exports = function (config) {
  config.set({
    basePath : '../',
    frameworks : ['jasmine'],
    files : [
      './spec/setup.js',
      './jpex/**/index.js',
      './jpex/**/!(index|main).js',
      './jpex/main.js',

      './spec/**/*.karma.js'
    ],
    reporters : ['progress', 'coverage'],
    preprocessors: {
    "jpex/**/*.js" : ['coverage']
    },
    port : 9876,
    colors : true,
    logLevel : config.LOG_INFO,
    autoWatch : false,
    browsers : ['PhantomJS'],
    singleRun : true,
    concurrency : Infinity
  });
};