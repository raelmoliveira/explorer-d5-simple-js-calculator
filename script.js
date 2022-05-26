// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;

// Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

// - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

alert(`Bem-vindo à Calculadora JavaScript! Iremos fazer diversas operações matemáticas com os números inseridos.`)

let numberOne = Number(prompt(`Insira o primeiro número:`))
let numberTwo = Number(prompt(`Insira o segundo número:`))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const divRest = numberOne % numberTwo

let numberOddOrEven
let numberEqual

if(sum % 2 == 0) {
  numberOddOrEven = `par`
} else {
  numberOddOrEven = `ímpar`
}

if(numberOne == numberTwo) {
  numberEqual = `iguais`
} else {
  numberEqual = `diferentes`
}

alert(`A soma entre os dois números é de ${sum}`)
alert(`A subtração entre os dois números é de ${sub}`)
alert(`A multiplicação entre os dois números é de ${mult}`)
alert(`A divisão entre os dois números é de ${div}`)
alert(`O resto da divisão entre os dois números é de ${divRest}`)
alert(`A soma entre os dois números retornou um número ${numberOddOrEven}`)
alert(`Os dois números inseridos são ${numberEqual}`)