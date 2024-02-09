let raceNumber = Math.floor(Math.random() * 1000);
let registroCedo = true
let idadeCorredor = 28

if(idadeCorredor >= 18 && registroCedo === true) {
  raceNumber += 1000
}

if(idadeCorredor >= 18 && registroCedo === true) {
  console.log(`${raceNumber}, você correrá às 9h30.`)
} else if(idadeCorredor >= 18 && registroCedo === false) {
  console.log(`${raceNumber}, você correrá às 11h.`)
} else if(idadeCorredor < 18) {
  console.log(`${raceNumber}, você correrá às 12h30.`)
}