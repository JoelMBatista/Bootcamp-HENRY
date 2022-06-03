function linkedList() {
  this.head = null 
  this.size = 0 
}
let lista = new linkedList();
console.log(lista); 

function Nodo(value) {
  this.value = value 
  this.next = null 
}

//$ AGREGAR NODOS A LA LISTA
linkedList.prototype.add = function (data) {
  let node = new Nodo(data) 
  let current = this.head 

  if (this.head === null) {    // cuando la lista esta vacia
    this.head = node 
  } else {                     // cuando hay al menos un nodo en la lista
    while (current.next) {
      current = current.next 
    }
    current.next = node 
  }
  this.size++ 
  return node 
} 

console.log(lista);
lista.add(33);
lista.add(44);
lista.add(84);
lista.add(28);
lista.add(22);
lista.add(66);
console.log(lista);

//$ BUSCAR NODOS
linkedList.prototype.search = function (value) {
  if (this.head === null) return null 
  let current = this.head 
  while (current) {
    if (current.value === value) return current.value 
    else if (typeof value === 'function') {
      if (value(current.value)) {
        return current.value 
      }
    }
    current = current.next 
  }
  return null 
} 

console.log(lista);
console.log(lista.search(28));
console.log(lista.search(44));
console.log(lista.search(68));
console.log(lista); 

//$ ELIMINAR NODOS
//linkedList.prototype.remove = function () {
//  let current = this.head 
//  if (this.size === 0) {       // consultar si la lista esta vacia
//    return null 
//  } else if (this.size === 1) {
//    let aux = current.value 
//    this.head = null 
//    this.size-- 
//    return aux 
//  }
//  while (current.next.next) {  // aca simplemente mira que pasa dos pasos adelante de el
//    current = current.next 
//  }
//  let aux = current.next.value 
//  current.next = null 
//  this.size-- 
//  return aux 
//} 

//$ Agregar el metodo size al prototipo de LinkedList.
//$ Este metodo deberia retornar la cantidad de elementos de la lista
linkedList.prototype.size = function () {}

//$ Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
//$ ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
linkedList.prototype.orderList = function () {}

//$ Este metodo deberia recibir una posicion y un valor agregar el valor en la posicion indicada
linkedList.prototype.insert = function (value, pos) {}

console.log(lista);
lista.insert(777, 1);
console.log(lista);

//$ El metodo push nos permite insertar un nuevo valor AL FINAL
linkedList.prototype.push = function(value) {}

//$ El metodo pop nos permite eliminar un nuevo valor AL FINAL
linkedList.prototype.pop = function(value) {}

//$ El metodo shift nos permite eliminar un nuevo valor AL PRINCIPIO
linkedList.prototype.shift = function(value) {}

//$ Esto insertara un nuevo valor AL PRINCIPIO
linkedList.prototype.unshift = function(value) {}

//$ Este metodo nos permite reemplazar un valor existente en el indice que le indicamos
linkedList.prototype.set = function(value) {}

//$ revierte esta lista
linkedList.prototype.reverse = function(value) {}
