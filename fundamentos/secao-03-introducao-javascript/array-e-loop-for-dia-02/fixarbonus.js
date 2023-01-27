// Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers.sort())
// OK - Fazer 1 reduce para achar o menor número
// 1.1 - Tirar o elemento e dar um push num novo array.
// 1.2 - Enquanto numbers.length > numbersOrdenadoMenor repete o loop.

// const numbersOrdenadoMenor = [];
// while (numbers.length > numbersOrdenadoMenor.length) {
//     let menor = numbers.reduce((a, b) => {
//         if (a < b) {
//             return a;
//         } else {
//             return b;
//         }
//     }
//     )
//     numbersOrdenadoMenor.push(menor)
//     delete numbers[numbers.indexOf(menor)]
//     console.log(numbersOrdenadoMenor)
// }

// const numbersOrdenadoMaior = [];
// while (numbers.length > numbersOrdenadoMaior.length) {
//     let maior = numbers.reduce((a, b) => {
//         if (a > b) {
//             return a;
//         } else {
//             return b;
//         }
//     }
//     )
//     numbersOrdenadoMaior.push(maior)
//     delete numbers[numbers.indexOf(maior)]
//     console.log(numbersOrdenadoMaior)
// }