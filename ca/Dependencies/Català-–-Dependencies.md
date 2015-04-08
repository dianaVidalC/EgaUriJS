Abans de poder executar cap tasca automatitzada (veure [Tasques][1]) es necessària la instal·lació prèvia d'una sèrie de dependències. Gracies a que la instal·lació es fa a través de *[Node Package Manager][2]* (o *[NPM][2]*), que ja ve preinstal·lat amb *[NodeJS][3]* o *[io.js][4]*, pots instal·lar-les d'un sol cop executant una sola ordre:

    npm install

Una vegada executada l'ordre la descàrrega de tots els mòduls, especificats en l'arxiu `package.json` amb els noms `dependencies` i `devDependencies`, començarà.
No totes les tasques necessiten carregar tots els mòduls, raó per la qual, si volem, podem instal·lar manualment les dependències que són estrictament necessàries perquè funcionen totes les tasques.

  > **Atenció**: La següent ordre no garanteix la integritat de les tasques degut a que instal·la l'última versió de cada mòdul i no aquella versió que va ser específicament provada.

    npm install babelify browserify coffeeify del gulp gulp-babel gulp-coffee gulp-coffeelint gulp-filter gulp-jshint gulp-json-editor gulp-notify gulp-plumber gulp-prompt gulp-rename gulp-sourcemaps gulp-tslint gulp-typescript gulp-uglify gulp-util jshint-stylish open sprintf-js typescriptifier vinyl-transform yargs

### Dependencies necessaries
La gran majoria de les dependències són necessàries per executar las tasques automatitzades. En la següent llista pots veure la utilitat de cada una d'elles:
* [babelify][5]: Permet utilitzar el mòdul **gulp-babel** amb els *bundles* de **browserify**.
* [browserify][6]: Analitza arxius *JavaScript* en busca d'importacions amb `require()`, per crear un únic arxiu amb tots els continguts.
* [coffeeify][7]: Permet utilitzar el mòdul **gulp-coffee** amb els *bundles* de **browserify**.
* [del][8]: Elimina carpetes o arxius.
* [gulp][9]: Sistema d'automatització basat en *streamings* per construir projectes.
* [gulp-babel][10]: Transpila o compila el codi escrit en la nova versió de *JavaScript Harmony* (**ES6**) per que sigui compatible amb la actualment suportada **ES5**.
* [gulp-coffee][11]: Compila el codi escrit en *CoffeeScript* a *JavaScript* (**ES3**).
* [gulp-coffeelint][12]: Comprova si hi ha errors de sintaxis en el codi escrit en *CoffeeScript*.
* [gulp-filter][13]: Filtra els *streamings* en funció de la extensió de l'arxiu original.
* [gulp-jshint][14]: Comprova si hi ha errors de sintaxis en el codi escrit en *JavaScript Harmony* i en els resultats de les diferents compilacions.
* [gulp-json-editor][15]: Modifica les propietats *JSON* d'un arxiu.
* [gulp-notify][16]: Permet notificar sobre les accions tant en **Windows** com en **Mac OS X** o **Linux**.
* [gulp-plumber][17]: Permet capturar els errors dintre dels *streamings* per evitar que les tasques es detinguin de manera inesperada.
* [gulp-prompt][18]: Permet al usuari introduir dades a través de la línia d'ordres, consola o terminal.
* [gulp-rename][19]: Permet renombrar arxius, combinant extensions, afegint prefixos, sufixos, etc.
* [gulp-sourcemaps][20]: Crea *sourcemaps* utilitzats per veure el codi original dels arxius *JavaScript* en el *debugger* del navegador (**Firebug**, **DevTools**).
* [gulp-tslint][21]: Comprova si hi ha errors de sintaxis en el codi escrit en *TypeScript*.
* [gulp-typescript][22]: Compila el codi escrit en *TypeScript* a *JavaScript* (**ES3**).
* [gulp-uglify][23]: Comprimeix el codi escrit en *JavaScript* per estalviar espai.
* [gulp-util][24]: Utilitats variades necessàries en alguns processos de *Gulp*.
* [jshint-stylish][25]: Fa més senzill i visual el *reporter* de **gulp-jshint**.
* [open][26]: Obre carpetes o arxius amb l'explorador d'arxius del sistema operatiu.
* [sprintf-js][27]: Afegeix suport per utilitzar la funció `sprintf()` en *NodeJS*.
* [through2][28]: Fa més fàcil treballar amb els `Streams2` de *NodeJS*.
* [typescriptifier][29]: Permet utilitzar el mòdul **gulp-typescript** amb els *bundles* de **browserify**.
* [vinyl-transform][30]: Crea una funció per passar-la al mètode `pipe()` de *Gulp* més fàcilment sense haver de preocupar-se si estem tractant amb `Buffer`s o `Stream`ings.
* [yargs][31]: Ens dona la possibilitat de llegir els arguments passats per la línia d'ordres quan s'ha executat una tasca.

### Dependències opcionals
Les dependències opcionals són aquells mòduls que no són necessaris per la execució de les tasques automàtiques. A grans trets, podem dir que són aquells mòduls que serveixen per publicar el projecte en diferents "repositoris" o per realitzar els tests en els navegadors per comprovar la seva integritat. A continuació, pots veure una llista dels mòduls amb una breu descripció de la seva funcionalitat:
* [bower][32]: Administrador de dependències *JavaScript* per pàgines Web.
* [duo][33]: Administrador de dependències *JavaScript* per pàgines Web amb suport per optimitzar els recursos mitjançant *bundles*.
* [ender][34]: Permet injectar la llibreria a un *namespace* comú, el qual és el símbol **$**, i que permet treure o afegir llibreries del *namespace* amb la possibilitat de crear *bundles*.
* [jam][35]: Administrador de dependències *JavaScript* pensat expressament per el navegador.
* [jspm][36]: Administrador de dependències *JavaScript* pensat per donar suport a llibreries escrites en *JavaScript Harmony* i amb la possibilitat de carrega asíncrona gracies a un compilador que funciona en *runtime*.
* [karma][37]: Executa tests automàtics en els navegadors especificats quan els arxius canviin. També suporta el navegador *PhantomJS*.
* [karma-cli][38]: Habilita l'uso de l'ordre `karma` en la línia d'ordres, consola o terminal.
* [karma-chrome-launcher][39]: Plugin de karma per executar *Google Chrome* (*Canary* també).
* [karma-expect][40]: Plugin de karma per afegir suport a la llibreria **expect.js**.
* [karma-firefox-launcher][41]: Plugin de karma per executar *Mozilla Firefox*.
* [karma-ie-launcher][42]: Plugin de karma per executar *Microsoft Internet Explorer*.
* [mocha][43]: Llibreria per fer tests coneguts amb el nom de *unit testing*.

[1]: Català-–-Tasques
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
[28]: https://www.npmjs.com/package/through2
[29]: https://www.npmjs.com/package/typescriptifier
[30]: https://www.npmjs.com/package/vinyl-transform
[31]: https://www.npmjs.com/package/yargs
[32]: http://bower.io/
[33]: http://duojs.org/
[34]: https://github.com/ender-js/ender-js
[35]: http://jamjs.org/
[36]: http://jspm.io/
[37]: http://karma-runner.github.io/
[38]: https://www.npmjs.com/package/karma-cli
[39]: https://www.npmjs.com/package/karma-chrome-launcher
[40]: https://www.npmjs.com/package/karma-expect
[41]: https://www.npmjs.com/package/karma-firefox-launcher
[42]: https://www.npmjs.com/package/karma-ie-launcher
[43]: http://mochajs.org/