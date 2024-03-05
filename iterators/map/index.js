const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

/*criando uma nova matriz que contem o 1º caractere de cada cadeia de caracteres na matriz animals*/
const secretMessage = animals.map(word => {
  return word[0]
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

/*uma nova matriz que divida nos números em bigNumbers por 100, utilizando o método .map()*/
const smallNumbers = bigNumbers.map(dividir => {
  return dividir / 100;
})
console.log(smallNumbers)