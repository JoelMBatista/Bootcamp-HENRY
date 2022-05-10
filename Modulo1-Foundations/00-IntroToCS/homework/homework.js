'use strict'

function BinarioADecimal(num) {
  let decimal=0
  for (let i = 0; i < num.length; i++){
    decimal = decimal + num[i] * Math.pow(2,(num.length-1 - i))
  }
  return decimal
}

function DecimalABinario(num) {
  let binario=''
  while(num > 0){
    binario = num % 2 + binario
    console.log(binario)
    num = Math.floor(num / 2)
  }
  return binario
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}