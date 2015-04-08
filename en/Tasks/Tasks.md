Using Gulp (Streaming Build System) you can access all tasks by typing `gulp`. All tasks are defined inside the file `Gulpfile.js`. Below you can see all task definition, its alias and its arguments (if needed).

### How can I know which tasks are available?
 Si deseas saber las tareas que puedes ejecutar, siempre tienes a tu disposición esta wiki donde podrás verlas. Por otra parte, puedes obtener una lista completa usando un sencillo comando:

     gulp --tasks

### `gulp` is not recognized.
If you got the next error when you execute any `gulp` command you can solve it easily by following these steps:

    ## Git Bash
    sh.exe": gulp: command not found

    ## cmd.exe
    "gulp" is not recognized as an internal or external command, operable program or batch file.

If you want to make the `gulp` command global you have to specify it using the `--global` or `-g` flag:

    npm install -g gulp

Otherwise you can use the *Shell Script* `tools/task.sh` to view the list (no arguments required) or a name indicating the task to execute:

    <NOMBRE_DE_USUARIO>@<NOMBRE_DEL_ORDENADOR> ~/<TU_RUTA>/EgaUriJS/tools (master)
    $ task
    [hh:mm:ss] Working directory changed to c:\<TU_RUTA>\EgaUriJS
    [hh:mm:ss] Using gulpfile c:\<TU_RUTA>\EgaUriJS\Gulpfile.js
    [hh:mm:ss] Tasks for c:\<TU_RUTA>\EgaUriJS\Gulpfile.js
    [hh:mm:ss] ??? compress
    [hh:mm:ss] ??? compress-all
    [hh:mm:ss] ??? minify
    [hh:mm:ss] ??? minify-all
    [hh:mm:ss] ??? optimize
    [hh:mm:ss] ??? optimize-all
    [hh:mm:ss] ??? compress-es6
    [hh:mm:ss] ??? compress-harmony
    [hh:mm:ss] ??? minify-es6
    [hh:mm:ss] ??? minify-harmony
    [hh:mm:ss] ??? optimize-es6
    [hh:mm:ss] ??? optimize-harmony
    [hh:mm:ss] ??? compress-ts
    [hh:mm:ss] ??? compress-typescript
    [hh:mm:ss] ??? minify-ts
    [hh:mm:ss] ??? minify-typescript
    [hh:mm:ss] ??? optimize-ts
    [hh:mm:ss] ??? optimize-typescript
    [hh:mm:ss] ??? compress-coffee
    [hh:mm:ss] ??? compress-coffeescript
    [hh:mm:ss] ??? minify-coffee
    [hh:mm:ss] ??? minify-coffeescript
    [hh:mm:ss] ??? optimize-coffee
    [hh:mm:ss] ??? optimize-coffeescript
    [hh:mm:ss] ??? hint
    [hh:mm:ss] ??? hint-all
    [hh:mm:ss] ??? check
    [hh:mm:ss] ??? check-all
    [hh:mm:ss] ??? hint-es6
    [hh:mm:ss] ??? hint-harmony
    [hh:mm:ss] ??? check-es6
    [hh:mm:ss] ??? check-harmony
    [hh:mm:ss] ??? hint-ts
    [hh:mm:ss] ??? hint-typescript
    [hh:mm:ss] ??? check-ts
    [hh:mm:ss] ??? check-typescript
    [hh:mm:ss] ??? hint-coffee
    [hh:mm:ss] ??? hint-coffeescript
    [hh:mm:ss] ??? check-coffee
    [hh:mm:ss] ??? check-coffeescript
    [hh:mm:ss] ??? clean
    [hh:mm:ss] ??? clean-all
    [hh:mm:ss] ??? clean-es6
    [hh:mm:ss] ??? clean-harmony
    [hh:mm:ss] ??? clean-ts
    [hh:mm:ss] ??? clean-typescript
    [hh:mm:ss] ??? clean-coffee
    [hh:mm:ss] ??? clean-coffeescript
    [hh:mm:ss] ??? compile
    [hh:mm:ss] ??? compile-all
    [hh:mm:ss] ??? compile-es6
    [hh:mm:ss] ??? compile-harmony
    [hh:mm:ss] ??? compile-ts
    [hh:mm:ss] ??? compile-typescript
    [hh:mm:ss] ??? compile-coffee
    [hh:mm:ss] ??? compile-coffeescript
    [hh:mm:ss] ??? versionate
    [hh:mm:ss] ??? commit
    [hh:mm:ss] ??? release
    [hh:mm:ss] ??? push
    [hh:mm:ss] ??? push-all
    [hh:mm:ss] ??? push-master
    [hh:mm:ss] ??? push-main
    [hh:mm:ss] ??? push-wiki
    [hh:mm:ss] ??? push-wiki-branch
    [hh:mm:ss] ??? watch
    [hh:mm:ss] ??? watch-all
    [hh:mm:ss] ??? observe
    [hh:mm:ss] ??? observe-all
    [hh:mm:ss] ??? watch-es6
    [hh:mm:ss] ??? watch-harmony
    [hh:mm:ss] ??? observe-es6
    [hh:mm:ss] ??? observe-harmony
    [hh:mm:ss] ??? watch-ts
    [hh:mm:ss] ??? watch-typescript
    [hh:mm:ss] ??? observe-ts
    [hh:mm:ss] ??? observe-typescript
    [hh:mm:ss] ??? watch-coffee
    [hh:mm:ss] ??? watch-coffeescript
    [hh:mm:ss] ??? observe-coffee
    [hh:mm:ss] ??? observe-coffeescript
    [hh:mm:ss] ??? bundle-es6
    [hh:mm:ss] ??? bundle-harmony
    [hh:mm:ss] ??? bundle-ts
    [hh:mm:ss] ??? bundle-typescript
    [hh:mm:ss] ??? bundle-coffee
    [hh:mm:ss] ??? bundle-coffeescript

To obtain more information about those commands or Shell Scripts see [Commands][1] section.

## Task definition.
The definition of a task has 5 different parts:
* Task name: Original name of the task that executes directly the task.
* Task alias: Set of secondary names to execute the same task. It's defined between parenthesis and it's slower than executing the task with its original name.
* Dependencies: Set of dependencies needed to execute the task.
* Arguments: Extra flags or data needed to execute (or modify the behaviour of) the task.
* Description: A brief explanation of what does.

### bundle (bundle-all)
Dependencies: No.
Arguments: No.
Description: Runs the tasks **[bundle-coffee][2]**, **[bundle-es6][3]** and **[bundle-ts][4]** consecutively.

### bundle-coffee (bundle-coffeescript)
Dependencies: [browserify][5], [coffeeify][6], [vinyl-transform][7], [gulp-rename][8], [gulp-notify][9].
Arguments: No.
Description: Bundles all CoffeeScript files, located at `src/main/CoffeeScript`.

### bundle-es6 (bundle-harmony)
Dependencies: [browserify][5], [babelify][10], [vinyl-transform][7], [gulp-rename][8], [gulp-notify][9].
Arguments: No.
Description: Bundles all Harmony files, located at `src/main/Harmony`.

### bundle-ts (bundle-typescript)
Dependencies: [browserify][5], [typescriptifier][11], [vinyl-transform][7], [gulp-rename][8], [gulp-notify][9].
Arguments: No.
Description: Bundles all TypeScript files, located at `src/main/TypeScript`.

### clean (clean-all)
Dependencies: [del][12], [gulp-notify][9].
Arguments: No.
Description: Cleans the folder `src/build`.

### clean-coffee (clean-coffeescript)
Dependencies: [del][12], [gulp-notify][9].
Arguments: No.
Description: Cleans the folder `src/build/CoffeeScript`.

### clean-es6 (clean-harmony)
Dependencies: [del][12], [gulp-notify][9].
Arguments: No.
Description: Cleans the folder `src/build/Harmony`.

### clean-ts (clean-typescript)
Dependencies: [del][12], [gulp-notify][9].
Arguments: No.
Description: Cleans the folder `src/build/TypeScript`.

### commit
Dependencies: [gulp-git][13], [yargs][14], [gulp-notify][9].
Arguments:
* m: Commit message.

Description: Commits the changes using `git commit` and signs them (see [How to sign your work][15]).

### compile (compile-all)
Dependencies: No.
Arguments: No.
Description: Runs the tasks **[compile-coffee][16]**, **[compile-es6][17]** and **[compile-ts][18]** consecutively.

### compile-coffee (compile-coffeescript)
Dependencies: [gulp-sourcemaps][19], [gulp-coffee][20], [yargs][14], [gulp-notify][9].
Arguments:
* bare: Compiles the code without using a top-level function safety wrapper.

Description: Compiles the `CoffeeScript` code making it compatible with **ES3** syntax.

### compile-es6 (compile-harmony)
Dependencies: [gulp-sourcemaps][19], [gulp-babel][21], [gulp-notify][9].
Arguments: No.
Description: Compiles the `ES6` code making it compatible with **ES5** syntax.

### compile-ts (compile-typescript)
Dependencies: [gulp-sourcemaps][19], [gulp-typescript][22], [yargs][14], [gulp-notify][9].
Arguments:
* modules: Define el sistema que usará para definir los módulos (por defecto *commonjs*).

Description: Compiles the `TypeScript` code making it compatible with **ES3** syntax.

### compress (compress-all, minify, minify-all, optimize, optimize-all)
Dependencies: No.
Arguments: No.
Description: Runs the tasks **[compress-coffee][23]**, **[compress-es6][24]** and **[compress-ts][25]** consecutively.

### compress-coffee (compress-coffeescript, minify-coffee, minify-coffeescript, optimize-coffee, optimize-coffeescript)
Dependencies: [gulp-rename][8], [gulp-uglify][26], [gulp-plumber][27], [gulp-notify][9].
Arguments: No.
Description: Minifies all JavaScript file inside `src/build/CoffeeScript` excluding those containing the `.min` prefix.

### compress-es6 (compress-harmony, minify-es6, minify-harmony, optimize-es6, optimize-harmony)
Dependencies: [gulp-rename][8], [gulp-uglify][26], [gulp-plumber][27], [gulp-notify][9].
Arguments: No.
Description: Minifies all JavaScript file inside `src/build/Harmony` excluding those containing the `.min` prefix.

### compress-ts (compress-typescript, minify-ts, minify-typescript, optimize-ts, optimize-typescript)
Dependencies: [gulp-rename][8], [gulp-uglify][26], [gulp-plumber][27], [gulp-notify][9].
Arguments: No.
Description: Minifies all JavaScript file inside `src/build/TypeScript` excluding those containing the `.min` prefix.

### hint (hint-all, check, check-all)
Dependencies: No.
Arguments: No.
Description: Runs the tasks **[hint-coffee][28]**, **[hint-es6][29]** and **[hint-ts][30]** consecutively.

### hint-coffee (hint-coffeescript, check-coffee, check-coffeescript)
Dependencies: [gulp-filter][31], [gulp-jshint][32], [jshint-stylish][33], [gulp-coffeelint][34], [gulp-notify][9].
Arguments: No.
Description: Hints all files inside `src/main/CoffeeScript` and `src/build/CoffeeScript`.

### hint-es6 (hint-harmony, check-es6, check-harmony)
Dependencies: [gulp-jshint][32], [jshint-stylish][33], [gulp-notify][9].
Arguments: No.
Description: Hints all files inside `src/main/Harmony` and `src/build/Harmony`.

### hint-ts (hint-typescript, check-ts, check-typescript)
Dependencies: [gulp-filter][31], [gulp-jshint][32], [jshint-stylish][33], [gulp-tslint][34], [gulp-notify][9].
Arguments: No.
Description: Hints all files inside `src/main/TypeScript` and `src/build/TypeScript`.

### push (push-all)
Dependencies: No.
Arguments: No.
Description: Runs the tasks **[push-master][35]**, **[push-wiki][36]** and **[push-wiki-branch][37]** consecutively.

### push-master (push-main)
Dependencies: [gulp-git][13], [gulp-notify][9].
Arguments: No.
Description: Pushes all commits and tags of the local branch `master` to the remote `origin:master`

### push-wiki
Dependencies: [gulp-git][13], [gulp-notify][9].
Arguments: No.
Description: Pushes all commits and tags of the local branch `wiki` to the remote `wiki:master`

### push-wiki-branch
Dependencies: [gulp-git][13], [gulp-notify][9].
Arguments: No.
Description: Pushes all commits and tags of the local branch `wiki` to the remote `origin:wiki`

### release
Dependencies: [gulp-json-editor][38], [gulp-git][13], [yargs][14], [gulp-notify][9].
Arguments:
* m: Commit message.
* v: Semantic version number (eg. v1.0.43.56).

Description: Replaces version number in project files, commits changes and tags the commit history with the `Semver`.

### versionate
Dependencies: [gulp-prompt][39], [gulp-json-editor][38].
Arguments: No.
Description: Changes version number in project files (only `package.json` and `bower.json`).

### watch (watch-all, observe, observe-all)
Dependencies: No.
Arguments: No.
Description: Runs the tasks **[watch-coffee][40]**, **[watch-es6][41]** and **[watch-ts][42]** consecutively.

### watch-coffee (watch-coffeescript, observe-coffee, observe-coffeescript)
Dependencies: No.
Arguments: No.
Description: Watches for chages the directory (and subdirectories of) `src/main/CoffeeScript` to compile them and the directory (and subdirectories of) `src/build/CoffeeScript` to minify them.

### watch-es6 (watch-harmony, observe-es6, observe-harmony)
Dependencies: No.
Arguments: No.
Description: Watches for chages the directory (and subdirectories of) `src/main/Harmony` to compile them and the directory (and subdirectories of) `src/build/Harmony` to minify them.

### watch-ts (watch-typescript, observe-ts, observe-typescript)
Dependencies: No.
Arguments: No.
Description: Watches for chages the directory (and subdirectories of) `src/main/TypeScript` to compile them and the directory (and subdirectories of) `src/build/TypeScript` to minify them.

[1]: Commands
[2]: #bundle-coffee-(bundle-coffeescript)
[3]: #bundle-es6-(bundle-harmony)
[4]: #bundle-ts-(bundle-typescript) 
[5]: http://browserify.org/
[6]: https://www.npmjs.com/package/coffeeify
[7]: https://www.npmjs.com/package/vinyl-transform
[8]: https://www.npmjs.com/package/gulp-rename
[9]: https://www.npmjs.com/package/gulp-notify
[10]: https://www.npmjs.com/package/babelify
[11]: https://www.npmjs.com/package/typescriptifier
[12]: https://www.npmjs.com/package/del
[13]: https://www.npmjs.com/package/gulp-git
[14]: https://www.npmjs.com/package/yargs
[15]: http://git-scm.com/book/es/v2/Git-Tools-Signing-Your-Work
[16]: #compile-coffee-(compile-coffeescript)
[17]: #compile-es6-(compile-harmony)
[18]: #compile-ts-(compile-typescript)
[19]: https://www.npmjs.com/package/gulp-sourcemaps
[20]: https://www.npmjs.com/package/gulp-coffee
[21]: https://www.npmjs.com/package/gulp-babel
[22]: https://www.npmjs.com/package/gulp-typescript
[23]: #compress-coffee-(compress-coffeescript,-minify-coffee,-minify-coffeescript,-optimize-coffee,-optimize-coffeescript)
[24]: #compress-es6-(compress-harmony,-minify-es6,-minify-harmony,-optimize-es6,-optimize-harmony)
[25]: #compress-ts-(compress-typescript,-minify-ts,-minify-typescript,-optimize-ts,-optimize-typescript)
[26]: https://www.npmjs.com/package/gulp-uglify
[27]: https://www.npmjs.com/package/gulp-plumber
[28]: #hint-coffee-(hint-coffeescript,-check-coffee,-check-coffeescript)
[29]: #hint-es6-(hint-harmony,-check-es6,-check-harmony)
[30]: #hint-ts-(hint-typescript,-check-ts,-check-typescript)
[31]: https://www.npmjs.com/package/gulp-filter
[32]: https://www.npmjs.com/package/gulp-jshint
[33]: https://www.npmjs.com/package/jshint-stylish
[34]: https://www.npmjs.com/package/gulp-tslint
[35]: #push-master-(push-main)
[36]: #push-wiki
[37]: #push-wiki-branch
[38]: https://www.npmjs.com/package/gulp-json-editor
[39]: https://www.npmjs.com/package/gulp-pompt
[40]: #watch-coffee-(watch-coffeescript,-observe-coffee,-observe-coffeescript)
[41]: #watch-es6-(watch-harmony,-observe-es6,-observe-harmony)
[42]: #watch-ts-(watch-typescript,-observe-ts,-observe-typescript)