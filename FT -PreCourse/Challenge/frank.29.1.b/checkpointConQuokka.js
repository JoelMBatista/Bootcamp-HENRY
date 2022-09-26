//* *********************************************************************************
let array = [10,20,'henry',30,'challenge',40]

function soloNumeros(array) {
    var enteros = []
      for (var i = 0; i < array.length; i++) {
        if (typeof(array[i])==="number") {enteros.push(array[i]) }
      }
     return enteros
}
console.log(soloNumeros(array))

//* *********************************************************************************
//* *********************************************************************************
let array2= [8, 1]

function suma_todos(array2) {
  console.log(array2)
  array2.sort()
  console.log(array2)
  let inicio = array2[0]
  let fin = array2[1]
  let suma = 0
  for (let i = inicio; i <= fin; i++) {suma += i}
  return suma
}

console.log(suma_todos(array2));

//* *********************************************************************************
//* *********************************************************************************
function checkInventario(inventario, item) {
    return inventario.find((e)=> e.nombre === item )?.cantidad || 0
}

var inventario = [
   {    nombre: 'tenedor',
       cantidad: 6
     },
    {
       nombre: 'cuchara',
       cantidad: 4,
     },
]
console.log(checkInventario(inventario, 'tenedor'))
console.log(checkInventario(inventario, 'vaso'))

//* *********************************************************************************
//* *********************************************************************************
function numeroSimetrico(num) {
    var numero = 0
    for (let i = num.length - 1; i >= 0; i--) {numero = numero + num[i]}
    if (numero === num) {return true} else {return false}
}
console.log(numeroSimetrico(11711))
console.log(numeroSimetrico())

//* *********************************************************************************
//* *********************************************************************************
function index() {
    
    for (let i=0;i<array.length;i++) {
        if (array[i] === elemento) {
          return i;
        }
      }
      return -1;  
};
var elemento = [5, 6, 4, 65, 8, 4, 8]
console.log(index(elemento))