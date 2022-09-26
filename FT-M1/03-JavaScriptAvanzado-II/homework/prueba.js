function counter() {
  const contador = counter++;
  return contador;
}
const unContador = counter()
console.log(unContador());    // 1
unContador()     // 2
unContador()     // 3

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2
otroContador()      // 3
