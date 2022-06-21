/* Invertir el orden de los elementos del array que recibe por parametro
Que los ultimos elementos, pasen a ser los primeros
DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto 
No vale usar el metodo "reverse"
[1, 2, 3,x, a]
*/
function invertirOrden(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].toString().length === 1) {
      newArray.unshift(array[i]);
    }
  }
  return newArray;
}

/* Entre los dos array's que recibe la funcion por parametro Buscar y retornar el valor en comun entre ellos
[1,2,3]
[1,2,4]
*/
function numeroEnComun(array1, array2) {
  let current = 0;
  let aux;
  array1.forEach((elemento1) => {
    if (elemento1 < current || current === 0) {
      console.log('soy current', current);
      current = elemento1;
    }

    array2.forEach((elemento2) => {
      if (elemento1 === elemento2) {
        aux = elemento1;
      }
      if (elemento2 < current) {
        current = elemento2;
      }
    });
  });
  if (!aux) return current;
  return aux;
}

/*
El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
Ejemplo: [[1, 3], [10, 20], [4, 5], 2]
*/
function sumaDeArrays(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      var suma = 0;
      array[i].forEach((elemento) => {
        suma = suma + elemento;
      });
      newArray.push(suma);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/*
Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
Todos los elementos deben tener el mismo valor
OJO: Si el resultado de la division no es un entero, deben devolver false
*/
function mismoValorMismosElementos(numero, divisor) {
    if (numero % divisor !== 0) return false;
    let array = [];
    let result = numero / divisor;
    for (let i = 0; i < divisor; i++) {
        array.push(result);
    }
    return array;
}

/*
El Array recibido por props es un array que contienen numeros
Tenes que retornar un array
Solamente con el elemento menor y mayor del array recibido
*/
function elementoMenorYMayor(array) {
  let elementoMenor;
  let elementoMayor;
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[0] > array[i]) {
      elementoMenor = array[i];
    } else {
      elementoMenor = array[0];
    }
    if (array[0] < array[i]) {
      elementoMayor = array[i];
    }
  }

  newArray.push(elementoMenor);
  newArray.push(elementoMayor);
  return newArray;
}

module.exports = {
  numeroEnComun,
  invertirOrden,
  elementoMenorYMayor,
  sumaDeArrays,
  mismoValorMismosElementos,
};
