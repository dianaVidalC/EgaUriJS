/*
 *  Copyright (C) 2015 EgaTuts & Esaú García Sánchez-Torija.
 *  This file is part of the program EgaUriJS <https://github.com/Egatuts/EgaUriJS/>.
 *
 *  EgaUriJS is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  EgaUriJS is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License along
 *  with this program; if not, write to the Free Software Foundation, Inc.,
 *  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
"use strict";

/*
 *  Imports, dependencies, config files and other stuff.
 */
var gulp     = require("gulp"),
  rename     = require("gulp-rename"),
  uglify     = require("gulp-uglify"),
  beautify   = require("gulp-beautify"),
  notify     = require("gulp-notify"),
  open       = require("open"),
  plumber    = require("gulp-plumber"),
  fs         = require("fs"),
  path       = require("path"),
  jshint     = require("gulp-jshint"),
  stylish    = require("jshint-stylish"),
  sequence   = require("run-sequence"),
  babel      = require("gulp-babel"),
  del        = require("del"),
  sourcemaps = require("gulp-sourcemaps"),
  browserify = require("browserify"),
  source     = require("vinyl-source-stream"),
  buffer     = require("vinyl-buffer"),
  to5ify     = require('6to5ify'),
  util       = require('gulp-util');

/*
 *  Logic variables, paths and other cool stuff.
 */
var hintTask    = ["hint", "check"],
  lintTask      = ["lint", "beautify", "indent", "prettify"],
  compressTask  = ["compress", "minify"],
  transpileTask = ["transpile"],
  browserTask   = ["browserify", "browser-support"],
  cleanTask     = ["clean"],
  watchTask     = ["watch", "observe"],

  logfile     = "gulp-tasks.log",
  fileName    = "EgaUri",
  buildPath   = "./src/build",
  browserPath = buildPath + "/browser",
  mainPath    = "./src/main",
  modulesPath = mainPath + "/modules/",

  buildFile   = buildPath + "/" + fileName + ".js",
  mainFile    = mainPath + "/" + fileName + ".js",
  browserFile = browserPath + "/" + fileName + ".js";

/*
 *  Defines another name for the same task.
 */
var defineSimpleTask = function (name, callback) {
    gulp.task(name, function () {
      gulp.run(callback);
    });
  },

/*
 *  Defines a task with multiple names.
 */
  defineTask = function (names, callback) {
    if (typeof names === "string") {
      defineTask(names.split(", "), callback);
      return;
    }
    var task = names.shift(),
      i = 0;
    gulp.task(task, callback);
    for (; i < names.length; i++) {
      defineSimpleTask(names[i], task);
    }
  },

  _clone = function (array) {
    var result = [], i = 0;
    for (; i < array.length; i++) {
      result.push(array[i]);
    }
    return result;
  },

  compressRatio = function (original, compress, accuracy) {
    var power = Math.pow(10, accuracy),
      ratio   = (compress / original * power | 0) / power;
    return ratio;
  },

  toPercent = function (ratio, accuracy) {
    var power = Math.pow(10, accuracy),
      percent = (ratio * 100 * power | 0) / power;
    return percent;
  };

/*_______ Ignore this _______*/

/*
 *  This is a hardcoded task definition to recognise the defined tasks.
 *  YOU MUST UNCOMMENT AND UPDATE THIS IF YOU MODIFIED THE NAMES OF
 *  THE TASKS AND YOUR IDE DOESN'T RECOGNISE THEM IN ORDER TO MAKE
 *  THEM APPEAR ON THE GULP TASKS WINDOW VIEW
 */
//gulp.task("hint");
//gulp.task("check");
//gulp.task("lint");
//gulp.task("beautify");
//gulp.task("indent");
//gulp.task("prettify");
//gulp.task("compress");
//gulp.task("minify");
//gulp.task("compile");
//gulp.task("build");
//gulp.task("watch");
//gulp.task("observe");

/*_______ Ignore this _______*/


/*_______ Here starts task's definitions _______*/
var _plumber = function (src, callback) {
  return function (cb) {
    var errorOcurred = false,
      error = notify.onError({
        onLast: true,
        wait: true,
        title: "Unexpected error.",
        message: function () {
          return "To see the full details click here to open " + logfile + " file.";
        }
      });
    notify.on("click", function () {
      if (errorOcurred) {
        open(path.normalize("./" + logfile))
      }
    });
    var gulpStream = gulp.src(src)
      .pipe(plumber({
        errorHandler: function (errno) {
          errorOcurred = true;
          var stream = fs.createWriteStream(logfile);
          stream.once("open", function () {
            stream.write(errno.stack || errno.message);
            stream.end();
          });
          error.apply(this, arguments);
          this.emit("end");
        }
      }));
    return callback(cb, gulpStream);
  };
};

/*
 *  Compresses the result build file.
 *  Original name must be "EgaUri.js" and result name will be "EgaUri.min.js".
 */
defineTask(_clone(compressTask), _plumber([buildPath + "/*.js", "!" + buildPath + "/*.min.js", buildPath + "/**/*.js", "!" + buildPath + "/**/*.min.js"], function (cb, gulpStream) {
  return gulpStream
    .pipe(rename({suffix: ".min"}))
    .pipe(uglify({ mangle: false }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(buildPath))
    .pipe(notify({
      onLast: true,
      title: "Minification finished.",
      message: "Now you can use the minified files."
    }));
}));

/*
 *  Hints all JavaScript files to detect syntax errors.
 *  It does not make a unit testing; execute "test" task to do that.
 */
defineTask(_clone(hintTask), _plumber([modulesPath + "/*.js", mainPath + "*.js", buildFile], function (cb, gulpStream) {
  return gulpStream
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter("fail"))
    .pipe(plumber.stop())
    .pipe(notify({
      onLast: true,
      title: "JavaScript hint finished.",
      message: "ES6 and ES5 versions has been hinted with jshint."
    }));
}));

/*
 *  This will remove all the files inside src/build directory to allow recompilation.
 */
defineTask(_clone(cleanTask), _plumber("./", function (cb, gulpStream) {
  del([
    buildPath + "/**",
    "./src/**/*.min.js"
  ]);
  return gulpStream
    .pipe(notify({
      onLast: true,
      title: "Project cleaned.",
      message: "Now you can recompile all the sources."
    }));
}));

/*
 *  This will compile all the modules into one file and
 *  then export them to ES5 compatible syntax.
 */
defineTask(_clone(transpileTask), _plumber([mainFile, mainPath + "/**/*.js"], function (cb, gulpStream) {
  return gulpStream
    .pipe(sourcemaps.init())
    .pipe(babel({
      modules: "common"
    }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(buildPath))
    .pipe(notify({
      onLast: true,
      title: "Project transpiled.",
      message: "Now you can compress the transpiled result and use the source maps."
    }));
}));

/*
 *  This will re-transpile the ES6 code adding 6to5 polyfills and browserify code.
 */
defineTask(browserTask, function () {
  browserify(buildFile, { debug: true })
    .bundle()
    .on('error', util.log.bind(util, 'Browserify Error'))
    .pipe(source(fileName + ".js"))
    .pipe(buffer())
    .pipe(gulp.dest(browserPath))
    .pipe(notify({
      onLast: true,
      title: "Project browserified.",
      message: "Now you can use the library in a web browser with ES5 compatibility."
    }));
});

/*
 *  This will watch for changes in all modules files to execute "compile" task.
 *  Also, it will watch for changes into the bundled file to execute "compress" task.
 */
defineTask(_clone(watchTask), function () {
  gulp.watch(mainFile, [transpileTask[0]]);
  gulp.watch(modulesPath + "/*.js", [transpileTask[0]]);
  gulp.watch(buildFile, [browserTask[0]]);
});