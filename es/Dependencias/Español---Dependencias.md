Antes de poder ejecutar ninguna tarea automatizada (ver [Tareas][1]) es necesaria la instalación de una serie de dependencias. Como la instalación se hace a través de *[Node Package Manager][2]* (o *[NPM][2]*), que ya viene preinstalado con *[NodeJS][3]* o *[io.js][4]*, puedes instalarlas todas usando un comando de una sola línea:

    npm install

Una vez ejecutado el comando empezará la descarga de todos los módulos especificados en el archivo `package.json` con los nombres `dependencies` y `devDependencies`.
Como no todas estas dependencias son necesarias para ejecutar las tareas, tendremos que ejecutar un comando para hacer una instalación manual de cada uno:

  > **Atención**: El siguiente comando no garantiza la integridad de las tareas debido a que instala la última versión de cada módulo y no aquella versión que fue específicamente probada.

    npm install babelify browserify coffeeify del gulp gulp-babel gulp-coffee gulp-coffeelint gulp-filter gulp-jshint gulp-json-editor gulp-notify gulp-plumber gulp-prompt gulp-rename gulp-sourcemaps gulp-tslint gulp-typescript gulp-uglify gulp-util jshint-stylish open sprintf-js typescriptifier vinyl-transform yargs

### Dependencias necesarias
La gran mayoría de las dependencias son necesarias para la ejecución de las tareas automatizadas. En la siguiente lista puedes ver para que se usa cada una de ellas:
* [babelify][5]: Permite usar el módulo **gulp-babel** junto con los *bundles* de **browserify**.
* [browserify][6]: Analiza archivos *JavaScript* en busca de importaciones con `require()`, para crear un único archivo con todos los contenidos.
* [coffeeify][7]: Permite usar el módulo **gulp-coffee** junto con los *bundles* de **browserify**.
* [del][8]: Elimina carpetas o archivos.
* [gulp][9]: Sistema de automatización basado en *streamings* para construir proyectos.
* [gulp-babel][10]: Transpila o compila el código escrito en la nueva versión de *JavaScript Harmony* (**ES6**) para que sea compatible con la actualmente soportada **ES5**.
* [gulp-coffee][11]: Compila el código escrito en *CoffeeScript* a *JavaScript* (**ES3**).
* [gulp-coffeelint][12]: Comprueba si hay errores de sintaxis en el código escrito en *CoffeeScript*.
* [gulp-filter][13]: Filtra los *streamings* en función de la extensión del archivo original.
* [gulp-jshint][14]: Comprueba si hay errores de sintaxis en el código escrito en *JavaScript Harmony* y en los resultados de las diferentes compilaciones.
* [gulp-json-editor][15]: Modifica las propiedades *JSON* de un archivo.
* [gulp-notify][16]: Permite notificar sobre las acciones tanto en **Windows** como en **Mac OS X** o **Linux**.
* [gulp-plumber][17]: Permite capturar los errores dentro de los *streamings* para evitar que las tareas se detengan de manera inesperada.
* [gulp-prompt][18]: Permite al usuario introducir datos a través de la línea de comandos, consola o terminal.
* [gulp-rename][19]: Permite renombrar archivos, cambiando extensiones, añadiendo prefijos, sufijos, etc.
* [gulp-sourcemaps][20]: Crea *sourcemaps* usados para ver el código original de los archivos *JavaScript* en el *debugger* del navegador (**Firebug**, **DevTools**).
* [gulp-tslint][21]: Comprueba si hay errores de sintaxis en el código escrito en *TypeScript*.
* [gulp-typescript][22]: Compila el código escrito en *TypeScript* a *JavaScript* (**ES3**).
* [gulp-uglify][23]: Comprime el código escrito en *JavaScript* para ahorrar ancho de banda.
* [gulp-util][24]: Utilidades variadas necesarias en algunos procesos de Gulp.
* [jshint-stylish][25]: Hace más sencillo y visual el *reporter* de **gulp-jshint**.
* [open][26]: Abre carpetas o archivos con el explorador de archivos del sistema operativo.
* [sprintf-js][27]: Añade soporte para usar la función `sprintf()` en *NodeJS*.
* [typescriptifier][28]: Permite usar el módulo **gulp-typescript** junto con los *bundles* de **browserify**.
* [vinyl-transform][29]: Crea una función para pasar al método `pipe()` de Gulp más fácilmente sin tener que preocuparse si estamos tratando con `Buffer`s o `Stream`ings.
* [yargs][30]: Nos da la posibilidad de leer los argumentos pasados por la línea de comandos cuando se ha ejecutado una tarea.

### Dependencias opcionales
Las dependencias opcionales son aquellos módulos que no son necesarios para la ejecución de las tareas automatizadas. A grandes trazos, podríamos decir que son aquellos módulos que sirven para publicar el proyecto en diferentes repositorios o bien para hacer tests en los navegadores para comprobar su integridad. A continuación, puedes ver la lista de los módulos con una breve descripción de su funcionalidad:
* [bower][31]: Administrador de dependencias *JavaScript* para páginas Web.
* [duo][32]: Administrador de dependencias *JavaScript* para páginas Web con soporte para optimizar los recursos mediante *bundles*.
* [ender][33]: Permite inyectar la librería a un *namespace* común, el cual es el símbolo **$**, y que permite borrar o añadir librerías de dicho *namespace* con la posibilidad de crear *bundles*.
* [jam][34]: Administrador de dependencias *JavaScript* pensado expresamente para el navegador.
* [jspm][35]: Administrador de dependencias *JavaScript* pensado para dar soporte a librerías escritas en *JavaScript Harmony* y con la posibilidad de carga asíncrona gracias a un compilador que funciona en *runtime*.
* [karma][36]: Ejecuta tests automáticos en los navegadores especificados cuando los archivos cambian. También soporta el navegador *PhantomJS*.
* [karma-cli][37]: Habilita el uso del comando `karma` en la línea de comandos, consola o terminal.
* [karma-chrome-launcher][38]: Plugin de karma para ejecutar *Google Chrome* (Canary también).
* [karma-expect][39]: Plugin para añadir soporte a la librería **expect.js**.
* [karma-firefox-launcher][40]: Plugin para ejecutar *Mozilla Firefox*.
* [karma-ie-launcher][41]: Plugin para ejecutar *Microsoft Internet Explorer*.
* [mocha][42]: Librería para hacer test conocidos con el nombre de *unit testing*.

[1]: Español---Tareas
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