"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;           /// este es la cabeza de mi lista  --> necesito pasarle nodos
  // this.length = 0                    /// la locomotora
}

function Node(value) {      // mis vagones 
  this.value = value;
  this.next = null
}

LinkedList.prototype.add = function (value){   //para sumarle nodos o vagones a la lista

var nodo = new Node(value);   //creo o instancio 1 nodo particular que es el que voy a sumar a la lista

let current = this.head // inicializo mi puntero

//si es el primer nodo que recibe mi lista, va a ir a tomar el lugar de this.head

if(!current){         // === this.head ===null
this.head = nodo        // si no hay head -> que mi nodo nuevo sea la cabeza
}  else {     // si head existe
while (current.next) {          // mientras current.next !== null
current = current.next
}
current.next = nodo
}  
}

LinkedList.prototype.remove = function () {
  let current = this.head;
  // si es una lista vacia
  if (!current) return null;      // if (this.head === null) return null
  //si la lista tiene 1 solo elemento
  if (!current.next){             // if (this.head.next === null) 
   let aux = current.value            // guardo el valor en un aux antes de eliminarlo
   this.head = null         // --> lo desvinculo
    return aux
  }
  // si la lista tiene mas de un elemento
  while (current.next.next) {          // mientras current.next.next !== null
    current = current.next
    }
   let aux = current.next.value    // guardo el valor en un aux antes de eliminarlo
   current.next = null               // --> lo desvinculo
   return aux     
}

                                        //o un valor o un callback
LinkedList.prototype.search = function (valueOrcb){                      // "Tercero"
  let current = this.head;
  // if (!current) return null

  while(current){
    //en caso de que sea una funcion 
    if (typeof valueOrcb === 'function'){
      if (valueOrcb(current.value)) return current.value
    }

    //en caso de que sea un string 
    if (current.value === valueOrcb) {
      return valueOrcb
    }
    current = current.next
  }

return null
}
/*
let lista = new LinkedList();
// lista = {head:null}


  head
[first] --> [second] --> [tercero] ----> NULL ---> null
                          C.tercero           
                          "Tercero"                                  

*/

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

// entrada  -----> hash() --------> buckets: donde guardar la entrada KEY
// 

function HashTable() {
this.numBuckets = 35;
this.buckets = []
}

HashTable.prototype.hash = function(str) {
  let count = 0
  for (let i = 0; i < str.length; i++){
  count = count + str.charCodeAt(i)    //
  }
   return count % this.numBuckets;
}

// "Yo robot" = hash() ==> 15
// "Rayuela" = hash() ==> 15

HashTable.prototype.set = function (key, value) {
 
  if (typeof key !== 'string') throw TypeError ('Keys must be strings');
  let bucket = this.hash(key)
  

  if (!this.buckets[bucket]){
    this.buckets[bucket] = {}
  }
  this.buckets[bucket][key] = value

}

HashTable.prototype.get = function (key) {
  let bucket = this.hash(key)
  return this.buckets[bucket][key]

}

HashTable.prototype.hasKey = function(key) {
  let bucket = this.hash(key)
  return this.buckets[bucket].hasOwnProperty(key)
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
