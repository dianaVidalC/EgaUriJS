Gracies a Gulp podem accedir a les tasques automatitzades a travès de la línia d'ordres escrivint únicament `gulp`. Totes les tasques disponibles estan definides dins l'arxiu `Gulpfile.js`. A continuació tens la definició de cada tasca, els seus respectius alias i els arguments que requereixen entre altres coses.

### Com puc saber quines tasques hi ha disponibles?
 Si desitges saber les tasques que pots executar, sempre tens a la teva disposició aquesta wiki on podràs veure-les. Per altra banda, pots obtindre la llista completa escrivint la següent ordre:

     gulp --tasks

### `gulp` no es reconegut com una ordre.
Si al executar l'ordre anterior o qualsevol altra que utilitzi l'executable `gulp` vas obtindre el següent error tenim la solució:

    ## Git Bash
    sh.exe": gulp: command not found

    ## cmd.exe
    "gulp" no se reconoce como un comando interno o externo, programa o archivo por lotes ejecutable.

Si desitges utilitzar aquesta ordre i vols que estigui disponible sempre has d'instal·lar *Gulp* de manera global:

    npm install -g gulp

Si no es així, pots fer ús del *Shell Script* `tools/task.sh` per executar una tasca o veure la llista completa (executant-lo sense passar arguments):

    <NOM_D'USUARI>@<NOM_DE_L'ORDINADOR> ~/<LA_TEVA_RUTA>/EgaUriJS/tools (master)
    $ task
    [hh:mm:ss] Working directory changed to c:\<LA_TEVA_RUTA>\EgaUriJS
    [hh:mm:ss] Using gulpfile c:\<LA_TEVA_RUTA>\EgaUriJS\Gulpfile.js
    [hh:mm:ss] Tasks for c:\<LA_TEVA_RUTA>\EgaUriJS\Gulpfile.js
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

Per veure més informació sobre les ordres o *Shell Scripts* visita la secció [Ordres][1].

## Definició d'una tasca.
La forma en la que es defineix una tasca consta de les següents parts:
* Nom de la tasca: És el nom original de la tasca; l'executa directament.
* Alias de la tasca: Són els noms secundaris de les tasques; més lent que executar la tasca amb el nom original. Estan entre paréntesi.
* Lista de móduels: La lista de móduls que s'utilitzen dins de la tasca.
* Arguments: Possibles arguments que modifiquen el comportament de la tasca.
* Descripció: Una breu descripció del que fa i com ho fa.

### bundle (bundle-all)
Mòduls: No.
Arguments: No.
Descripció: Executa les tasques **[bundle-coffee][2]**, **[bundle-es6][3]** i **[bundle-ts][4]** de manera consecutiva.

### bundle-coffee (bundle-coffeescript)
Mòduls: [browserify][5], [coffeeify][6], [vinyl-transform][7], [gulp-rename][8], [gulp-notify][9].
Arguments: No.
Descripció: Crea un *bundle* amb el codi font en *CoffeeScript*, localitzat en `src/main/CoffeeScript`.

### bundle-es6 (bundle-harmony)
Mòduls: [browserify][5], [babelify][10], [vinyl-transform][7], [gulp-rename][8], [gulp-notify][9].
Arguments: No.
Descripció: Crea un *bundle* amb el codi font de *Harmony*, localitzat en `src/main/Harmony`.

### bundle-ts (bundle-typescript)
Mòduls: [browserify][5], [typescriptifier][11], [vinyl-transform][7], [gulp-rename][8], [gulp-notify][9].
Arguments: No.
Descripció: Crea un *bundle* amb el codi font de *TypeScript*, localitzat en `src/main/TypeScript`.

### clean (clean-all)
Módulos: [del][12], [gulp-notify][9].
Argumentos: No.
Descripción: Elimina tot el contingut del directori `src/build`.

### clean-coffee (clean-coffeescript)
Módulos: [del][12], [gulp-notify][9].
Argumentos: No.
Descripción: Elimina tot el contingut del directori `src/build/CoffeeScript`.

### clean-es6 (clean-harmony)
Módulos: [del][12], [gulp-notify][9].
Argumentos: No.
Descripción: Elimina tot el contingut del directori `src/build/Harmony`.

### clean-ts (clean-typescript)
Módulos: [del][12], [gulp-notify][9].
Argumentos: No.
Descripción: Elimina tot el contingut del directori `src/build/TypeScript`.

### commit
Mòduls: [gulp-git][13], [yargs][14], [gulp-notify][9].
Arguments:
* m: Missatge que defineix els canvis realitzats.

Descripció: Desa els canvis utilitzant l'ordre `git commit` i els signa (veure [Com signar el teu treball][15]).

### compile (compile-all)
Mòduls: No.
Arguments: No.
Descripció: Executa les tasques **[compile-coffee][16]**, **[compile-es6][17]** i **[compile-ts][18]** de manera consecutiva.

### compile-coffee (compile-coffeescript)
Módulos: [gulp-sourcemaps][19], [gulp-coffee][20], [yargs][14], [gulp-notify][9].
Argumentos:
* bare: Compila el codi sense que aquest estigui en un bloc o funció d'alto nivell (sol ser una funció anónima).

Descripción: Compila el codi en **CoffeeScript** (el resultat compleix amb les especificacions de **ES3**).

### compile-es6 (compile-harmony)
Mòduls: [gulp-sourcemaps][19], [gulp-babel][21], [gulp-notify][9].
Arguments: No.
Descripció: Compila el codi en **Harmony** (el resultat compleix amb les especificacions de **ES5**).

### compile-ts (compile-typescript)
Mòduls: [gulp-sourcemaps][19], [gulp-typescript][22], [yargs][14], [gulp-notify][9].
Arguments:
* modules: Defineix el sistema que s'utilitzará per declarar els mòduls (per defecte *commonjs*).

Descripció: Compila el codi en **Typescript** (el resultat compleix amb les especificacions de **ES3**).

### compress (compress-all, minify, minify-all, optimize, optimize-all)
Mòduls: No.
Arguments: No.
Descripció: Executa les tasques **[compress-coffee][23]**, **[compress-es6][24]** i **[compress-ts][25]** de manera consecutiva.

### compress-coffee (compress-coffeescript, minify-coffee, minify-coffeescript, optimize-coffee, optimize-coffeescript)
Mòduls: [gulp-rename][8], [gulp-uglify][26], [gulp-plumber][27], [gulp-notify][9].
Arguments: No.
Descripció: Comprimeix qualsevol arxiu *JavaScript* dins la carpeta `src/build/CoffeeScript` excloïnt aquells que ja contenen el sufix `.min`.

### compress-es6 (compress-harmony, minify-es6, minify-harmony, optimize-es6, optimize-harmony)
Mòduls: [gulp-rename][8], [gulp-uglify][26], [gulp-plumber][27], [gulp-notify][9].
Arguments: No.
Descripció: Comprimeix qualsevol arxiu *JavaScript* dins la carpeta `src/build/Harmony` excloïnt aquells que ja contenen el sufix `.min`.

### compress-ts (compress-typescript, minify-ts, minify-typescript, optimize-ts, optimize-typescript)
Mòduls: [gulp-rename][8], [gulp-uglify][26], [gulp-plumber][27], [gulp-notify][9].
Arguments: No.
Descripció: Comprimeix qualsevol arxiu *JavaScript* dins la carpeta `src/build/TypeScript` excloïnt aquells que ja contenen el sufix `.min`.

### hint (hint-all, check, check-all)
Mòduls: No.
Arguments: No.
Descripció: Executa les tasques **[hint-coffee][28]**, **[hint-es6][29]** i **[hint-ts][30]** de manera consecutiva.

### hint-coffee (hint-coffeescript, check-coffee, check-coffeescript)
Mòduls: [gulp-filter][31], [gulp-jshint][32], [jshint-stylish][33], [gulp-coffeelint][34], [gulp-notify][9].
Arguments: No.
Descripció: Busca errors en els arxius dins els directoris `src/main/CoffeeScript` i `src/build/CoffeeScript`.

### hint-es6 (hint-harmony, check-es6, check-harmony)
Mòduls: [gulp-jshint][32], [jshint-stylish][33], [gulp-notify][9].
Arguments: No.
Descripció: Busca errors en els arxius dins els directoris `src/main/Harmony` i `src/build/Harmony`.

### hint-ts (hint-typescript, check-ts, check-typescript)
Mòduls: [gulp-filter][31], [gulp-jshint][32], [jshint-stylish][33], [gulp-tslint][34], [gulp-notify][9].
Arguments: No.
Descripció: Busca errors en els arxius dins els directoris `src/main/TypeScript` i `src/build/TypeScript`.

### push (push-all)
Mòduls: No.
Arguments: No.
Descripció: Executa les tasques **[push-master][35]**, **[push-wiki][36]** i **[push-wiki-branch][37]** de manera consecutiva.

### push-master (push-main)
Mòduls: [gulp-git][13], [gulp-notify][9].
Arguments: No.
Descripció: Puja els canvis i etiquetes de la branca `master` al remot `origin:master`.

### push-wiki
Mòduls: [gulp-git][13], [gulp-notify][9].
Arguments: No.
Descripció: Puja els canvis i etiquetes de la branca `wiki` al remot `wiki:master`.

### push-wiki-branch
Mòduls: [gulp-git][13], [gulp-notify][9].
Arguments: No.
Descripció: Puja els canvis i etiquetes de la branca `wiki` al remot `origin:wiki`.

### release
Mòduls: [gulp-json-editor][38], [gulp-git][13], [yargs][14], [gulp-notify][9].
Arguments:
* m: Missatge que descriu la versió i els canvis.
* v: Nombre de la versió (ex. v1.0.43.56).

Descripció: Susbtitueix el número de la versió en els archius del projecte, desa els canvis i etiqueta el *commit* amb la versió especificada.

### versionate
Mòduls: [gulp-prompt][39], [gulp-json-editor][38].
Arguments: Es demanará la introducció de dades a travès de la línia d'ordres.
Descripció: Canvia el número de la versió dels archius del projecte (únicament `package.json` i `bower.json`).

### watch (watch-all, observe, observe-all)
Mòduls: No.
Arguments: No.
Descripció: Executa les tasques **[watch-coffee][40]**, **[watch-es6][41]** i **[watch-ts][42]** de manera consecutiva.

### watch-coffee (watch-coffeescript, observe-coffee, observe-coffeescript)
Mòduls: No.
Arguments: No.
Descripció: Observa els arxius del directori (i subdirectoris de) `src/main/CoffeeScript` per compilar-los i els arxius del directori (i subdirectoris de) `src/build/CoffeeScript` per comprimir-los.

### watch-es6 (watch-harmony, observe-es6, observe-harmony)
Mòduls: No.
Arguments: No.
Descripció: Observa els arxius del directori (i subdirectoris de) `src/main/Harmony` per compilar-los i els arxius del directori (i subdirectoris de) `src/build/Harmony` per comprimir-los.

### watch-ts (watch-typescript, observe-ts, observe-typescript)
Mòduls: No.
Arguments: No.
Descripció: Observa els arxius del directori (i subdirectoris de) `src/main/TypeScript` per compilar-los i els arxius del directori (i subdirectoris de) `src/build/TypeScript` per comprimir-los.

[1]: Català-?-Ordres
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