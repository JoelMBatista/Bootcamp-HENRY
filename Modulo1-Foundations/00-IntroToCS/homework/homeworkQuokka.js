/*
* No se pueden usar:
! parseInt
! toString

$           PASAR DE BINARIO A DECIMAL 
(Se eleva a potencia 2 cada número binario y se suma el resultado de cada numero al final.)
* ES: Para pasar un binario a un decimal se usa la siguiente fórmula: Suma(dígito*2^índice).
* El índice se lee de derecha a iquierda. Ejemplo:
* Binario: 10011
* índices: 43210
* Se procede a hacer la sumatoria: (1*2^0)+(0*2^1)+(1*2^2)+...
?                   (10011)
?              1 x 2^0 = 1 x  1 =  1 
?              1 x 2^1 = 1 x  2 =  2
?              0 x 2^2 = 0 x  4 =  0    = 19   
?              0 x 2^3 = 0 x  8 =  0
?              1 x 2^4 = 1 x 16 = 16
*/
//! REVIEW
// 10011 --> 1x2**4 + 1x2**3 + 0x2**2 + 0x2**1 + 0x2**0
//       --> 
function BinarioADecimal(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;
}
console.log(BinarioADecimal('10011'));

/*
$         PASAR DE DECIMAL A BINARIO 
(Se divide el numero decimal en 2 hasta que el residuo sea menor a 2, luego se cuentan los residuos de derecha a izquierda tomando el último ??numero como residual)
?                   19
?             19 / 2 = 9 resto 1 ----> 1 
?              9 / 2 = 4 resto 1 ----> 1 
?              4 / 2 = 2 resto 0 ----> 0  
?              2 / 2 = 1 ------------> 1 
*/
function DecimalABinario(num) {
  var binario = '';
  while (num > 0) {
    binario = (num % 2) + binario
    num = Math.floor(num / 2)
  }
  return binario
}
console.log(DecimalABinario(19))