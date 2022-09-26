class ListaEnlazada {
    constructor(cabecera = null) {
        this.cabecera = cabecera
    }
}

let lista1 = new ListaEnlazada()

class Nodo {
    constructor(dato) {
        this.dato = dato
        this.siguiente = null                
    }
}


let nodo1 = new Nodo(6)

lista1.cabecera = nodo1

console.log(lista1.cabecera)

function engancharFinal(nodo,nodoFinal) {
    //recorrer la lista hasta que el nodo.siguiente null
    // entonces estaremaos parados en el ulitmo nodo
    while (nodo.siguiente !== null) {
        nodo = nodo.siguiente
    }
    // le enganchamos al ultimo el nodoFinal
    nodo.siguiente = nodoFinal
}
let nodo2 = new Nodo(10)

engancharFinal(lista1.cabecera,nodo2)

console.log(lista1.cabecera);

let nodo3 = new Nodo(12)

engancharFinal(lista1.cabecera,nodo3)

let nodo4 = new Nodo(3)

engancharFinal(lista1.cabecera,nodo4)

let lista2 = new ListaEnlazada()

ListaEnlazada.prototype.size = function(nodo){
    let tamaño = 0
    if(nodo === null)
    return 0
    while (nodo.siguiente !== null) {
        nodo = nodo.siguiente
        tamaño++
        
    }
    return ++tamaño
    
}

console.log(lista1.size(lista1.cabecera))
if(lista1.size(lista1.cabecera) > 2)
{
        console.log("exede el tamaño")
}
else
    return console.log("Esta bien")

ListaEnlazada.prototype.borrar = function (lista,buscado) {

    // pregunto si el dato del siguiente nodo es el buscado
    if(nodo.dato === buscado)

    while(nodo.siguiente !== null )
        if ((nodo).siguiente.dato === buscado) {
        // lo encontre
            nodo.siguiente = (nodo.siguiente).siguiente
    }


}



if(lista1.cabecera === null)
    console.log("vacia");
else
    console.log("tiene elementos")
    
console.log(lista1);
