//criando um objeto com duas propriedades
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    //adicionando um método q retorna uma string
    provideInfo() {
      return (`I am ${this.model} and my current energy level is ${this.energyLevel}.`)
    }
  };
  /*verificando se o método tem acesso às propriedades de robot*/
  console.log(robot.provideInfo())