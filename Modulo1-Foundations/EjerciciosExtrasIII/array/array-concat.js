const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]



Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81
*/
let multiplicacion;
let tablaDeMultiplicar;
for(i = 1; i <= 9; i++){
 for(n = 1; n <= 9; n++){ 
  multiplicacion = i * n
  tablaDeMultiplicar = `${i} x ${n} = ${multiplicacion}`
  console.log(tablaDeMultiplicar)
}}
