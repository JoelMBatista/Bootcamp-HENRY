// Repasando ARRAYs

function sumaDeArrays(array) {
  // El array recibido por parametro es un array con arrays anidados con array's que contienen elementos de tipo number
  // Objetivo: devolver UN SOLO array que solo contenga elementos de tipo number
  // Desafio: Hay que sumar los elementos de cada sub array que contenga dos elementos o mas, devolviendo la suma del mismo como 1 solo elemento
  // Pero si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.

  // Ejemplo
  //let array = [1, [2, 3, 1], 4]
  // --> [1, 6, 4]

  let result = [];

  array.forEach((el) => {
    //for (let i =0)
    if (Array.isArray(el)) {
      let contador = 0;
      el.forEach((e) => {
        contador += e;
      });
      result.push(contador);
    } else result.push(el);
  });
  return result;
}

/* ------------------------------------------------------------------------------------------------------- */

// Repasando OBJETOs

const Henry = {
  staff: {
    jobPreparation: {
      name: "Natalia Acosta",
    },
    learning: {
      name: "Camilo Pineda",
    },
    alumnos: {
      name: "Anthony Nadales",
    },
  },
};
//  y si todo el staff estuviese en un array?

const printStaff = function (objeto) {
  // Retornar un arreglo que contenga los strings indicando el titulo y nombre de cada miembro del staff
  // de esta forma "En jobPreparation trabaja Natalia Acosta"

  let propiedades = Object.keys(objeto.staff);
  let result = [];
  propiedades.forEach((el) => {
    result.push("En " + el + " trabaja " + objeto.staff[el].name);
  });
  return result;
};

/* ------------------------------------------------------------------------------------------------------- */

// Repasando Recursion

// Ejercicio 1
function parImpar(numero) {
  // Objetivo: Realizar una funcion que devuelva "Par" si el numero es par o "Impar" caso contrario, pero utilizando recursividad en lugar de %

  // si el numero es negativo
  // si el numero no es entero
  // si es una NaN

  if (numero === 0) return "par";
  if (numero === 1) return "impar";
  return parImpar(numero - 2);

  //Ejemplo
  // parImpar(20)
  // "Par"
  // parImpar(21)
  // "Impar"
}

// Ejercicio 2
function espejo(str) {
  //Objetivo: Realizar una funcion que invierta el orden del string recibido

  // Ejemplo: reverse("hola susuna")
  // --> 'anusus aloh'

  //caso de corte
  if (str.length === 1) return str; //hola
  //recursivo
  return espejo(str.slice(1)) + str[0]; //espejo(ola)----PAUSA + h
  // ola
} //espejo(la)  ----PAUSA + o
// la
//espejo(a)  ----- pausa + l
// a               ---retorna a

// ola       + h
//la      +o ++h
//a      l + o + h
// ---> a

// OBJETOS Y RECURSION

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados (Atencion: excepto que esten adentro de un array, esas propiedades no se cuentan)

// Ejemplo:
var obj = {
  a: {
    a1: 10,
    a2: "10",
    a3: { a3a: "10", a3b: "10", a3c: { a3c1: true } },
  },
  b: 2,
  c: [1, { a: 1 }, "Duda"],
};
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, y a3 tiene otras 3.
// Propiedades: a, a1, a2, a3, a3a, a3b, a3c, a3c1, b, c --> 10 en total

var countProps = function (obj) {
  var contador = 0;
  for (var propiedades in obj) {
    contador++;
    if (
      typeof obj[propiedades] === "object" &&
      !Array.isArray(obj[propiedades])
    ) {
      //condicion de corte
      contador = contador + countProps(obj[propiedades]);
    }
  }
  return contador;
};

//////////////////////////////////////////////////////////////////////
// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)

//averiguar el .flat()

var countArray = function (array) {
  var contador = 0;
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      contador = contador + countArray(array[i]);
    } else {
      contador = contador + array[i];
    }
  }
  return contador;
};
/* ------------------------------------------------------------------------------------------------------- */

// Repasando Closure

function creciendo(num) {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // El primer valor debe ser el que se le pase por parametro a la funcion inicial.
  //
  //  ejemplo: const Pepe = creciendo(20);
  //  Pepe(); // "El proximo año va a tener 21"
  //  Pepe(); // "El proximo año va a tener 22"
  // Pepa = creciendo(50)
  // "El proximo año va a tener 51"

  var count = num;
  return function () {
    count++;
    return "El proximo año va a tener " + count;
  };
}

//
/* ------------------------------------------------------------------------------------------------------- */

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (x) {
  this.array.push(x);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

// Repasando QUEUE

function filtraQueue(arg) {
  //Realiza una funcion que filtre los numeros del array recibido y arme una queue con el resto de los elementos
  //Ejemplo
  // let array = [1, "a", 2, "b", [1, 2, 3]]
  //                        i
  // filtraQueue(array)
  // -> ["a", "b", [1, 2, 3]]

  var queue = new Queue();
  for (let i = 0; i < arg.length; i++) {
    if (typeof arg[i] !== "number") {
      queue.enqueue(arg[i]);
    }
  }
  return queue;
}

/* ------------------------------------------------------------------------------------------------------- */
function LinkedList() {
  this.head = null;
  //length?
}

function Node(value) {
  this.value = value;
  this.next = null;
}
LinkedList.prototype.add = function (value) {
  var nuevoNodo = new Node(value);

  if (!this.head) {
    this.head = nuevoNodo;
  } else {
    var current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = nuevoNodo;
  }
};

// Repasando LinkedList
LinkedList.prototype.size = function () {
  //Elaborar una funcion que devuelva la cantidad de nodos de una linkedList

  //Ejemplo: [head] --> ["first"] --> ["second"] --> ["the last nodito"]
  // size: 3
  var current = this.head;
  var count = 0;
  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
};

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no sean numeros por 'NotNumber' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Hola']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['NotNumber'] y la función debería haber devuelto el valor 1
//2       //0

LinkedList.prototype.changeNotNumbers = function () {
  var contador = 0;
  var current = this.head;
  while (current) {
    if (isNaN(current.value)) {
      //// ? ==????   typeOf === 'number'    parseInt??
      current.value = "NotNumber";
      contador++;
    }
    current = current.next;
  }
  return contador;
};
/* ------------------------------------------------------------------------------------------------------- */

// Repasando BST
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
  }
BinarySearchTree.prototype.insert = function (value) {
    if (this.value > value) {
      if (!this.left) this.left = new BinarySearchTree (value);
      else this.left.insert(value);
    }
    else if (this.value < value) {
      if (!this.right) this.right = new BinarySearchTree (value);
      else this.right.insert(value);
    }
  }


BinarySearchTree.prototype.height = function () {
  // Elaborar una funcion que devuelva la altura de un arbol (es decir la cantidad de niveles que tiene)
  // Tip. Pensar en el metodo size, y utilizar Math.max()
  /*  
                     0                  Nivel 0
                   /  \
                  -1   5                Nivel 1
                  /    / \
                -2    3    7            Nivel 2
                      \
                      4                 Nivel 3

                      La altura de este arbol es 3.
                      
    */
 if (!this.left && !this.right) return 0                    // caso de corte
 if (!this.left && this.right) return 1 + (this.right.height())
 if (this.left && !this.right) return 1 + (this.left.height())
 if (this.left && this.right) return 1 +  Math.max(this.left.height(), this.right.height())
};
