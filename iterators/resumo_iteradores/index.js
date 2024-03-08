const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

/*método .find() q retorna undefined quando nenhum elemento no array satisfaz a condição de busca*/
cities.find(city => console.log('Have you visited ' + city + '?'));

/*método .filter() q retorna uma nova matriz com apenas os elementos que possuam mais de 7 caracteres*/
const longCities = cities.filter(city => city.length > 7);
console.log(longCities)

/*método .reduce() q itera sobre o array de cidades e concatena a 1ª letra de cada cidade a uma string inicializada com o valor "C"*/
const word = cities.reduce((acumulador, currentVal) => {
  return acumulador + currentVal[0]
}, "C");
console.log(word)

/*método .map() que retorna uma nova matriz de números subtraidos por 5*/
const smallerNums = nums.map(num => num - 5);
console.log(smallerNums)

/*método .some() q verifica se pelo menos um elemento do array é menor q 0*/
nums.some(num => num < 0);
