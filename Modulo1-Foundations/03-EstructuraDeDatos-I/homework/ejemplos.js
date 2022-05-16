//!    FACTORIAL    //
//!-----------------//

//10: 10*9*8*7*6*5*4*3*2*1 = 3628800
//5 : 5*4*3*2*1 = 120
function nfac(num){
    if (num === 1 || num === 0){return 1}     //$ Cumpla propiedades de factorial
    return num * nfac(num - 1)                //$ Resuelva factorial
}
console.log(nfac(10))

//!-----------------//
//!    FIBONACI     //
//!-----------------//

// Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
function nFibonacci(n) {
  if (n<2) return n
  return nFibonacci(n - 1) + nFibonacci(n - 2)
}
console.log(nFibonacci(0))
console.log(nFibonacci(1))
console.log(nFibonacci(2))
console.log(nFibonacci(3))
console.log(nFibonacci(4))
console.log(nFibonacci(5))
console.log(nFibonacci(6))
console.log(nFibonacci(7))
console.log(nFibonacci(8))
console.log(nFibonacci(9))
console.log(nFibonacci(10))


//$ SIN RECURSIVIDAD Y PARA GRANDES VALORES
function fibonacci(n) {
  let fibo = [0,1]
  for (let i = 2; i <= n; i++){
    fibo[i]= fibo[i-1] + fibo[i-2]
  }
  return fibo[n]
}
console.log(fibonacci(10))
console.log(fibonacci(100))
console.log(fibonacci(1000))
console.log(fibonacci(10000))
console.log(fibonacci(100000))
console.log(fibonacci(1000000))
console.log(fibonacci(10000000))



//$ ESTRUCTURAS DE DATOS

let arreglo = [1,2,3,4,5,6,4,5,4,5,4,2,4,5,2,2]
console.log(arreglo)

let arreglo1 = new Set(arreglo)
console.log(arreglo1)

//******************/
let stack = []
stack.push(1)
stack.push(10)
console.log(stack)
let i = stack.pop()
console.log(i)
console.log(stack)

function f(b) {
  var a = 12
  return a + b + 35
}

function g(x) {
  var m = 4
  return f(m * x)
}
console.log(g(21))