// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Ameixa', 'Maça', 'Uva'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Leite Condensado', 'Paçoca', 'Sucrilhos'];

// const fruitSalad = (fruit, additional) => {
//   // Escreva sua função aqui
//   return [{...fruit} , {...additional}]
// };

// console.log(fruitSalad(specialFruit, additionalItens));

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};
// "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"
const { name: ehONome, age: idade, nationality: pais } = user;
const { profession, squad, squadInitials } = jobInfos;
const unidos = {
    ...user,
    ...jobInfos
};
console.log(unidos)
console.log(`Hi, my name is ${ehONome}, I'm ${idade} years old and I'm ${pais}. I work as a ${profession} and my squad is ${squad}`);
