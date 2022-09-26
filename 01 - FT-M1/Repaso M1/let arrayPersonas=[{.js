let arrayPersonas=[{
    fullname: "Leonardo Guerrero",
    age: 26,
    ticket: 1
  },
  {
    fullname: "Leonardo Castro",
    age: 30,
    ticket: 2
  },
  {
    fullname: "Kevin C",
    age: 23,
    ticket: 3
  },{
    fullname: "Sebas Lz",
    age: 28,
    ticket: 4
  },{
    fullname: "Ricardo David Ocampo",
    age: 33,
    ticket: 5
  },
]

function armarCola(array) {
    let cola = []
    for (let i = 0; i < array.length; i++) {
        cola.push(array[i].ticket)
    }
    return cola
}

console.log(armarCola(arrayPersonas))
let cola1 = armarCola(arrayPersonas)

function armarPila(array) {
    let pila = []
    for (let i = 0; i < array.length; i++) {
        pila.push(array[i].ticket)
    }
    return pila
}

function desarmarPila(pila){
    let arrayResultado =[]
    let ultimo
    while ( pila.length !== 0 ) {
        ultimo = pila.pop()
        arrayResultado.push(ultimo)
    }
    return arrayResultado
}

function desarmarCola(cola) {
    let resultado = []
    let primero
    while(cola.length > 0){
        primero = cola.shift()
        resultado.push(primero)
    }
    return resultado
}

console.log(desarmarCola(cola1))
console.log(cola1)

function topePila(pila) {
    return pila.pop()
}

console.log(armarPila(arrayPersonas))
let pila1 = armarPila(arrayPersonas)
console.log(topePila(pila1))