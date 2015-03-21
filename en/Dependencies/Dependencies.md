Before executing any task (see [Tareas][1]) it's necessary to install a set of dependencies. Since the instalation is made through the *[Node Package Manager][2]* (or *[NPM][2]*), which comes preinstalled with *[NodeJS][3]* o *[io.js][4]*, you can install them all using a single line command:

    npm install

Once executed it will download all modules defined in `package.json` with the names `dependencies` and `devDependencies`.
If you want to install only those dependencies which are necessary to run the Gulp tasks you will have to install them manually. We have posted the complete command for you:

  > **Atention**: The next command doesn't guarantees the integrity of the tasks because running this command will install the latest version.

    npm install babelify browserify coffeeify del gulp gulp-babel gulp-coffee gulp-coffeelint gulp-filter gulp-jshint gulp-json-editor gulp-notify gulp-plumber gulp-prompt gulp-rename gulp-sourcemaps gulp-tslint gulp-typescript gulp-uglify gulp-util jshint-stylish open sprintf-js typescriptifier vinyl-transform yargs

### Necessary dependencies
The vast majority of dependencies are necessary to execute the tasks. Here you can see the list of necessary dependencies in order to run the tasks:
* [babelify][5]: Uses **gulp-babel** with **browserify**'s bundles.
* [browserify][6]: Analyzes *JavaScript* files searching for `require()` calls to create bundles.
* [coffeeify][7]: Uses **gulp-coffee** with **browserify**'s bundles.
* [del][8]: Deletes files and folders.
* [gulp][9]: Streaming build system used to build the entire project.
* [gulp-babel][10]: Transpiles JavaScript Harmony code to **ES5** compatible one.
* [gulp-coffee][11]: Compiles CoffeeScript code to JavaScript (**ES3**).
* [gulp-coffeelint][12]: Hints CoffeeScript code.
* [gulp-filter][13]: Filters streamings by file extension.
* [gulp-jshint][14]: Hints Javascript Harmony files and compiled results.
* [gulp-json-editor][15]: Modifies JSON files.
* [gulp-notify][16]: Multiplatform desktop notifications.
* [gulp-plumber][17]: Stream wrapper to catch errors and prevent task exiting.
* [gulp-prompt][18]: Prompts for data through command line.
* [gulp-rename][19]: Renames files with support for prefixes, sufixes, extensions, etc.
* [gulp-sourcemaps][20]: Creates sourcemaps for debugging purposes.
* [gulp-tslint][21]: Hints TypeScript code.
* [gulp-typescript][22]: Compiles TypeScript code to **ES3**.
* [gulp-uglify][23]: Minifies JavaScript code.
* [gulp-util][24]: Gulp utils.
* [jshint-stylish][25]: More stylish reporter for **jshint**.
* [open][26]: Opens files and folders.
* [sprintf-js][27]: `sprintf()` function in *NodeJS*.
* [typescriptifier][28]: Uses **gulp-typescript** with **browserify**'s bundles.
* [vinyl-transform][29]: Wrapper to work with Gulp without worrying if we are using `Buffer`s or `Stream`ings.
* [yargs][30]: Reads arguments from command line.

### Optional dependencies
The rest of dependencies are considered optional because are only needed to push the project to other repositories or to do automatic unit testing:
* [bower][31]: JavaScript package manager for the Web.
* [duo][32]: JavaScript package manager with bundles optimizations.
* [ender][33]: Injects libraries to a global namespace "$". Also a package manager for JavaScript.
* [jam][34]: Another JavaScript package manager.
* [jspm][35]: JavaScript package manager with support for **ES6** libraries.
* [karma][36]: Automatic JavaScript test runner (aka **Testacular**).
* [karma-cli][37]: Enables *karma* command.
* [karma-chrome-launcher][38]: **Google Chrome** (**Canary** also) launcher plugin for **karma**.
* [karma-expect][39]: Adds **expect.js** library.
* [karma-firefox-launcher][40]: **Mozilla Firefox** launcher plugin for **karma**.
* [karma-ie-launcher][41]: **Microsoft Internet Explorer** launcher plugin for **karma**.
* [mocha][42]: Unit testing library.

[1]: Tasks
[2]: https://www.npmjs.com/
[3]: https://nodejs.org/
[4]: https://iojs.org/
[5]: https://www.npmjs.com/package/babelify
[6]: https://www.npmjs.com/package/browserify
[7]: https://www.npmjs.com/package/coffeeify
[8]: https://www.npmjs.com/package/del
[9]: https://www.npmjs.com/package/gulp
[10]: https://www.npmjs.com/package/gulp-babel
[11]: https://www.npmjs.com/package/gulp-coffee
[12]: https://www.npmjs.com/package/gulp-coffeelint
[13]: https://www.npmjs.com/package/gulp-filter
[14]: https://www.npmjs.com/package/gulp-jshint
[15]: https://www.npmjs.com/package/gulp-json-editor
[16]: https://www.npmjs.com/package/gulp-notify
[17]: https://www.npmjs.com/package/gulp-plumber
[18]: https://www.npmjs.com/package/gulp-prompt
[19]: https://www.npmjs.com/package/gulp-rename
[20]: https://www.npmjs.com/package/gulp-sourcemaps
[21]: https://www.npmjs.com/package/gulp-tslint
[22]: https://www.npmjs.com/package/gulp-typescript
[23]: https://www.npmjs.com/package/gulp-uglify
[24]: https://github.com/gulpjs/gulp-util
[25]: https://www.npmjs.com/package/jshint-stylish
[26]: https://www.npmjs.com/package/open
[27]: https://www.npmjs.com/package/sprintf-js
[28]: https://www.npmjs.com/package/typescriptifier
[29]: https://www.npmjs.com/package/vinyl-transform
[30]: https://www.npmjs.com/package/yargs
[31]: http://bower.io/
[32]: http://duojs.org/
[33]: https://github.com/ender-js/ender-js
[34]: http://jamjs.org/
[35]: http://jspm.io/
[36]: http://karma-runner.github.io/
[37]: https://www.npmjs.com/package/karma-cli
[38]: https://www.npmjs.com/package/karma-chrome-launcher
[39]: https://www.npmjs.com/package/karma-expect
[40]: https://www.npmjs.com/package/karma-firefox-launcher
[41]: https://www.npmjs.com/package/karma-ie-launcher
[42]: http://mochajs.org/