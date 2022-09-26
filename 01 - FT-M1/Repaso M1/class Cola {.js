class Cola {
    constructor (){
        this.cola = []
    }
 
    agregarItem(item){
        this.cola.push(item)
    }
}

let cola1 = new Cola()
cola1.agregarItem(2)
cola1.agregarItem(5)
console.log(cola1.cola)
let cola2 = new Cola()