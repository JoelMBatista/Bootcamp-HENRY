/*
$ This
* ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:
*/

var fullname = 'Juan Perez'
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname
      }
   }
}

console.log(obj.prop.getFullname())

var test = obj.prop.getFullname

console.log(test())