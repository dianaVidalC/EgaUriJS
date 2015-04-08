Gracias a Gulp podemos acceder a las tareas automatizadas a través de la línea de comandos escribiendo únicamente `gulp`. Todas las tareas disponibles están definidas dentro del archivo `Gulpfile.js`. A continuación tienes la definición de cada tarea, sus respectivos alias y los argumentos que requieren entre otras cosas.

### ¿Cómo puedo saber que tareas están disponibles?
 Si deseas saber las tareas que puedes ejecutar, siempre tienes a tu disposición esta wiki donde podrás verlas. Por otra parte, puedes obtener una lista completa usando un sencillo comando:

     gulp --tasks

### `gulp` no se reconoce como un comando.
Si al ejecutar el comando anterior o cualquier otro que use el ejecutable `gulp` obtuviste el siguiente error tenemos la solución:

    ## Git Bash
    sh.exe": gulp: command not found

    ## cmd.exe
    "gulp" no se reconoce como un comando interno o externo, programa o archivo por lotes ejecutable.

Si deseas usar el comando y que esté disponible siempre debes instalar *Gulp* de manera global:

    npm install -g gulp

De lo contrario puedes usar el *Shell Script* `tools/task.sh` para ejecutar una tarea o ver la lista completa (ejecútalo sin pasar argumentos):

    <NOMBRE_DE_USUARIO>@<NOMBRE_DEL_ORDENADOR> ~/<TU_RUTA>/EgaUriJS/tools (master)
    $ task
    [hh:mm:ss] Working directory changed to c:\<TU_RUTA>\EgaUriJS
    [hh:mm:ss] Using gulpfile c:\<TU_RUTA>\EgaUriJS\Gulpfile.js
    [hh:mm:ss] Tasks for c:\<TU_RUTA>\EgaUriJS\Gulpfile.js
    [hh:mm:ss] ├── compress
    [hh:mm:ss] ├── compress-all
    [hh:mm:ss] ├── minify
    [hh:mm:ss] ├── minify-all
    [hh:mm:ss] ├── optimize
    [hh:mm:ss] ├── optimize-all
    [hh:mm:ss] ├── compress-es6
    [hh:mm:ss] ├── compress-harmony
    [hh:mm:ss] ├── minify-es6
    [hh:mm:ss] ├── minify-harmony
    [hh:mm:ss] ├── optimize-es6
    [hh:mm:ss] ├── optimize-harmony
    [hh:mm:ss] ├── compress-ts
    [hh:mm:ss] ├── compress-typescript
    [hh:mm:ss] ├── minify-ts
    [hh:mm:ss] ├── minify-typescript
    [hh:mm:ss] ├── optimize-ts
    [hh:mm:ss] ├── optimize-typescript
    [hh:mm:ss] ├── compress-coffee
    [hh:mm:ss] ├── compress-coffeescript
    [hh:mm:ss] ├── minify-coffee
    [hh:mm:ss] ├── minify-coffeescript
    [hh:mm:ss] ├── optimize-coffee
    [hh:mm:ss] ├── optimize-coffeescript
    [hh:mm:ss] ├── hint
    [hh:mm:ss] ├── hint-all
    [hh:mm:ss] ├── check
    [hh:mm:ss] ├── check-all
    [hh:mm:ss] ├── hint-es6
    [hh:mm:ss] ├── hint-harmony
    [hh:mm:ss] ├── check-es6
    [hh:mm:ss] ├── check-harmony
    [hh:mm:ss] ├── hint-ts
    [hh:mm:ss] ├── hint-typescript
    [hh:mm:ss] ├── check-ts
    [hh:mm:ss] ├── check-typescript
    [hh:mm:ss] ├── hint-coffee
    [hh:mm:ss] ├── hint-coffeescript
    [hh:mm:ss] ├── check-coffee
    [hh:mm:ss] ├── check-coffeescript
    [hh:mm:ss] ├── clean
    [hh:mm:ss] ├── clean-all
    [hh:mm:ss] ├── clean-es6
    [hh:mm:ss] ├── clean-harmony
    [hh:mm:ss] ├── clean-ts
    [hh:mm:ss] ├── clean-typescript
    [hh:mm:ss] ├── clean-coffee
    [hh:mm:ss] ├── clean-coffeescript
    [hh:mm:ss] ├── compile
    [hh:mm:ss] ├── compile-all
    [hh:mm:ss] ├── compile-es6
    [hh:mm:ss] ├── compile-harmony
    [hh:mm:ss] ├── compile-ts
    [hh:mm:ss] ├── compile-typescript
    [hh:mm:ss] ├── compile-coffee
    [hh:mm:ss] ├── compile-coffeescript
    [hh:mm:ss] ├── versionate
    [hh:mm:ss] ├── commit
    [hh:mm:ss] ├── release
    [hh:mm:ss] ├── push
    [hh:mm:ss] ├── push-all
    [hh:mm:ss] ├── push-master
    [hh:mm:ss] ├── push-main
    [hh:mm:ss] ├── push-wiki
    [hh:mm:ss] ├── push-wiki-branch
    [hh:mm:ss] ├── watch
    [hh:mm:ss] ├── watch-all
    [hh:mm:ss] ├── observe
    [hh:mm:ss] ├── observe-all
    [hh:mm:ss] ├── watch-es6
    [hh:mm:ss] ├── watch-harmony
    [hh:mm:ss] ├── observe-es6
    [hh:mm:ss] ├── observe-harmony
    [hh:mm:ss] ├── watch-ts
    [hh:mm:ss] ├── watch-typescript
    [hh:mm:ss] ├── observe-ts
    [hh:mm:ss] ├── observe-typescript
    [hh:mm:ss] ├── watch-coffee
    [hh:mm:ss] ├── watch-coffeescript
    [hh:mm:ss] ├── observe-coffee
    [hh:mm:ss] ├── observe-coffeescript
    [hh:mm:ss] ├── bundle-es6
    [hh:mm:ss] ├── bundle-harmony
    [hh:mm:ss] ├── bundle-ts
    [hh:mm:ss] ├── bundle-typescript
    [hh:mm:ss] ├── bundle-coffee
    [hh:mm:ss] └── bundle-coffeescript

Para ver más información acerca de los comandos o *Shell Scripts* visita la sección [Comandos][1].

## Definición de una tarea.
La forma en la que se define una tarea consta de las siguientes partes:
* Nombre de la tarea: Es el nombre original de la tarea; no da rodeos.
* Alias de la tarea: Conjunto de nombres secundarios para la misma tarea; más lento que ejecutar la tarea usando el nombre original. Están entre paréntesis.
* Lista de módulos: La lista de módulos que se usa dentro de la tarea.
* Argumentos: Posibles argumentos que modifican el comportamiento de la tarea.
* Descripción: Una breve descripción de lo que hace y cómo lo hace.

### bundle (bundle-all)
Módulos: No.
Argumentos: No.
Descripción: Ejecuta las tareas **[bundle-coffee][2]**, **[bundle-es6][3]** y **[bundle-ts][4]** de manera consecutiva.

### bundle-coffee (bundle-coffeescript)
Módulos: [browserify][5], [coffeeify][6], [vinyl-transform][7], [gulp-rename][8], [gulp-notify][9].
Argumentos: No.
Descripción: Crea un *bundle* con el código fuente en *CoffeeScript*, localizado en `src/main/CoffeeScript`.

### bundle-es6 (bundle-harmony)
Módulos: [browserify][5], [babelify][10], [vinyl-transform][7], [gulp-rename][8], [gulp-notify][9].
Argumentos: No.
Descripción: Crea un *bundle* con el código fuente en *Harmony*, localizado en `src/main/Harmony`.

### bundle-ts (bundle-typescript)
Módulos: [browserify][5], [typescriptifier][11], [vinyl-transform][7], [gulp-rename][8], [gulp-notify][9].
Argumentos: No.
Descripción: Crea un *bundle* con el código fuente en *TypeScript*, localizado en `src/main/TypeScript`.

### clean (clean-all)
Módulos: [del][12], [gulp-notify][9].
Argumentos: No.
Descripción: Elimina todo el contenido del directorio `src/build`.

### clean-coffee (clean-coffeescript)
Módulos: [del][12], [gulp-notify][9].
Argumentos: No.
Descripción: Elimina todo el contenido del directorio `src/build/CoffeeScript`.

### clean-es6 (clean-harmony)
Módulos: [del][12], [gulp-notify][9].
Argumentos: No.
Descripción: Elimina todo el contenido del directorio `src/build/Harmony`.

### clean-ts (clean-typescript)
Módulos: [del][12], [gulp-notify][9].
Argumentos: No.
Descripción: Elimina todo el contenido del directorio `src/build/TypeScript`.

### commit
Módulos: [gulp-git][13], [yargs][14], [gulp-notify][9].
Argumentos:
* m: Mensaje que define los cambios realizados.

Descripción: Guarda los cambios usando el comando `git commit` y firma los cambios (ver [Cómo firmar tu trabajo][15]).

### compile (compile-all)
Módulos: No.
Argumentos: No.
Descripción: Ejecuta las tareas **[compile-coffee][16]**, **[compile-es6][17]** y **[compile-ts][18]** de manera consecutiva.

### compile-coffee (compile-coffeescript)
Módulos: [gulp-sourcemaps][19], [gulp-coffee][20], [yargs][14], [gulp-notify][9].
Argumentos:
* bare: Compila el código sin que éste esté en un bloque o función de alto nivel (suele ser una función anónima).

Descripción: Compila el código escrito en **CoffeeScript** (el resultado cumple con las especificaciones de **ES3**).

### compile-es6 (compile-harmony)
Módulos: [gulp-sourcemaps][19], [gulp-babel][21], [gulp-notify][9].
Argumentos: No.
Descripción: Transpila el código escrito en **ES6** (el resultado cumple con las especificaciones de **ES5**).

### compile-ts (compile-typescript)
Módulos: [gulp-sourcemaps][19], [gulp-typescript][22], [yargs][14], [gulp-notify][9].
Argumentos:
* modules: Define el sistema que usará para definir los módulos (por defecto *commonjs*).

Descripción: Compila el código escrito en **TypeScript** (el resultado cumple con las especificaciones de **ES3**).

### compress (compress-all, minify, minify-all, optimize, optimize-all)
Módulos: No.
Argumentos: No.
Descripción: Ejecuta las tareas **[compress-coffee][23]**, **[compress-es6][24]** y **[compress-ts][25]** de manera consecutiva.

### compress-coffee (compress-coffeescript, minify-coffee, minify-coffeescript, optimize-coffee, optimize-coffeescript)
Módulos: [gulp-rename][8], [gulp-uglify][26], [gulp-plumber][27], [gulp-notify][9].
Argumentos: No.
Descripción: Comprime cualquier archivo *JavaScript* dentro de la carpeta `src/build/CoffeeScript` excluyendo aquellos que contienen el sufijo `.min`.

### compress-es6 (compress-harmony, minify-es6, minify-harmony, optimize-es6, optimize-harmony)
Módulos: [gulp-rename][8], [gulp-uglify][26], [gulp-plumber][27], [gulp-notify][9].
Argumentos: No.
Descripción: Comprime cualquier archivo *JavaScript* dentro de la carpeta `src/build/Harmony` excluyendo aquellos que contienen el sufijo `.min`.

### compress-ts (compress-typescript, minify-ts, minify-typescript, optimize-ts, optimize-typescript)
Módulos: [gulp-rename][8], [gulp-uglify][26], [gulp-plumber][27], [gulp-notify][9].
Argumentos: No.
Descripción: Comprime cualquier archivo *JavaScript* dentro de la carpeta `src/build/TypeScript` excluyendo aquellos que contienen el sufijo `.min`.

### hint (hint-all, check, check-all)
Módulos: No.
Argumentos: No.
Descripción: Ejecuta las tareas **[hint-coffee][28]**, **[hint-es6][29]** y **[hint-ts][30]** de manera consecutiva.

### hint-coffee (hint-coffeescript, check-coffee, check-coffeescript)
Módulos: [gulp-filter][31], [gulp-jshint][32], [jshint-stylish][33], [gulp-coffeelint][34], [gulp-notify][9].
Argumentos: No.
Descripción: Busca errores en los archivos dentro de los directorios `src/main/CoffeeScript` y `src/build/CoffeeScript`.

### hint-es6 (hint-harmony, check-es6, check-harmony)
Módulos: [gulp-jshint][32], [jshint-stylish][33], [gulp-notify][9].
Argumentos: No.
Descripción: Busca errores en los archivos dentro de los directorios `src/main/Harmony` y `src/build/Harmony`.

### hint-ts (hint-typescript, check-ts, check-typescript)
Módulos: [gulp-filter][31], [gulp-jshint][32], [jshint-stylish][33], [gulp-tslint][34], [gulp-notify][9].
Argumentos: No.
Descripción: Busca errores en los archivos dentro de los directorios `src/main/TypeScript` y `src/build/TypeScript`.

### push (push-all)
Módulos: No.
Argumentos: No.
Descripción: Ejecuta las tareas **[push-master][35]**, **[push-wiki][36]** y **[push-wiki-branch][37]** de manera consecutiva.

### push-master (push-main)
Módulos: [gulp-git][13], [gulp-notify][9].
Argumentos: No.
Descripción: Sube los cambios y etiquetas de la rama `master` al remoto `origin:master`.

### push-wiki
Módulos: [gulp-git][13], [gulp-notify][9].
Argumentos: No.
Descripción: Sube los cambios y etiquetas de la rama `wiki` al remoto `wiki:master`.

### push-wiki-branch
Módulos: [gulp-git][13], [gulp-notify][9].
Argumentos: No.
Descripción: Sube los cambios y etiquetas de la rama `wiki` al remoto `origin:wiki`.

### release
Módulos: [gulp-json-editor][38], [gulp-git][13], [yargs][14], [gulp-notify][9].
Argumentos:
* m: Mensaje que describe la versión y los cambios.
* v: Número de la versión (ej. v1.0.43.56).

Descripción: Reemplaza el número de versión en los archivos del proyecto, guarda los cambios y etiqueta el *commit* con la versión especificada.

### versionate
Módulos: [gulp-prompt][39], [gulp-json-editor][38].
Argumentos: No.
Descripción: Cambia el número de versión en los archivos del proyecto (únicamente `package.json` y `bower.json`).

### watch (watch-all, observe, observe-all)
Módulos: No.
Argumentos: No.
Descripción: Ejecuta las tareas **[watch-coffee][40]**, **[watch-es6][41]** y **[watch-ts][42]** de manera consecutiva.

### watch-coffee (watch-coffeescript, observe-coffee, observe-coffeescript)
Módulos: No.
Argumentos: No.
Descripción: Observa los archivos del directorio (y subdirectorios de) `src/main/CoffeeScript` para compilarlos y los archivos del directorio (y subdirectorios de) `src/build/CoffeeScript` para comprimirlos.

### watch-es6 (watch-harmony, observe-es6, observe-harmony)
Módulos: No.
Argumentos: No.
Descripción: Observa los archivos del directorio (y subdirectorios de) `src/main/Harmony` para compilarlos y los archivos del directorio (y subdirectorios de) `src/build/Harmony` para comprimirlos.

### watch-ts (watch-typescript, observe-ts, observe-typescript)
Módulos: No.
Argumentos: No.
Descripción: Observa los archivos del directorio (y subdirectorios de) `src/main/TypeScript` para compilarlos y los archivos del directorio (y subdirectorios de) `src/build/TypeScript` para comprimirlos.

[1]: Español-–-Comandos
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