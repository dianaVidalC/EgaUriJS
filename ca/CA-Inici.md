![EgaUriJS][1]

### Introducció.
Es un agraïment presentar-te **EgaUriJS** - Una llibreria **Open Source** per manipular **URI** (majoritàriament **URL**), dissenyada per la **Web** i creada fent ús de  **POO**<sup>[1][2]</sup>.

Aquesta wiki és la documentació oficial pels **programadors** que fan ús de (o contribueixen en el desenvolupament de) el projecte *EgaUriJS*. Si desitges revisar el codi d’aquesta wiki, degut a que ***GitHub*** no ofereix cap interfície per aquesta tasca, pots clonar el projecte afegint el sufix `.wiki` a la *URL* o veure el codi de la branca del projecte anomenada [wiki][3]. Ajuda a millorar *EgaUriJS* *[contribuint al projecte][4]*, *[reportant un error][5]*, *[traduint la documentació][3]* o *[donant-nos la teva opinió][6]*.
### Navegació ràpida.
Secció congelada fins que la wiki sigui més completa.
### Què fa especial a aquesta llibreria?
*EgaUriJS* està escrita utilitzant *POO*, donant l’avantatge als programadors per poder fer un sistema hereditari senzill, fàcil d’utilitzar i que fa que el codi de la llibreria sigui més expressiu o "*human-readable*". Aconseguir aquestes tres propietats és particularment difícil en **JavaScript**, ja que sempre s’acaba per sacrificar alguna d’elles. Com que no volem que tinguis que perdre el temps en aprendre a utilitzar-la, editar-la per que s’acomodi als teus gustos (o als de tots) o que no sigui eficient, la decisió està ben clara: no estarà escrita en *JavaScript*.

Per poder utilitzar-la en una pàgina *Web* ha d’estar obligatòriament en *JavaScript*. ¿Com utilitzar i no utilitzar *JavaScript*? Senzill. Utilitzant els **supersets**<sup>[2][7]</sup> de *JavaScript*. A més, gracies a aquests llenguatges podem dividir la llibreria en diferents mòduls de manera que no hi hagi cap tipus de conflicte amb les variables i s’aïlla la lògica de cada part per que sigui més fàcil entendre-la.
### Quins *supersets* o llenguatges suporta?
*EgaUriJS* no està tancada a cap llenguatge en concret, és més, està oberta a qualsevol suggeriment si es desitja afegir un nou llenguatge de programació amb una sèrie de condicions a tindre en compte:

 - Ha de tindre suport per la programació modular.
 - Ha de ser compilable o transpilable a *JavaScript*.
 - Ha de tindre una sintaxis senzilla per la *POO* sense tindre que fer ús de **polyfills** o **shims**.
 - Ha de ser més senzill que el propi llenguatge al que es compila, ja que aquest és l’objectiu d’aquest projecte.

Si una d’aquestes condicions no es compleix es poc probable que s’afegeixi el llenguatge al projecte, però si creus que és una bona idea i que pot arribar a tindre suport per part de la comunitat o estàs disposat a fer el **port** tu mateix, complint amb uns estàndards mínims de qualitat, com per exemple, que la **API** sigui exactament igual que a la resta de llenguatges, sempre pots comunicar-nos-ho.
Actualment el projecte està disponible en:

 - [CoffeeScript][8].
 - [TypeScript][9].
 - [Harmony][10].

### Ús ràpid.
Secció congelada fins que la llibreria arribi a la versió estable.

----------
 <a name="footnote-POO">1.</a> Programació Orientada a Objectes.
 
 <a name="footnote-supersets">2.</a> Llenguatges de programació, en major part, derivats de *JavaScript* que van ser creats amb la intenció de facilitar el desenvolupament i que tenen la opció de compilar o *transpilar* el codi del *superset* a *JavaScript* de manera molt eficient.

[1]: https://raw.githubusercontent.com/Egatuts/EgaUriJS/wiki/img/EgaUriJS-728.png
[2]: https://github.com/Egatuts/EgaUriJS/blob/wiki/es/Inicio.md#footnote-POO
[3]: https://github.com/Egatuts/EgaUriJS/tree/wiki
[4]: https://github.com/Egatuts/EgaUriJS/pulls
[5]: https://github.com/Egatuts/EgaUriJS/issues
[6]: https://github.com/Egatuts
[7]: https://github.com/Egatuts/EgaUriJS/blob/wiki/es/Inicio.md#footnote-supersets
[8]: http://coffeescript.org/
[9]: http://www.typescriptlang.org/
[10]: https://github.com/lukehoban/es6features
