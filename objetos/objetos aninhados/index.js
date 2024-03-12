//conjunto de objetos aninhados
let spaceship = {
    //criando uma matriz para a propriedade passengers
    passengers: [{name: 'Armstrong'}],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  //variavel para obter um alimento favorito da lista do capitão
  let capFave = spaceship.crew.captain['favorite foods'][0];
  //variavel para obter o primeiro passageiro da nave
  let firstPassenger = spaceship.passengers[0]
  
  