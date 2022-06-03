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

//$ INSERTAR NODO EN DETERMINADO LUGAR
linkedList.prototype.insertAt = function(valor,index){
  if (index < 0 || index > this.next){
    return null
  }
  let nodo = new Nodo(valor)
  let current = this.head
  let previo
  if (index === 0){
    nodo.next = current
    this.head = newnodo
  } else {
    for (let i = 0; i < index; i++){
      previo = current
      current = current.next
    }
    nodo.next = current
    previo.next = nodo
  }
  this.head++

}

console.log(lista);
lista.add('carne');
lista.insertAt('ladrillo',1)
lista.add('pollo');
lista.add('tomate');
lista.add('choclo');
lista.add('pescado');
console.log(lista);