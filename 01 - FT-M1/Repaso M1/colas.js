
let arrayPersonas=[{
    fullname: "Leonardo Guerrero",
    age: 26,
    ticket: 1
  },
  {
    fullname: "Leonardo Castro",
    age: 30,
    ticket: 2
  },
  {
    fullname: "Kevin C",
    age: 23,
    ticket: 3
  },{
    fullname: "Sebas Lz",
    age: 28,
    ticket: 4
  },{
    fullname: "Ricardo David Ocampo",
    age: 33,
    ticket: 5
  },
]

function ArmarCola(array) {
    let cola = []
    for (let i = 0; i < array.length; i++) {
        cola.push(array[i])
    }
    return cola
}

ArmarCola(arrayPersonas)