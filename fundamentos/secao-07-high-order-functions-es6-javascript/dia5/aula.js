// const primeNumbers = [17, 23, 37];

// const [primeNumbers0,, primeNumbers2] = primeNumbers;

// const sum = (a, b) => {
//   console.log(a + b);
// };

// sum(primeNumbers0, primeNumbers2); // 54

// // Produza o mesmo resultado acima, porém utilizando array destructuring

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';
// [animal, bebida, comida] = [comida, animal, bebida];
// console.log(comida, animal, bebida); // arroz gato água

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];
// const [, , , ...pares] = numerosPares;
// console.log(pares); // [6, 8, 10, 12];

// // Utilize array destructuring para produzir o resultado esperado pelo console.log acima

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
//   // nationality: 'Europeu'
// };

// const { nationality = 'Brazilian' } = person;
// console.log(nationality); // Brazilian
// console.log(person)

// const position2d = [1.0, 2.0];
// const [x, y, z = 0] = position2d;

// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 0
// console.log(position2d)

// const getNationality = ({ firstName, nationality = 'Brazilian' }) =>
//   `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude,
// });

// console.log(getPosition(-19.8157, -43.9542));

const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8));
