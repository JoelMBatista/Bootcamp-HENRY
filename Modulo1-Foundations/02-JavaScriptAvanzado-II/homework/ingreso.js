function saludo(nombre,dist){
    if (dist === 159){return (nombre)=>`Hola ${nombre}`}
    if (dist === 753){return (nombre)=>`Hola ${nombre}`}
}

_159 = saludo('',159) 
_753 = saludo('',753)

console.log(_159('Daniel'))
console.log(_753('Martina'))
