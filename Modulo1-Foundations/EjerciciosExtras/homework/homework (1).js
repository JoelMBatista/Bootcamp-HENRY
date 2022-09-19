'use strict'

const { normalizeIgnoreContent } = require("@11ty/eleventy/src/EleventyFiles");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

    //caso de corte
    if (array.length <= 1) return array

    //Estructura
    let pivote = array[0]  // 
    let menor = [];
    let mayor = [];
    // let igual = []

    //Recorrido
    for (let i = 1; i < array.length; i++){
          if (array[i] > pivote){
            mayor.push(array[i])          
          } else {
            menor.push(array[i])
          }
    }
return quickSort(menor).concat(pivote).concat(quickSort(mayor)) 

/*
quickSort([5, 1, 4, 2, 8])
let pivote = 5
let menor = [1, 4, 2];                                            retorna [8]
let mayor = [8];                                *Nuevo Contexto quicksort([8])
return quickSort([1, 4, 2]).concat(5).concat(quickSort([8])) 
           // retorna [1, 2, 4].concat(5) --> [1, 2, 4, 5].concat(qS([8]) ---> [1, 2, 4, 5, 8]

        * Nuevo Contexto quickSort([1, 4, 2]) --> retorna [1, 2, 4]
             let pivote = 1
             let menor = [];
             let mayor = [4, 2];
             return quickSort([]).concat(1).concat(quickSort([4, 2]))//retorna [2, 4]
                        return [].concat(1).concat
                                                    *Nuevo Contexto quickSort([4, 2])  --> retorna [2, 4]
                                                    pivote = 4
                                                    menor = [2]
                                                    mayor= []
                                                     return quickSort([2]).concat(4).concat(quickSort([]))) 
*/

[50, -2, 10, 5, 8, -80]

   
}
/*

MS [5, 2, 4, 8, 6]

Ms [5, 2]   || MS [4, 8, 6]

MS [5] MS [2]   || MS [4] MS [8, 6]

MS [5] MS [2]   || MS [4] MS  || [8] MS [6]
    l          r        
                                   [6]        [2, 8]
                                       l          d
                                    [2, 6].concat([8])
----- comienza el merge
    [2].concat(5)





*/
function merge(left, right){
  let leftIndex = 0;
  let rightIndex = 0;
  let array = []

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]){
       array.push(left[leftIndex])
       leftIndex++
    } else {
      array.push(right[rightIndex])
      rightIndex++
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
//Validacion extra??

// caso de corte
if (array.length === 1) return array

//Dividir nuestro array a la mitad

let middle = Math.floor(array.length/2 )  // 7 middle = 3.5
let left = array.slice(0, middle)
let right = array.slice(middle)

//Recursion --> necesitamos una funcion que los ordene al retornarlos
return merge(mergeSort(left), mergeSort(right))

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
