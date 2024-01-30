//definindo uma variavel constante em kelvin
const kelvin = 280
//definindo a variavel em celsius, que é klevin - 273
const celsius = kelvin - 273
//definindo a variavel em fahrenheit
let fahrenheit = celsius * (9/5) + 32
//usando o método Math.floor() para retornar o valor de fahrenheit em inteiro
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)