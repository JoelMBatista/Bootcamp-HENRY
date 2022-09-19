function timeConversion(time) {
  // Recibe una hora en formato 12 horas y retorna la hora en formato 24 horas
  // Ejemplo:
  // timeConversion("12:00 AM") // "00:00"
  // timeConversion("12:00 PM") // "12:00"
  // timeConversion("27:00") // false
  // timeConversion("12:60") // false
  // timeConversion("09:00 PM") // "21:00"

  // SOLUCIÓN CON EXTRA CREDIT!!!!!
  if (
    time.slice(-2) === 'AM' &&
    parseInt(time.slice(0, 2), 10) < 13 && //revisamos horas
    parseInt(time.slice(3, 5), 10) < 60 && //revisamos minutos
    parseInt(time.slice(6, 8), 10) < 60 //revisamos segundos
  ) {
    if (time.slice(0, 2) === '12') {
      return '00' + time.slice(2, 8);
    } else {
      return time.slice(0, 8);
    }
  } else {
    if (
      time.slice(-2) === 'PM' &&
      parseInt(time.slice(0, 2), 10) < 13 &&
      parseInt(time.slice(3, 5), 10) < 60 &&
      parseInt(time.slice(6, 8), 10) < 60
    ) {
      let hora = parseInt(time.slice(0, 2), 10) + 12;
      if (hora === 24) {
        hora = '12';
      }
      return hora + time.slice(2, 8); //minutos y segundos.
    }
    return false;
  }
}

//SOLUCIÓN SIN EXTRA CREDIT!!

// if(time.includes('AM')) {
//         let horario = time.slice(0,-2)//crea un nuevo string, sin AM.
//         let horas = horario.split(':')//crea un array, separado por 2 puntos.
//         if(horas[0] === '12'){
//             return '00' + ':' + horas[1] + ':' + horas[2]
//         } else {
//             return horas[0] + ':' + horas[1] + ':' + horas[2]
//         }
//     }else if(time.includes('PM')){
//         let horario = time.slice(0,-2)//crea un nuevo string, sin PM.
//         let horas = horario.split(':')//crea un array, separado por 2 puntos.
//         if(horas[0] === '12'){
//             return horas[0] + ':' + horas[1] + ':' + horas[2]
//         } else {
//             let hora = Number(horas[0]) + 12;
//             horas[0] = hora.toString()
//             return horas[0] + ':' + horas[1] + ':' + horas[2]
//         }

//       }
