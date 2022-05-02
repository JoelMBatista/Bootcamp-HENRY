/*
$ Event loop
* Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?
*/

function printing() {
   console.log(1)
   setTimeout(function() { console.log(2); }, 000)
   setTimeout(function() { console.log(3); }, 0)
   console.log(4)
}

printing() // 1, 4, 2, 3