![EgaUriJS][1]

### Introducción.
Es un agradecimiento presentarte **EgaUriJS** − Una librería **Open Source** para manipular **URI** (mayoritariamente **URL**), diseñada para la **Web** y creada usando **POO**<sup>[1][2]</sup>.

Esta wiki es la documentación oficial para los **desarrolladores** que hacen uso de (o contribuyen en el desarrollo de) el proyecto *EgaUriJS*. Si deseas revisar el código de esta wiki, debido a que **GitHub** no ofrece una interfaz para ello, puedes clonar el proyecto añadiendo el sufijo `.wiki` a la *URL* o ver el código en la rama del proyecto llamada [wiki][3]. Ayuda a mejorar *EgaUriJS* *[contribuyendo al proyecto][4]*, *[reportando un error][5]*, *[traduciendo la documentación][3]* o *[dándonos tu opinión][6]*.
### Navegación rápida.
Sección congelada hasta que la wiki esté más completa.
### ¿Qué hace especial a esta librería?
*EgaUriJS* está escrita usando *POO*, dando la ventaja a los desarrolladores de poder hacer un sistema de herencia sencillo, fácil de usar y que hace que el código de la librería sea más expresivo o "***human-readable***". Conseguir estas tres propiedades es particularmente difícil en *JavaScript*, ya que siempre se acaba por sacrificar alguna de ellas. Como no queremos que tengas que perder tiempo en aprender a usarla, editarla para que se acomode a tus gustos (o los de todos) o que no sea eficiente, la decisión está bien clara: no estará escrita en *JavaScript*.

Para que se pueda usar en una página *Web* tiene que estar obligatoriamente en *JavaScript*. ¿Cómo usar y no usar *JavaScript*? Sencillo. Haciendo uso de los **supersets**<sup>[2][7]</sup> de *JavaScript*. Además, gracias a estos lenguajes podemos dividir la librería en diferentes módulos de manera que no hay ningún tipo de conflicto con las variables y se aísla la lógica de cada parte para que sea más fácil entenderla.
### ¿Qué *supersets* o lenguajes soporta?
*EgaUriJS* no está cerrada a ningún lenguaje en concreto, es más, está abierta a cualquier sugerencia si se desea añadir un nuevo lenguaje de programación con una serie de condiciones a tener en cuenta:

 - Debe tener soporte para la programación modular.
 - Debe ser compilable o transpilable a *JavaScript*.
 - Debe tener una sintaxis sencilla para la *POO* sin tener que hacer uso de **polyfills** o **shims**.
 - Debe ser más sencillo que el propio lenguaje al que se compila, ya que ese es el objetivo de este proyecto.

Si unas de estas condiciones no se cumple es poco probable que se añada dicho lenguaje al proyecto, pero si crees que es una buena idea y que puede llegar a tener soporte por parte de la comunidad o estás dispuesto a hacer el **port** tu mismo, cumpliendo con unos mínimos estándares de calidad, como por ejemplo, que la **API** sea exactamente igual que en el resto de lenguajes, siempre puedes comunicárnoslo.
Actualmente el proyecto está disponible en:

 - [CoffeeScript][8].
 - [TypeScript][9].
 - [Harmony][10].

### Uso rápido.
Sección congelada hasta que la librería llegue a la versión estable.

----------
 <a name="footnote-POO">1.</a> Programación Orientada a Objetos.
 
 <a name="footnote-supersets">2.</a> Lenguajes de programación, en su mayor parte, derivados de *JavaScript* que fueron creados con el objetivo de facilitar el desarrollo y que tienen la opción de compilar o *transpilar* el código de dicho *superset* a *JavaScript* de manera muy eficiente.

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