'use strict';

var copyAssets = function copyAssets() {
  var ASSETS = process.env.APP_SRC + config.buildEnv.ASSETS_DIR + process.env.APP_SUFIX;
  var ASSETS_DIR = process.env.APP_DIR + '/' + process.env.APP_NAME + config.buildEnv.ASSETS_DIR;
  var ASSETS_DEV = config.buildEnv.DEV_DIR  + ASSETS_DIR;
  var ASSETS_TEMP = config.buildEnv.TEMP_DIR  + ASSETS_DIR;

  return config.gulp.src(ASSETS)
  .pipe(config.gulp.dest(ASSETS_DEV))
  .pipe(config.gulp.dest(ASSETS_TEMP));
};

config.gulp.task('copyAssets', copyAssets);