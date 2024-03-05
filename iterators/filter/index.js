const randomNumbers = [375, 200, 3.14, 7, 13, 852];

/*nova matriz que retorna valores de randomNumbers menores que 250*/
const smallNumbers = randomNumbers.filter(numbers => {
  return numbers < 250;
})
console.log(smallNumbers)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

/*nova matriz q que retorna de favoriteWords somente as strings que tenham mais de 7 caracteres*/
const longFavoriteWords = favoriteWords.filter(comprimento => {
  return comprimento.length > 7;
})
console.log(longFavoriteWords)
