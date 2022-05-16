//$ Recursion: Es una funcion que se llama asi misma. 

//*-------------------------------------------------------------------------------------//
//* FACTORIAL : Es la multiplicación de un número con sus precedentes hasta llegar a 1  //
//*-------------------------------------------------------------------------------------//

//10: 10*9*8*7*6*5*4*3*2*1 = 3628800
//5 : 5*4*3*2*1 = 120
function nfac(num) {
  if (num === 1 || num === 0) {return 1}      //$ Cumpla propiedades de factorial
  return num * nfac(num - 1)                  //$ Resuelva factorial
}
console.log(nfac(10))

//*-------------------------------------------------------------------------------------//
//* FIBONACCI : Suceción de numero infinitos a partir del 0 que se van sumando a pares  //
//*             de manera que cada numero es igau a la suma de los 2 anteriores         //
//*-------------------------------------------------------------------------------------//

// Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
function nFibonacci(n) {
  if (n < 2) return n;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
}
console.log(nFibonacci(0));
console.log(nFibonacci(1));
console.log(nFibonacci(2));
console.log(nFibonacci(3));
console.log(nFibonacci(4));
console.log(nFibonacci(5));
console.log(nFibonacci(6));
console.log(nFibonacci(7));
console.log(nFibonacci(8));
console.log(nFibonacci(9));
console.log(nFibonacci(10));

//$ SIN RECURSIVIDAD Y PARA GRANDES VALORES
function fibonacci(n) {
  let fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo[n];
}
console.log(fibonacci(10));
console.log(fibonacci(100));
console.log(fibonacci(1000));
console.log(fibonacci(10000));
console.log(fibonacci(100000));
console.log(fibonacci(1000000));
console.log(fibonacci(10000000));
