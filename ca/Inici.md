![EgaUriJS][1]

### Introducci�.
Es un agra�ment presentar-te **EgaUriJS** - Una llibreria **Open Source** per manipular **URI** (majorit�riament **URL**), dissenyada per la **Web** i creada fent �s de  **POO**<sup>[1][2]</sup>.

Aquesta wiki �s la documentaci� oficial pels **programadors** que fan �s de (o contribueixen en el desenvolupament de) el projecte *EgaUriJS*. Si desitges revisar el codi d�aquesta wiki, degut a que ***GitHub*** no ofereix cap interf�cie per aquesta tasca, pots clonar el projecte afegint el sufix `.wiki` a la *URL* o veure el codi de la branca del projecte anomenada [wiki][3]. Ajuda a millorar *EgaUriJS* *[contribuint al projecte][4]*, *[reportant un error][5]*, *[traduint la documentaci�][3]* o *[donant-nos la teva opini�][6]*.
### Navegaci� r�pida.
Secci� congelada fins que la wiki sigui m�s completa.
### Qu� fa especial a aquesta llibreria?
*EgaUriJS* est� escrita utilitzant *POO*, donant l�avantatge als programadors per poder fer un sistema hereditari senzill, f�cil d�utilitzar i que fa que el codi de la llibreria sigui m�s expressiu o "*human-readable*". Aconseguir aquestes tres propietats �s particularment dif�cil en **JavaScript**, ja que sempre s�acaba per sacrificar alguna d�elles. Com que no volem que tinguis que perdre el temps en aprendre a utilitzar-la, editar-la per que s�acomodi als teus gustos (o als de tots) o que no sigui eficient, la decisi� est� ben clara: no estar� escrita en *JavaScript*.

Per poder utilitzar-la en una p�gina *Web* ha d�estar obligat�riament en *JavaScript*. �Com utilitzar i no utilitzar *JavaScript*? Senzill. Utilitzant els **supersets**<sup>[2][7]</sup> de *JavaScript*. A m�s, gracies a aquests llenguatges podem dividir la llibreria en diferents m�duls de manera que no hi hagi cap tipus de conflicte amb les variables i s�a�lla la l�gica de cada part per que sigui m�s f�cil entendre-la.
### Quins *supersets* o llenguatges suporta?
*EgaUriJS* no est� tancada a cap llenguatge en concret, �s m�s, est� oberta a qualsevol suggeriment si es desitja afegir un nou llenguatge de programaci� amb una s�rie de condicions a tindre en compte:

 - Ha de tindre suport per la programaci� modular.
 - Ha de ser compilable o transpilable a *JavaScript*.
 - Ha de tindre una sintaxis senzilla per la *POO* sense tindre que fer �s de **polyfills** o **shims**.
 - Ha de ser m�s senzill que el propi llenguatge al que es compila, ja que aquest �s l�objectiu d�aquest projecte.

Si una d�aquestes condicions no es compleix es poc probable que s�afegeixi el llenguatge al projecte, per� si creus que �s una bona idea i que pot arribar a tindre suport per part de la comunitat o est�s disposat a fer el **port** tu mateix, complint amb uns est�ndards m�nims de qualitat, com per exemple, que la **API** sigui exactament igual que a la resta de llenguatges, sempre pots comunicar-nos-ho.
Actualment el projecte est� disponible en:

 - [CoffeeScript][8].
 - [TypeScript][9].
 - [Harmony][10].

### �s r�pid.
Secci� congelada fins que la llibreria arribi a la versi� estable.

----------
 <a name="footnote-POO">1.</a> Programaci� Orientada a Objectes.
 
 <a name="footnote-supersets">2.</a> Llenguatges de programaci�, en major part, derivats de *JavaScript* que van ser creats amb la intenci� de facilitar el desenvolupament i que tenen la opci� de compilar o *transpilar* el codi del *superset* a *JavaScript* de manera molt eficient.

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
