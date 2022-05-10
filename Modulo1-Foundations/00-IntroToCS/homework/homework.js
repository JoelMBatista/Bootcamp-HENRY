'use strict'

function BinarioADecimal(num) {
  let bin=0
  for (let i = 0; i < num.length; i++){
    bin = bin + num[i] * Math.pow(2,(num.length-1 - i))
  }
  return bin
}

function DecimalABinario(num) {
  // tu codigo aca

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}