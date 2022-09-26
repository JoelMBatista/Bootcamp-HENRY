
let productos = [
    { nombre: "arroz", peso: 10 },
    { nombre: "fideos", peso: 15 },
    { nombre: "cafe", peso: 5 },
    { nombre: "arroz", peso: 10 },
    { nombre: "azucar", peso: 20 }
]

let maximo = 50

// pila[{nombre: "arroz", peso: 10},{nombre: "fideos", peso: 15},{nombre: "cafe", peso: 5},{nombre: "arroz", peso: 10}]
// acumulado = 60
// i = 4


// necesito una funcion que apile cajas
function apilarCajas(array) {
    

    let acumulado = 0
    let pila = []
    
    // tengo que recorrer el array que me mandan
    for (let i = 0; i < array.length; i++) {
        //voy acumulando el peso para poder evaluar luego
        acumulado = acumulado + array[i].peso
        //tengo que evaluar si supera el peso
        if (acumulado < 50) {
            // si no lo supero entonces tengo que apilar
            pila.push(array[i])
        }
        //cuando supere el paso tengo que retornar No se puede crear la pila
        else {
            return "No se puede crear la pila"
        }
    }
    
    // tengo que evaluar si llega el array vacio
    if (array.length === 0) {
        return "Error"
    }
}


// el elemento es un string
// let elemento = ''
// recibira una array con un orden

// agregar elemento a la cola
//    cola.push(elemento)
// ingresar a una cola
