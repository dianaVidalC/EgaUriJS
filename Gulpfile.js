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
  notify     = require("gulp-notify"),
  open       = require("open"),
  plumber    = require("gulp-plumber"),
  fs         = require("fs"),
  path       = require("path"),
  jshint     = require("gulp-jshint"),
  stylish    = require("jshint-stylish"),
  babel      = require("gulp-babel"),
  del        = require("del"),
  sourcemaps = require("gulp-sourcemaps"),
  browserify = require("browserify"),
  source     = require("vinyl-source-stream"),
  buffer     = require("vinyl-buffer"),
  util       = require("gulp-util"),
  prompt     = require("gulp-prompt"),
  jeditor    = require("gulp-json-editor"),
  ts         = require("gulp-typescript");

/*
 *  Logic variables, paths and other cool stuff.
 */
var hintTask     = ["hint", "check"],

  compressAllTask  = ["compress", "compress-all", "minify", "minify-all", "optimize", "optimize-all"],
  compressES6Task  = ["compress-es6", "compress-harmony", "minify-es6", "minify-harmony", "optimize-es6", "optimize-harmony"],
  compressTSTask   = ["compress-ts", "compress-typescript", "minify-ts", "minify-typescript", "optimize-ts", "optimize-typescript"],
  compressDartTask = ["compress-dart", "minify-dart", "optimize-dart"],

  compileAllTask  = ["compile", "compile-all"],
  compileES6Task  = ["compile-es6", "compile-harmony"],
  compileTSTask   = ["compile-ts", "compile-typescript"],
  compileDartTask = ["compile-dart"],

  browserTask    = ["browserify", "browser-support"],

  cleanAllTask   = ["clean", "clean-all"],
  cleanES6Task   = ["clean-es6", "clean-harmony"],
  cleanTSTask    = ["clean-ts", "clean-typescript"],
  cleanDartTask  = ["clean-dart"],

  versionTask    = ["versionate"],
  watchTask      = ["watch", "observe"],

  logfile     = "gulp-tasks.log",
  browserPath = buildPath + "/browser",
  modulesPath = mainPath + "/modules/";

  var rootPath = "./",
  libraryName = "EgaUri",
  libraryFile = libraryName + ".js",

  sourcesPath = rootPath + "src",
  testPath    = rootPath + "tests",
  toolsPath   = rootPath + "tools",

  buildPath = sourcesPath + "/build",
  mainPath  = sourcesPath + "/main",

  HarmonyBuildPath      = buildPath + "/Harmony",
  HarmonySourcesPath    = mainPath + "/Harmony",
  TypeScriptBuildPath   = buildPath + "/TypeScript",
  TypeScriptSourcesPath = mainPath + "/TypeScript",
  DartBuildPath         = buildPath + "/Dart",
  DartSourcesPath       = mainPath + "/Dart",

  HarmonySourceFile    = HarmonySourcesPath + "/" + libraryFile,
  //HarmonyBuildFile     = HarmonyBuildPath + "/" + libraryFile,
  TypeScriptSourceFile = TypeScriptSourcesPath + "/" + libraryName + ".ts",
  //TypeScriptBuildFile  = TypeScriptBuildPath + "/" + libraryName + ".ts",
  DartSourceFile       = DartSourcesPath + "/" + libraryName + ".dart",
  //DartBuildFile        = DartBuildPath + "/" + libraryName + ".dart",

  compressES6Path = [HarmonyBuildPath + "/*.js", "!" + HarmonyBuildPath + "/*.min.js", HarmonyBuildPath + "/**/*.js", "!" + HarmonyBuildPath + "/**/*.min.js"],

  compileES6Path  = [HarmonySourceFile, HarmonySourcesPath + "/**/*.js"],
  compileTSPath   = [TypeScriptSourceFile, TypeScriptSourcesPath + "/**/*.ts"],
  //compileDartPath = [DartSourceFile, DartSourcesPath + "/**/*.js"],

  cleanAllPath  = [buildPath + "/**", sourcesPath + "/**/*.min.js", sourcesPath + "/**/*.min.ts", sourcesPath + "/**/*.min.dart"],
  cleanES6Path  = [HarmonyBuildPath, HarmonySourcesPath + "/*.min.js"],
  cleanTSPath   = [TypeScriptBuildPath, TypeScriptSourcesPath + "/*.min.ts"],
  cleanDartPath = [DartBuildPath, DartSourcesPath + "/*.min.dart"];

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



//===================================================================================================================================================================================

/*
 *  Compress the compiled files.
 *  Original name must be "EgaUri.js" and result name will be "EgaUri.min.js".
 */
//defineTask(_clone(compressTask), _plumber([buildPath + "/*.js", "!" + buildPath + "/*.min.js", buildPath + "/**/*.js", "!" + buildPath + "/**/*.min.js"], function (cb, gulpStream) {
  /*return gulpStream
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
 *  Compress all HARMONY files (compiled).
 */
defineTask(_clone(compressES6Task), _plumber(compressES6Path, function (cb, gulpStream) {
  return gulpStream
    .pipe(rename({suffix: ".min"}))
    .pipe(uglify({ mangle: false }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(HarmonyBuildPath))
    .pipe(notify({
      onLast: true,
      title: "Compression finished.",
      message: "Now you can use the all compressed files (HARMONY)."
    }));
}));

//===================================================================================================================================================================================



/*
 *  Hints all JavaScript files to detect syntax errors.
 *  It does not make a unit testing; execute "test" task to do that.
 */
/*defineTask(_clone(hintTask), _plumber([modulesPath + "/*.js", mainPath + "*.js", buildFile], function (cb, gulpStream) {
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
}));*/



//===================================================================================

/*
 *  This will remove ALL the files inside src/build directory to allow recompilation.
 */
defineTask(_clone(cleanAllTask), _plumber("./", function (cb, gulpStream) {
  del(cleanAllPath);
  return gulpStream
    .pipe(notify({
      onLast: true,
      title: "Project cleaned.",
      message: "Now you can recompile ALL the sources."
    }));
}));

/*
 *  This will remove all HARMONY files inside src/build directory to allow recompilation.
 */
defineTask(_clone(cleanES6Task), _plumber("./", function (cb, gulpStream) {
  del(cleanES6Path);
  return gulpStream
  .pipe(notify({
      onLast: true,
      title: "Project cleaned.",
      message: "Now you can recompile your HARMONY sources."
    }));
}));

/*
 *  This will remove all TYPESCRIPT files inside src/build directory to allow recompilation.
 */
defineTask(_clone(cleanTSTask), _plumber("./", function (cb, gulpStream) {
  del(cleanTSPath);
  return gulpStream
  .pipe(notify({
      onLast: true,
      title: "Project cleaned.",
      message: "Now you can recompile your TYPESCRIPT sources."
    }));
}));

/*
 *  This will remove all DART files inside src/build directory to allow recompilation.
 */
defineTask(_clone(cleanDartTask), _plumber("./", function (cb, gulpStream) {
  del(cleanDartPath);
  return gulpStream
  .pipe(notify({
      onLast: true,
      title: "Project cleaned.",
      message: "Now you can recompile your DART sources."
    }));
}));

//===================================================================================



//=======================================================================================================

/*
 *  This will compile all the HARMONY modules to ES5 syntax.
 */
defineTask(_clone(compileES6Task), _plumber(compileES6Path, function (cb, gulpStream) {
  return gulpStream
  .pipe(sourcemaps.init())
  .pipe(babel({
      modules: "common"
    }))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(HarmonyBuildPath))
  .pipe(notify({
      onLast: true,
      title: "Project compiled (HARMONY).",
      message: "Now you can compress all HARMONY compiled sources and use its source maps."
    }));
}));

/*
 *  This will compile all the TYPESCRIPT modules to ES3 syntax.
 */
defineTask(_clone(compileTSTask), _plumber(compileTSPath, function (cb, gulpStream) {
  var tsResult = gulpStream
  .pipe(sourcemaps.init())
  .pipe(ts({
      module: "commonjs"
    }));

  return tsResult.js.pipe(sourcemaps.write("."))
    .pipe(gulp.dest(TypeScriptBuildPath))
    .pipe(notify({
      onLast: true,
      title: "Project compiled (TYPESCRIPT).",
      message: "Now you can compress all TYPESCRIPT compiled sources and use its source maps."
    }));
}));

/*
 *  This will compile all the DART modules to ES3 syntax.
 */
/*defineTask(_clone(compileDartTask), _plumber(compileDartPath, function (cb, gulpStream) {
  return gulpStream
  .pipe(sourcemaps.init())
  .pipe(babel({
      modules: "common"
    }))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(buildPath))
  .pipe(notify({
      onLast: true,
      title: "Project compiled (DART).",
      message: "Now you can compress all DART compiled sources and use its source maps."
    }));
}));*/

//=======================================================================================================

/*
 *  This will re-transpile the ES6 code adding 6to5 polyfills and browserify code.
 */
/*defineTask(browserTask, function () {
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
});*/

/*
 *  This will change the version code of all the JSON files (package.json and bower.json).
 */
/*defineTask(versionTask, function () {
  var npmPackage = require("./package.json"),
    bowerPackage = require("./bower.json"),
    stream = gulp.src(["./package.json", "./bower.json"])
      .pipe(prompt.prompt({
        type: "input",
        name: "version",
        message: "Your version number in package.json and bower.json is " + npmPackage.version + " and " + bowerPackage.version + " respectively. Which is the new version number?"
      }, function (res) {
        stream
          .pipe(jeditor({
            "version": res.version
          }, {
            "indent_char": " ",
            "indent_size": 2
          }))
          .pipe(gulp.dest("."));
      }));
});*/

/*
 *  This will watch for changes in all modules files to execute "compile" task.
 *  Also, it will watch for changes into the bundled file to execute "compress" task.
 */
/*defineTask(_clone(watchTask), function () {
  gulp.watch(mainFile, [transpileTask[0]]);
  gulp.watch(modulesPath + "/*.js", [transpileTask[0]]);
  gulp.watch(buildFile, [browserTask[0]]);
});*/