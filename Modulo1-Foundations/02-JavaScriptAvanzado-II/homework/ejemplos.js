/* 
  $CLOUSURE: Es una funcion que encapsula una serie de variables y definiciones locales que solo seran accecibles si son devueltas con `return`
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







