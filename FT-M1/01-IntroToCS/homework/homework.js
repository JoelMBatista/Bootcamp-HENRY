"use strict";

function BinarioADecimal(num) {
  const bin = parseInt(num, 2)
  return bin

  /*  SEGUNDA OPCION
  let decim = 0; chain = []
  for (let i = 0; i < num.length; i++) {chain.unshift(num[i])}
  for (let j = 0; j < chain.length; j++) {decim += Math.pow(2, j) * chain[j]}
  return decim
  */
}

function DecimalABinario(num) {
  const dec = Number(num).toString(2)
  return dec

  /*  SEGUNDA OPCION
  let bin = []; textbin = ''
  for (let i = 0; i < 100; i++) {
    if (num < 1) {break}
    bin.unshift(num % 2)
    num = Math.floor(num / 2)
  }
  for (let i = 0; i < bin.length; i++) {textbin += bin[i]}
  return textbin
  */
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
