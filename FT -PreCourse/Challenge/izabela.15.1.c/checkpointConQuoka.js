/* Escribir una funcion que reciba un entero (minutos) y retorne la cantidad de segundos
ej:
minutosASegundos(5) => 300
minutosASegundos(3) => 180
*/
// Tu código aca:

function minutosASegundos(minutos) {
    return minutos * 60
}
console.log(minutosASegundos(5))  
console.log(minutosASegundos(3))  


//$ **************************************************************************************************

/* escribir una funcion que reciba un arreglo de enteros (array) y retorne el promedio de esos numeros
ej:
promedio([1,2,3]) => 2
promedio([10, 20, 3]) => 11
Nota: Los numeros estan ordenados de menor a mayor.
*/
// Tu código aca:
let numeros1 = [3,2,1]
let numeros2 = [10, 20, 3]

function promedio(array) {
    console.log(array)
    array.sort()
    console.log(array)
    var sumaElement = 0
    
    for (var i = 0; i < array.length; i++) {        
        sumaElement += array[i]
        prom = sumaElement / array.length
    }
    console.log(sumaElement)
    console.log(prom)
    return prom
}
console.log(promedio(numeros1))
console.log(promedio(numeros2))


//$ **************************************************************************************************

/* Escribe una funcion que reciba un arreglo de objetos con info de empleados (empleados) y un string (nombre)y retorne el salario anual del empleado con ese nombre;
ej: 
var empleados = [{
    nombre: 'Manuel',
    salario: 1000,
},
{
    nombre: 'Flor',
    salario: 4000,
},
{
    nombre: 'Maria',
    salario: 500,
}
];
salarioAnual(empleados, 'Flor'); => 48000
salarioAnual(empleados, 'Manuel;); => 12000
*/
// Tu código aca:
let empleados = [{
    nombre: 'Manuel',
    salario: 1000,
},
{
    nombre: 'Flor',
    salario: 4000,
},
{
    nombre: 'Maria',
    salario: 500,
}
]

function salarioAnual(empleados, nombre) {
    return empleados.find(el => el.nombre==nombre).salario*12
}
//console.log(empleados(nombre,salario))


//$ **************************************************************************************************

/* Escribir una funcion que reciba un string (string) y retorne true si encuentra la palabra "henry" adentro. si no, retorna false.
Ej:
encontrarLaBomba('bienvenidos a henry') => true;
encontrarLaBomba('hola que tal, como va?!') => false;
*/
// Tu código:
let palabra1 = 'bienvenidos a henry'
let palabra2 = 'hola que tal, como va?!'

function encontrarLaPalabra(string) {
    for (var i = 0; i < string.length; i++) {
        if(string.indexOf('henry') !== -1) {
            return true
        } else {
            return false
        }
    }
}
console.log(encontrarLaPalabra(numeros1))
console.log(encontrarLaPalabra(numeros2))


//$ **************************************************************************************************

/* Escribi una función encontraIndex en el prototipo de Arrays, que recibe un elemento. La function tiene que devolver el indice (index) del primer elemento que coincida con el pasado como parametro dentro del array. Si el elemento se repite dentro del Array, este devuelve el indice del Primer elemento. Si no existe ese elemento la funcion debe devolver -1 NO USAR LA FUNCION indexOf DE LOS ARREGLOS.
ej:
var numeros = [5, 6, 4, 65, 8, 4]
numeros.encontraIndex(4) debe devolver 2.
ya que el numero 4 se encuentra en la posicion 2 dentro del array.
numeros.encontraIndex(23) debe devolver -1 ya que ese elemento no existe en ese array.
*/
// Tu código aca:
//let numeros = [5, 6, 4, 65, 8, 4]
//let duplicados = []
//function index() {}
    


let arreglo = [5, 6, 4, 65, 8, 4],
busqueda = 2;
console.log('Tenemos el arreglo: ', arreglo)
console.log('Buscando ', busqueda)
let indice = arreglo.indexOf(busqueda)
console.log('El elemento buscado está en el índice ', indice)

let duplicados = [];

const tempArray = [...arreglo].sort();
console.log(tempArray)

for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
      console.log(tempArray[i])
    duplicados.push(tempArray[i]);
  }
}

console.log(duplicados); // [2, 4]
 

//$ **************************************************************************************************

function crearClaseEmpleado() {
    // Crear una clase para construir objetos de tipo Empleado.
    // el constructor debe recibir:
    // nombre (string) , salario (integer) , tareas (array de objetos), jefe (booleano - por defecto false) 
    class Empleado {
      constructor(nombre, salario, tareas, jefe) {
          this.nombre = nombre,
          this.salario = salario,
          this.tareas = tareas,
          this.jefe = jefe
          
      }


      addTarea(tarea, prioridad) {
        // el metodo addTarea recibe un string tarea y un entero prioridad y debe agregar un objeto:
        // { tarea: tarea, prioridad: prioridad} al arreglo de tareas del empleado.
        // no debe retornar nada.

        
      }
  
      switchJefe() {
        // este método debe switchear el booleano jefe, si estaba en true, dejarlo en false
        // y si estaba en false, dejarlo en true
        // no debe retornar nada.
        
      }
      getTareas() {
        // Escribe una función que retorne un arreglo con sólo los nombres (tarea) del arreglo de tareas
        // del empleado.
        // this.tareas = [
        //    {tarea: 'compras', prioridad: 1},
        //    {tarea: 'dar clases', prioridad: 3},
        //    {tarea: 'operaciones', prioridad: 2}
        //  ];
        // Ej:
        // persona.getTareas() // retorna ['compras', 'dar clases', 'operaciones']
        
      }
  
      getTareasPrioritarias(prioridad) {
        // Escribe una función que retorne las tareas con prioridad mayor al entero prioridad
        // ej, si la persona tuviera estas tareas:
        // {
        //   tareas: [{
        //     nombre: 'compras',
        //     prioridad: 4,
        //   }, {
        //     nombre: 'operaciones',
        //     prioridad: 2,
        //   }]
        // }
        // persona.getTareasPrioritarias(3) // retorna 
        // [{
        //  nombre: 'compras',
        //  prioridad: 4,
        // }]
        
      }
  
    };
  
    return Empleado;
  }

  