let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// for (let i in numbers){
//     console.log(numbers[i])
// }

// for (let i of numbers){
//     console.log(i)
// }

// Some todos os valores contidos no array e imprima o resultado
let soma = 0;

// numbers.forEach(element => {
//     console.log(element)
//     soma += element;
//     console.log(soma)
// });

var sum = numbers.reduce((a, b) => { return a + b; });

console.log(sum)

// Calcule e imprima a média aritmética dos valores contidos no array;

console.log(sum / numbers.length)

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”.
if (sum / numbers.length > 20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor menor que 20")
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let reduce = numbers.reduce((primeiro, segundo) => {
    if (primeiro > segundo) { return primeiro }
    else { return segundo }
})
console.log(reduce)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let impares = 0;

for (let i of numbers) {
    if (i % 2 != 0) {
        impares++
    }
}
console.log(impares)

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menor = numbers.reduce((primeiro, segundo) => {
    if (primeiro < segundo){
        return primeiro
    } else {
        return segundo
    }
})
console.log(menor)

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let arrayFor = [];
for (let index = 0; index <= 25; index++) {
    arrayFor.push(index);
}
// console.log(arrayFor)

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (const iterator of arrayFor) {
    console.log(iterator)
}