//funcao adiciona 2 ao que é passado
const addTwo = num => {
    return num + 2;
  }
  //funcao de ordem superior que verifica o trabalho da funcao acima
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val)
    if(checkA === checkB) {
      return checkB
    } else {
      return "inconsistent results"
    }
  }
  //invocando a funcao com dois argumentos
  console.log(checkConsistentOutput(addTwo, 4));
  