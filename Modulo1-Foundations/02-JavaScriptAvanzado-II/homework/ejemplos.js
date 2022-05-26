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
      (function(j){
        return function(){console.log(j)};
      }, [i])
    )
  }
  return arreglo;
}

var arr = creaFuncion();

console.log(arr)

//********************************************************* */
function saludos(inicial,cosa,lang){
  if (lang == 'en') {return (nombre) => `${inicial} Hello ${nombre}${cosa}`}
  if (lang == 'it') {return (nombre) => `${inicial} Ciao ${nombre}${cosa}`}
  if (lang == 'es') {return (nombre) => `${inicial} Hola ${nombre}${cosa}`}
}
let saludoEng = saludos('# ', '!', 'en');
let saludoIta = saludos('# ', '!', 'it');
let saludoEsp = saludos('# ', '!', 'es');

console.log(saludoEng('Pepe'));
console.log(saludoIta('Pepe'));
console.log(saludoEsp('Pepe'));

//********************************************************* */
function saludo(nombre, dist) {
  if (dist === 159) {return (nombre) => `Hola ${nombre}!!`}
  if (dist === 753) {return (nombre) => `Hola ${nombre}!!`}
}

_159 = saludo('', 159,);
_753 = saludo('', 753);

console.log(_159('Daniel'));
console.log(_753('Martina'));

//* CALL BACK

function crearCita(cita, callback) {
  var miCita = 'Como yo siempre digo, ' + cita;
  callback(miCita); // 2
}

function logCita(cita) {
  console.log(cita);
}

crearCita('come tus vegetales!', logCita);