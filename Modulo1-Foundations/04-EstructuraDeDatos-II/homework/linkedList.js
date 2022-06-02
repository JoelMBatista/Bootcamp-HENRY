function linkedList() {this.head = null}

function Nodo(valor) {this.dato = valor;this.next = null}

//$ AGREGAR NODOS A LA LISTA
linkedList.prototype.add = function (valor) {
  let nodo = new Nodo(valor), current = this.head
  if (!current) {this.head = nodo; return}
  while (current.next) {current = current.next}
  current.next = nodo
  return
}
let lista = new linkedList()
console.log(lista)
lista.add('carne')
lista.add('pollo')
lista.add('tomate')
lista.add('choclo')
lista.add('pescado')
console.log(lista)

//$ Eliminar