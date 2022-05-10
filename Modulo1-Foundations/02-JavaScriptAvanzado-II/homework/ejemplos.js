/* 
$ CLOUSURE: Es una funcion que encapsula una serie de variables y definiciones locales que solo seran accecibles si son devueltas con `return`
*/
function saludar(saludo) {
  return function (nombre) {
    return saludo + ' ' + nombre
  };
}
var saludarHola = saludar('Hola')
console.log(saludarHola('Toni'))

//******************************************************* */
function suma(a){
    return function(b){
        return a + b
    }
}
console.log(suma(1)(3))

//********************************************************* */
function saludo(nombre){
    return `hola ${nombre}!`;
}
let say=saludo()
console.log(saludo('Kapelu'))

//********************************************************* */
let a= 'Hey '
function global(){
    let b= '¿Que '
    function local(){
        let c='tal?'
        return a + b+ c
    }
    return local
}

const closure=global()
console.log(closure())

//********************************************************* */
function producto(a){return (b)=> a * b}

var tabla = producto(2)

for (let i = 0; i < 11; i++) {
  console.log(tabla(i));
} 
//********************************************************* */

var creaFuncion = function(){
  var arreglo = [];

  for ( var i=0; i < 3; i++){
    arreglo.push(
      function(){
        console.log(i);
      }
    )
  }
  return arreglo;
}

var arr = creaFuncion();

arr[0]() // 3 sale un 3, qué esperaban ustedes??
arr[2]() // 3
arr[1]() // 3













