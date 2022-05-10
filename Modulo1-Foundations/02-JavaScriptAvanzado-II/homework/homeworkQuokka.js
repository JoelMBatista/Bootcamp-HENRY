/* Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

```javascript
console.log('hola'.repeatify(3));   //holaholahola
```
*/

/*
Retorna una funcion que cuando sea invocada retorne un valor creciente. El primer valor deberia ser 1. Vas a tener que usar closures.
ejemplo: const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
*/
function counter(contador = 0) {return ()=>(contador = contador + 1)}

const contador = counter();
console.log(contador());
console.log(contador());

const contador1 = counter();
console.log(contador1());
console.log(contador1());
