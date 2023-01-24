// Novo Array; cada valor sendo o valor * array[i+1]
// No último índice, multiplica por 2.

// For percorrendo cada, multiplicando ele * array[i+1]
// novoNumbers.push
// Se array[i+1] = undefined ou != typeOf number, multiplica por 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const novoNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    novoNumbers.push(numbers[i] * numbers[i + 1])
    if (numbers[i + 1] == undefined) {
        novoNumbers[i] = numbers[i] * 2
    }
}
console.log(novoNumbers)