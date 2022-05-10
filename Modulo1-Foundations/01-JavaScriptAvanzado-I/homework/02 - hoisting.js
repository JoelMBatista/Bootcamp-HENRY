/*
$ Hoisting
* ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:
*/

function test() {
   console.log(a)
   console.log(foo())

   var a = 1
   function foo() {
      return 2
   }
}

test()

//$ Y el de este código? :

var snack = 'Meow Mix'

function getFood(food) {
    if (food) {
        var snack = 'Friskies'
        return snack
    }
    return snack
}

getFood(true)
