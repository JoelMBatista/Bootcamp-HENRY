/*
$       [10101]  / De derecha a izquierda
* 
*            1 = 1 x 2^0 = 1 x 0 =  1
*            0 = 0 x 2^1 = 0 x 2 =  0
*            1 = 1 x 2^2 = 1 x 4 =  4  = 21
*            0 = 0 x 2^3 = 0 x 8 =  0
*            1 = 1 x 2^4 = 1 x16 = 16
*  
*/

function binarioAdecimal(num) {
    let decimal = 0
    for (let i = 0; i < num.length; i++) {
        decimal = decimal + num[i] * Math.pow(2, num.length - 1 - i)
    }
    return decimal
}

console.log(binarioAdecimal('1001'))


function decimalAbinario(num) {
  // Tú código acá
}

/*
function binarioAdecimal(num) {
    for (let i = 0; i < num.length; i++) {
        let num = 0
        num = num + parseInt(array[i]) * Math.pow(2, array.length - 1 - i)
    }
    return num
}

console.log(binarioAdecimal(0011))
*/
