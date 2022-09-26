function encontrarNumero1(array1, n) {
    //array1 = [5,8,6,7,2] n=1

    for (let i=0; i < array1.length; i++) {
        if(array1[i]===n)
            return i
    }
   
    return -1
}

function encontrarNumero(array1, n) {
    //array1 = [5,8,6,7,2] n=1
    let respuesta = false
    array1.forEach((item,index) => {
        console.log(item,n);
        if(item == n){
            console.log(item);
            respuesta= true
        }
    });

    // for (let i=0; i < array1.length; i++) {
    //     console.log(i);
    //     if(array1[i]===n)
    //         return i
    // }
   
    return respuesta
}

console.log(encontrarNumero([5,8,6,7,2],8));

//array1 = [1,2,3,4,5,6] i=4
//array2 = [5,6,7] j=0
//                   
function encontrarElementosIguales(array1,array2) {
    
    let arrayResultado =[]

    for (let i = 0; i < array1.length; i++) {
        
        for (let j = 0; j < array2.length; j++){
            if(array1[i]===array2[j])
            {
                arrayResultado.push(array1[i])
            }
        }
        
    }
    return arrayResultado
}

encontrarElementosIguales([1,2,3,4],[3,5,6])

//i++1 === i= ii//i-- === i = i -1 
    //i+=
//3 === i = i + 3
//i*=3 === i = i * 3
//i=+1 === i = i + 1
// i+=25
//i=*2 === 2,4,8,
// 2=="2" true
//2==="2" false
//  if()

//[5,8,{name:'sergio'},9,2]
function mayor(array) {
    
    let mayor=array[2]
    
    array.forEach(function(item,i){
        if(item > mayor){
            mayor = item
        }
    })

    return mayor
}
console.log(mayor([5,8,6,9,2]));