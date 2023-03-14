// Nova pessoa contratada
// const minhaFuncao = (nomeCompleto) => ({
//     nomeCompleto,
//     email: `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`,
//   });

//   const newEmployees = (segunda) => {
//     const employees = {
//       id1: segunda('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: segunda('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: segunda('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     };
//     return employees;
//   };

//   console.log(newEmployees(minhaFuncao));

// Sorteador de loteria
// const checador = (testado, random) => testado === random;

// const sorteio = (apostado, checador) => {
//   const sorteado = Math.ceil(Math.random() * 5);
//   const chegagem = checador(apostado, sorteado);
//   return chegagem ? 'Parabéns, você ganhou' : 'Tente novamente';
// };

// console.log(sorteio(3, checador));

// Corretor automático de exame
// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// const mh = (arrGabarito, arrProvaAluno, fComparador) => {
//   return fComparador(arrGabarito, arrProvaAluno);
// };

// const fComparador = (arrGabarito, arrProvaAluno) => {
//   let nota = 0;
//   arrProvaAluno.forEach((element, i) => {
//     if (element === arrGabarito[i]) {
//       nota += 1;
//     } else if (element === 'N.A') {
//     } else {
//       nota -= 0.5;
//     }
//   });
//   return nota;
// };

// console.log(mh(RIGHT_ANSWERS, STUDENT_ANSWERS, fComparador));

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// // Adicione o código do exercício aqui:
// const expectedResult = 'Stephen King';
// const authorBornIn1947 = (arr, nomeLivro) => {
//   // escreva aqui o seu código
//   return arr.find((element) => element.author.name === nomeLivro);
// };
// console.log(authorBornIn1947(books, expectedResult))

// const expectedResult = 'Duna';
// const smallerName = (books) => {
//   let nameBook =
//     '.............................................................................';
//   books.forEach((element) => {
//     if (element.name.length < nameBook.length) {
//       nameBook = element.name;
//     }
//   });
//   // escreva aqui o seu código

//   // Variável nameBook que receberá o valor do menor nome;
//   return nameBook;
// };

// console.log(smallerName(books));

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// const getNamedBook = () => {
//   // escreva seu código aqui
//   return books.find((element) => element.name.length === 26);
// };
// console.log(getNamedBook())

// const expectedResult = false;

// function everyoneWasBornOnSecXX(books) {
//   // escreva seu código aqui
//   return books.every((element) => element.author.birthYear > 1900 && element.author.birthYear <= 2000);
// }
// console.log(everyoneWasBornOnSecXX(books))

// const expectedResult = true;

// const someBookWasReleaseOnThe80s = (books) => {
//   // escreva seu código aqui
// return books.some((element) => element.releaseYear >= 1980 && element.author.birthYear < 1990)
// }
// console.log(someBookWasReleaseOnThe80s(books))

// const expectedResult = false;

// const authorUnique = (books) => {
//   // escreva seu código aqui
// return books.
// }


