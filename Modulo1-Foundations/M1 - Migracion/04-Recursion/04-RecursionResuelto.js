// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10

const producto = function (array) {
  //escribe aqui tu codigo

  console.log('array ', array);
  if (array.length === 0) {
    return true;
  } else {
    return array.pop() * producto(array);
  }
};

console.log(producto([7, 9, 3]));

//------------------------------------------------------------------------------------------------------------------
// Recursividad en javascript con objetos
// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:

//Solución correcta!!!

let obj = {
  prop2: { value: 5 },
  school: {
    hogwarts: {
      headmaster: {
        name: {
          first: 'Albus',
          last: 'Dumbledore',
        },
      },
    },
  },
};

//SOLUCIÓN UNO.

/*let result = false;
for (let key in obj) {
  if (obj[key] === value) {
    result = true;
  } else if (typeof obj[key] === "object") {
    result = isThere(obj[key], value);
  }
}
return result;
};
console.log(isThere(obj, 6));*/

//SOLUCIÓN 2 FORMA CORRECTA.

//Condición de corte, seria, cuando encuentro el valor, o cuando ya no tenga donde buscarlo.

const isThere = function (obj, value) {
  let result;
  Object.keys(obj).some(function (key) {
    console.log(Object.keys(obj));
    if (obj[key] === value) {
      result = obj[key];
      return true;
    }
    if (obj[key] && typeof obj[key] === 'object') {
      result = isThere(obj[key], value);
      return result;
    }
  });
  console.log(result);
  return result ? true : false;
};

console.log(isThere(obj, 5));
