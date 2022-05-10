/*
$ Scope & Hoisting
* Determiná que será impreso en la consola, sin ejecutar el código.
* Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
*/

x = 1       //-------> Variable inicializada pero no declarada 
var a = 5   
var b = 10
var c = function(a, b, c) {     // 
  var x = 10
  console.log(x)  //10
  console.log(a)  //8
  var f = function(a, b, c) {    //
    b = a    
    console.log(b)    //8
    b = c    
    var x = 5   //5
  }
  f(a,b,c)
  console.log(b)    //9
}
c(8,9,10)
console.log(b)   //10
console.log(x)    //1


console.log(bar)   //undefined
//console.log(baz)    //baz is not defined
foo()
function foo() { console.log('Hola!'); }
var bar = 1
baz = 2



var instructor = "Tony"
if(true) {
    var instructor = "Franco"
}
//console.log(instructor)



//var instructor = "Tony"
//console.log(instructor)
(function() {
   if(true) {
      var instructor = "Franco"
      console.log(instructor)
   }
})()
console.log(instructor)



var instructor = "Tony"
let pm = "Franco"
if (true) {
    var instructor = "The Flash"
    let pm = "Reverse Flash"
    console.log(instructor)
    console.log(pm)
}
console.log(instructor)
console.log(pm)
