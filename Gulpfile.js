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
 *  Dependencies.
 */
var gulp       = require("gulp"),
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
    util       = require("gulp-util"),
    prompt     = require("gulp-prompt"),
    jeditor    = require("gulp-json-editor"),
    ts         = require("gulp-typescript"),
    coffee     = require("gulp-coffee"),
    filter     = require("gulp-filter"),
    tslint     = require("gulp-tslint"),
    coffeelint = require("gulp-coffeelint"),
    yargs      = require("yargs").argv,
    sprintf    = require("sprintf-js").sprintf,
    transform  = require("vinyl-transform"),
    browserify = require("browserify"),
    tsifier    = require("typescriptifier"),
    coffeeify  = require("coffeeify"),
    babelify   = require("babelify"),

    /*
     *  Stream filter based on file extension.
     */
    filterJavaScript   = filter(["*.js"]),
    filterTypeScript   = filter(["*.ts"]),
    filterCoffeeScript = filter(["*.coffee"]),


    /*____ Task notification data ____*/

    compressTaskTitle   = "Compression task finished.",
    compressTaskMessage = "All %s compiled files were successfully minified.",

    hintTaskTitle   = "Hint task finished.",
    hintTaskMessage = "%s files and its compiled result have been hinted using %s",

    cleanTaskTitle   = "Clean task finished.",
    cleanTaskMessage = "%s files were successfully cleaned (deleted).",

    compileTaskTitle   = "Compile task finished.",
    compileTaskMessage = "%s source files were successfully compiled/transpiled.",

    bundleTaskTitle   = "Bundle task finished.",
    bundleTaskMessage = "%s source files were successfully compiled/transpiled and bundled in a single one.",


    /*____ Tasks name declaration ____*/

    /*
     *  Hint task. Checks code syntax.
     */
    hintAllTask    = ["hint", "hint-all", "check", "check-all"],
    hintES6Task    = ["hint-es6", "hint-harmony", "check-es6", "check-harmony"],
    hintTSTask     = ["hint-ts", "hint-typescript", "check-ts", "check-typescript"],
    hintCoffeeTask = ["hint-coffee", "hint-coffeescript", "check-coffee", "check-coffeescript"],

    /*
     *  Compress task. Minifies compiled/transpiled code appending ".min" suffix to the new file.
     */
    compressAllTask    = ["compress", "compress-all", "minify", "minify-all", "optimize", "optimize-all"],
    compressES6Task    = ["compress-es6", "compress-harmony", "minify-es6", "minify-harmony", "optimize-es6", "optimize-harmony"],
    compressTSTask     = ["compress-ts", "compress-typescript", "minify-ts", "minify-typescript", "optimize-ts", "optimize-typescript"],
    compressCoffeeTask = ["compress-coffee", "compress-coffeescript", "minify-coffee", "minify-coffeescript", "optimize-coffee", "optimize-coffeescript"],

    /*
     *  Compile task. Compiles the code (Harmony, TypeScript or CoffeeScript) to ES3 (or ES5) compatible.
     */
    compileAllTask    = ["compile", "compile-all"],
    compileES6Task    = ["compile-es6", "compile-harmony"],
    compileTSTask     = ["compile-ts", "compile-typescript"],
    compileCoffeeTask = ["compile-coffee", "compile-coffeescript"],

    /*
     *  Clean task. Deletes the build files (compiled/transpiled).
     */
    cleanAllTask     = ["clean", "clean-all"],
    cleanES6Task     = ["clean-es6", "clean-harmony"],
    cleanTSTask      = ["clean-ts", "clean-typescript"],
    cleanCoffeeTask  = ["clean-coffee", "clean-coffeescript"],

    /*
     *  Bundle task. Bundles all compiled/transpiled files into a single one to do less HTTP requests.
     */
    bundleAllTask    = ["bundle", "bundle-all"],
    bundleES6Task    = ["bundle-es6", "bundle-harmony"],
    bundleTSTask     = ["bundle-ts", "bundle-typescript"],
    bundleCoffeeTask = ["bundle-coffee", "bundle-coffeescript"],

    /*
     *  Version task. Changes the version code declared in package.json and bower.json.
     */
    versionateTask = ["versionate"],

    /*
     *  Watch task. Watches for changes in the declared files.
     */
    watchAllTask    = ["watch", "watch-all", "observe", "observe-all"],
    watchES6Task    = ["watch-es6", "watch-harmony", "observe-es6", "observe-harmony"],
    watchTSTask     = ["watch-ts", "watch-typescript", "observe-ts", "observe-typescript"],
    watchCoffeeTask = ["watch-coffee", "watch-coffeescript", "observe-coffee", "observe-coffeescript"],


    /*____ Paths declaration ____*/

    /*
     *  Each block defines a new level of the file tree.
     */
    rootPath = "./",

    libraryName = "EgaUri",
    logfileName = "gulp-tasks.log",
    logfile     = rootPath + logfileName,
    pkg         = rootPath + "package.json",
    bwr         = rootPath + "bower.json",
    npmPkg      = require(pkg),
    bwrPkg      = require(bwr),

    sourcesPath = rootPath + "src/",
    testPath    = rootPath + "tests/",
    toolsPath   = rootPath + "tools/",

    buildPath = sourcesPath + "build/",
    mainPath  = sourcesPath + "main/",

    HarmonyBuildPath      = buildPath + "Harmony/",
    HarmonySourcesPath    = mainPath + "Harmony/",
    TypeScriptBuildPath   = buildPath + "TypeScript/",
    TypeScriptSourcesPath = mainPath + "TypeScript/",
    CoffeeBuildPath       = buildPath + "CoffeeScript/",
    CoffeeSourcesPath     = mainPath + "CoffeeScript/",

    HarmonySourceFile    = HarmonySourcesPath + libraryName + ".js",
    HarmonyBuildFile     = HarmonyBuildPath + libraryName + ".js",
    TypeScriptSourceFile = TypeScriptSourcesPath + libraryName + ".ts",
    TypeScriptBuildFile  = TypeScriptBuildPath + libraryName + ".ts",
    CoffeeSourceFile     = CoffeeSourcesPath + libraryName + ".coffee",
    CoffeeBuildFile      = CoffeeBuildPath + libraryName + ".coffee",


    /*____ File globs ____*/

    /*
     *  Hint task paths. Gets all JavaScript files under the build directory that are not compressed or bundled.
     *  Also it hints all the original source files (except minified files).
     */
    hintES6Path = [
      HarmonyBuildPath   + "*.js"   , "!" + HarmonyBuildPath   + "*.min.js"   , "!" + HarmonyBuildPath + "*.bundle.js",
      HarmonyBuildPath   + "**/*.js", "!" + HarmonyBuildPath   + "**/*.min.js",
      HarmonySourcesPath + "*.js"   , "!" + HarmonySourcesPath + "*.min.js",
      HarmonySourcesPath + "**/*.js", "!" + HarmonySourcesPath + "**/*.min.js"
    ],
    hintTSPath = [
      TypeScriptBuildPath   + "*.js"   , "!" + TypeScriptBuildPath   + "*.min.js",
      TypeScriptBuildPath   + "**/*.js", "!" + TypeScriptBuildPath   + "**/*.min.js",
      TypeScriptSourcesPath + "*.ts"   , "!" + TypeScriptSourcesPath + "*.min.ts"   , "!" + TypeScriptSourcesPath + "*.d.ts",
      TypeScriptSourcesPath + "**/*.ts", "!" + TypeScriptSourcesPath + "**/*.min.ts", "!" + TypeScriptSourcesPath + "**/*s.d.ts"
    ],
    hintCoffeePath = [
      CoffeeBuildPath   + "*.js"       , "!" + CoffeeBuildPath   + "*.min.js",
      CoffeeBuildPath   + "**/*.js"    , "!" + CoffeeBuildPath   + "**/*.min.js",
      CoffeeSourcesPath + "*.coffee"   , "!" + CoffeeSourcesPath + "*.min.coffee",
      CoffeeSourcesPath + "**/*.coffee", "!" + CoffeeSourcesPath + "**/*.min.coffee"
    ],

    /*
     *  Compress all JavaScript files under the build directory.
     */
    compressES6Path = [
      HarmonyBuildPath + "*.js"   , "!" + HarmonyBuildPath + "*.min.js",
      HarmonyBuildPath + "**/*.js", "!" + HarmonyBuildPath + "**/*.min.js"
    ],
    compressTSPath = [
      TypeScriptBuildPath + "*.js"   , "!" + TypeScriptBuildPath + "*.min.js",
      TypeScriptBuildPath + "**/*.js", "!" + TypeScriptBuildPath + "**/*.min.js"
    ],
    compressCoffeePath = [
      CoffeeBuildPath + "*.js"   , "!" + CoffeeBuildPath + "*.min.js",
      CoffeeBuildPath + "**/*.js", "!" + CoffeeBuildPath + "**/*.min.js"
    ],

    /*
     *  Paths for the source files to compile/transpile.
     */
    compileES6Path    = [HarmonySourceFile   , HarmonySourcesPath    + "**/*.js"],
    compileTSPath     = [TypeScriptSourceFile, TypeScriptSourcesPath + "**/*.ts"],
    compileCoffeePath = [CoffeeSourceFile    , CoffeeSourcesPath     + "**/*.coffee"],

    /*
     *  Files and directories to delete when cleaning the build directory.
     */
    cleanAllPath = [
      buildPath   + "**"         , sourcesPath + "**/*.min.js",
      sourcesPath + "**/*.min.ts", sourcesPath + "**/*.min.coffee"
    ],
    cleanES6Path    = [HarmonyBuildPath   , HarmonySourcesPath    + "*.min.js"],
    cleanTSPath     = [TypeScriptBuildPath, TypeScriptSourcesPath + "*.min.ts"],
    cleanCoffeePath = [CoffeeBuildPath    , CoffeeSourcesPath     + "*.min.coffee"],

    /*
     *  Files that contain the version number.
     */
    versionatePath = [pkg, bwr],

    /*
     *  Source's main file path to bundle.
     */
    bundleES6Path    = [HarmonySourceFile],
    bundleTSPath     = [TypeScriptSourceFile],
    bundleCoffeePath = [CoffeeSourceFile],


    /*____ Functions/Helpers declaration ____*/

    /*
     *  Sets an alias for an existing task.
     */
    _defineSimpleTask = function $TaskAlias (name, callback) {
      gulp.task(name, function () {
        gulp.run(callback);
      });
    },

    /*
     *  Clones an Array to avoid Array deletion when using _defineTask (because of Array#shift).
     */
    _clone = (function () {
      var result = [],
          len = 0,
          i = 0;
      return function $ArrayClone (array) {
        result = [];
        len = array.length;
        i = 0;
        for (; i < array.length; i++) {
          result.push(array[i]);
        }
        return result;
      }
    })(),

    /*
     *  Sets a task with multiple names using _defineSimpleTask.
     */
    _defineTask = (function () {
      var copy = [],
          task = "",
          len = 0,
          i = 0;
      return function $TaskRegister (names, callback) {
        if (typeof names === "string") {
          _defineTask(names.split(", "), callback);
          return;
        }
        copy = _clone(names);
        task = copy.shift(),
        len  = copy.length,
        i = 0;
        gulp.task(task, callback);
        for (; i < len; i++) {
          _defineSimpleTask(copy[i], task);
        }
      }
    })(),

    /*
     *  Wrapper to use gulp-plumber with file globs.
     */
    _plumber = (function () {
      var errorOcurred = false,
          error, gulpStream, stream;
      notify.on("click", function () {
        if (errorOcurred === true) {
          open(path.normalize(logfile))
        }
      });
      return function $PlumberWrapper (src, callback) {
        errorOcurred = false;
        error = notify.onError({
          onLast: true,
          wait: true,
          title: "Unexpected error.",
          message: function () {
            return "To see the full details click here to open " + logfileName + " file.";
          }
        });
        return function (cb) {
          gulpStream = gulp.src(src)
          .pipe(plumber({
              errorHandler: function (errno) {
                errorOcurred = true;
                stream = fs.createWriteStream(logfile);
                stream.once("open", function () {
                  stream.write(errno.stack || errno.message);
                  stream.end();
                });
                error.apply(this, arguments);
                this.emit("end");
              }
            }));
          return callback(cb, gulpStream);
        }
      }
    })();


/*________ Task declaration ________*/


/*____ Compress task ____*/

/*
 *  Minifies ALL JavaScript files under the build directory.
 */
_defineTask(compressAllTask, function () {
  gulp.run(compressES6Task[0]);
  gulp.run(compressTSTask[0]);
  gulp.run(compressCoffeeTask[0]);
});

/*
 *  Minifies ALL JavaScript files under the build/Harmony directory.
 */
_defineTask(compressES6Task, _plumber(compressES6Path, function (cb, gulpStream) {
  return gulpStream
    .pipe(rename({suffix: ".min"}))
    .pipe(uglify({ mangle: false }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(HarmonyBuildPath))
    .pipe(notify({
      onLast: true,
      title: compressTaskTitle,
      message: sprintf(compressTaskMessage, "ES6")
    }));
}));

/*
 *  Minifies ALL JavaScript files under the build/TypeScript directory.
 */
_defineTask(compressTSTask, _plumber(compressTSPath, function (cb, gulpStream) {
  return gulpStream
    .pipe(rename({suffix: ".min"}))
    .pipe(uglify({ mangle: false }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(TypeScriptBuildPath))
    .pipe(notify({
      onLast: true,
      title: compressTaskTitle,
      message: sprintf(compressTaskMessage, "TypeScript")
    }));
}));

/*
 *  Minifies ALL JavaScript files under the build/CoffeeScript directory.
 */
_defineTask(compressCoffeeTask, _plumber(compressCoffeePath, function (cb, gulpStream) {
  return gulpStream
    .pipe(rename({suffix: ".min"}))
    .pipe(uglify({ mangle: false }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(CoffeeBuildPath))
    .pipe(notify({
      onLast: true,
      title: compressTaskTitle,
      message: sprintf(compressTaskMessage, "CoffeeScript")
    }));
}));


/*____ Hint task ____*/

/*
 *  Hints (checks) all JavaScript files and its original sources files.
 */
_defineTask(hintAllTask, function () {
  gulp.run(hintES6Task[0]);
  gulp.run(hintTSTask[0]);
  gulp.run(hintCoffeeTask[0]);
});

/*
 *  Hints (checks) all Harmony-compiled files and its original sources files.
 */
_defineTask(hintES6Task, _plumber(hintES6Path, function (cb, gulpStream) {
  return gulpStream
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter("fail"))
    .pipe(notify({
      onLast: true,
      title: hintTaskTitle,
      message: sprintf(hintTaskMessage, "Harmony", "JSLint")
    }));
}));

/*
 *  Hints (checks) all TypeScript-compiled files and its original sources files.
 */
_defineTask(hintTSTask, _plumber(hintTSPath, function (cb, gulpStream) {
  return gulpStream
    .pipe(filterJavaScript)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter("fail"))
    .pipe(filterJavaScript.restore())
    .pipe(filterTypeScript)
    .pipe(tslint())
    .pipe(tslint.report("verbose"))
    .pipe(filterTypeScript.restore())
    .pipe(notify({
      onLast: true,
      title: hintTaskTitle,
      message: sprintf(hintTaskMessage, "TypeScript", "JSHint and TSLint")
    }));
}));

/*
 *  Hints (checks) all CoffeeScript-compiled files and its original sources files.
 */
_defineTask(hintCoffeeTask, _plumber(hintCoffeePath, function (cb, gulpStream) {
  return gulpStream
    .pipe(filterJavaScript)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter("fail"))
    .pipe(filterJavaScript.restore())
    .pipe(filterCoffeeScript)
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .pipe(coffeelint.reporter("fail"))
    .pipe(filterCoffeeScript.restore())
    .pipe(notify({
      onLast: true,
      title: hintTaskTitle,
      message: sprintf(hintTaskMessage, "CoffeeScript", "JSHint and CoffeeLint")
    }));
}));


/*____ Clean task ____*/

/*
 *  Deletes the whole build directory.
 */
_defineTask(cleanAllTask, _plumber(rootPath, function (cb, gulpStream) {
  del(cleanAllPath);
  return gulpStream
    .pipe(notify({
      onLast: true,
      title: cleanTaskTitle,
      message: sprintf(cleanTaskMessage, "Build")
    }));
}));

/*
 *  Deletes the whole build/Harmony directory.
 */
_defineTask(cleanES6Task, _plumber(rootPath, function (cb, gulpStream) {
  del(cleanES6Path);
  return gulpStream
    .pipe(notify({
      onLast: true,
      title: cleanTaskTitle,
      message: sprintf(cleanTaskMessage, "Harmony-compiled")
    }));
}));

/*
 *  Deletes the whole build/TypeScript directory.
 */
_defineTask(cleanTSTask, _plumber(rootPath, function (cb, gulpStream) {
  del(cleanTSPath);
  return gulpStream
  .pipe(notify({
      onLast: true,
      title: cleanTaskTitle,
      message: sprintf(cleanTaskMessage, "TypeScript-compiled")
    }));
}));

/*
 *  Deletes the whole build/CoffeeScript directory.
 */
_defineTask(cleanCoffeeTask, _plumber(rootPath, function (cb, gulpStream) {
  del(cleanCoffeePath);
  return gulpStream
    .pipe(notify({
      onLast: true,
      title: cleanTaskTitle,
      message: sprintf(cleanTaskMessage, "CoffeeScript-compiled")
    }));
}));


/*____ Compile task ____*/

/*
 *  Compiles all source files inside main directory and writes them on build directory.
 */
_defineTask(compileAllTask, function () {
  gulp.run(compileES6Task[0]);
  gulp.run(compileTSTask[0]);
  gulp.run(compileCoffeeTask[0]);
});

/*
 *  Compiles all source files inside main/Harmony directory and writes them on build/Harmony directory.
 */
_defineTask(compileES6Task, _plumber(compileES6Path, function (cb, gulpStream) {
  return gulpStream
    .pipe(sourcemaps.init())
    .pipe(babel({
      modules: "common"
    }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(HarmonyBuildPath))
    .pipe(notify({
      onLast: true,
      title: compileTaskTitle,
      message: sprintf(compileTaskMessage, "Harmony")
    }));
}));

/*
 *  Compiles all source files inside main/TypeScript directory and writes them on build/TypeScript directory.
 */
_defineTask(compileTSTask, _plumber(compileTSPath, function (cb, gulpStream) {
  return gulpStream
    .pipe(sourcemaps.init())
    .pipe(ts({
      module: yargs.modules || "commonjs"
    })).js
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(TypeScriptBuildPath))
    .pipe(notify({
      onLast: true,
      title: compileTaskTitle,
      message: sprintf(compileTaskMessage, "TypeScript")
    }));
}));

/*
 *  Compiles all source files inside main/CoffeeScript directory and writes them on build/CoffeeScript directory.
 */
_defineTask(compileCoffeeTask, _plumber(compileCoffeePath, function (cb, gulpStream) {
  return gulpStream
    .pipe(sourcemaps.init())
    .pipe(coffee({
      bare: yargs.bare || true
    }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(CoffeeBuildPath))
    .pipe(notify({
      onLast: true,
      title: compileTaskTitle,
      message: sprintf(compileTaskMessage, "CoffeeScript")
    }));
}));


/*____ Versionate task ____*/

/*
 *  Changes the version number in both config files (package.json and bower.json).
 */
_defineTask(versionateTask, _plumber(versionatePath, function (cb, gulpStream) {
  var stream = gulpStream
    .pipe(prompt.prompt({
      type: "input",
      name: "version",
      message: "Your version number in package.json and bower.json is " + npmPkg.version + " and " + bwrPkg.version + " respectively. Which is the new version number?"
    }, function (res) {
      stream
        .pipe(jeditor({
          "version": res.version
        }, {
          "indent_char": " ",
          "indent_size": 2
        }))
        .pipe(gulp.dest(rootPath));
    }));
  return stream;
}));


/*____ Watch task ____*/

/*
 *  Listens for changes in all files (Harmony, TypeScript, CoffeeScript).
 */
_defineTask(watchAllTask, function () {
  gulp.run(watchES6Task[0]);
  gulp.run(watchTSTask[0]);
  gulp.run(watchCoffeeTask[0]);
});

/*
 *  Watches for changes in all Harmony files and its compiled result.
 */
_defineTask(watchES6Task, function () {
  gulp.watch(HarmonySourceFile              , compileES6Task[0]);
  gulp.watch(HarmonySourcesPath + "/**/*.js", compileES6Task[0]);
  gulp.watch(HarmonyBuildFile               , compressES6Task[0]);
  gulp.watch(HarmonyBuildPath   + "/**/*.js", compressES6Task[0]);
});

/*
 *  Watches for changes in all TypeScript files and its compiled result.
 */
_defineTask(watchTSTask, function () {
  gulp.watch(TypeScriptSourceFile              , compileTSTask[0]);
  gulp.watch(TypeScriptSourcesPath + "/**/*.js", compileTSTask[0]);
  gulp.watch(TypeScriptBuildFile               , compressTSTask[0]);
  gulp.watch(TypeScriptBuildPath   + "/**/*.js", compressTSTask[0]);
});

/*
 *  Watches for changes in all CoffeeScript files and its compiled result.
 */
_defineTask(watchTSTask, function () {
  gulp.watch(CoffeeSourceFile              , compileCoffeeTask[0]);
  gulp.watch(CoffeeSourcesPath + "/**/*.js", compileCoffeeTask[0]);
  gulp.watch(CoffeeBuildFile               , compressCoffeeTask[0]);
  gulp.watch(CoffeeBuildPath   + "/**/*.js", compressCoffeeTask[0]);
});


/*____ Bundle task ____*/

/*
 *  Bundles all Harmony files in a single one.
 */
_defineTask(bundleES6Task, _plumber(bundleES6Path, function (cb, gulpStream) {
  var browser = browserify({
        extensions: [".js"],
        debug: true
      }).transform(babelify),
      bundler = transform(function (filename) {
        return browser
          .add(filename)
          .bundle();
      });
  return gulpStream
  .pipe(bundler)
  .pipe(rename({ suffix: ".bundle", extname: ".js" }))
  .pipe(gulp.dest(HarmonyBuildPath))
  .pipe(notify({
      onLast: true,
      title: bundleTaskTitle,
      message: sprintf(compileTaskMessage, "Harmony")
    }));
}));

/*
 *  Bundles all TypeScript files in a single one.
 */
_defineTask(bundleTSTask, _plumber(bundleTSPath, function (cb, gulpStream) {
  var browser = browserify({
        extensions: [".ts"],
        debug: true
      }).transform(tsifier),
      bundler = transform(function (filename) {
        return browser
          .add(filename)
          .bundle();
      });
  return gulpStream
    .pipe(bundler)
    .pipe(rename({ suffix: ".bundle", extname: ".js" }))
    .pipe(gulp.dest(TypeScriptBuildPath))
    .pipe(notify({
      onLast: true,
      title: bundleTaskTitle,
      message: sprintf(compileTaskMessage, "TypeScript")
    }));
}));

/*
 *  Bundles all CoffeeScript files in a single one.
 */
_defineTask(bundleCoffeeTask, _plumber(bundleCoffeePath, function (cb, gulpStream) {
  var browser = browserify({
        extensions: [".coffee"],
        debug: true
      }).transform(coffeeify),
      bundler = transform(function (filename) {
        return browser
          .add(filename)
          .bundle();
      });
  return gulpStream
    .pipe(bundler)
    .pipe(rename({ suffix: ".bundle", extname: ".js" }))
    .pipe(gulp.dest(CoffeeBuildPath))
    .pipe(notify({
      onLast: true,
      title: bundleTaskTitle,
      message: sprintf(compileTaskMessage, "CoffeeScript")
    }));
}));