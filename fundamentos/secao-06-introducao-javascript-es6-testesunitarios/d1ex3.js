const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const verifyPair = (obj, chave, valor) => {
//   // console.log(Object.keys(obj).filter(element => element === chave).length > 0)
//   console.log(obj[chave] === valor)
// }
// verifyPair(lesson3, 'materia', 'Matemática')

// const noiteL2 = (obj, chave, valor) => {
//     obj[chave] = valor
// }
// noiteL2(lesson2, 'Noite', 'isso')
// console.log(lesson2)

// const keys = obj => Object.keys(obj)
// console.log(keys(lesson1))

// const tamanho = obj => (Object.keys(obj)).length
// console.log(tamanho(lesson1))

// const valores = obj => Object.values(obj)

const allLessons = {};
Object.assign(allLessons, { lesson1 }, { lesson2 }, { lesson3 });
// console.log(allLessons)

const estudantes = (obj) => (Object.values(obj)).reduce((element,element1) => element['numeroEstudantes'] + element1['numeroEstudantes'])
// const estudantes = (obj) => (Object.values(obj)).reduce((element,element1) => element + element1['numeroEstudantes'], 0)
console.log(estudantes(allLessons))

// const getValueByNumber = (obj, i) => {
//   return Object.values(obj)[i]
// }
// console.log(getValueByNumber(lesson1,0))

// BÔNUS 1
// console.log(
//   Object.values(allLessons).reduce((a, b) => {
//     if (b["materia"] === "Matemática") {
//       return a + b["numeroEstudantes"];
//     }
//     return a;
//   }, 0)
// );

// // BÔNUS 2
// const createReport = (obj, prof) => {
//   const relatorio = {
//     professor: prof,
//     aulas: [],
//     estudantes: 0,
//   };
//   Object.values(obj).forEach((element) => {
//     if (element['professor'] === prof) {
//       relatorio.aulas.push(element['materia']);
//       relatorio.estudantes += element['numeroEstudantes'];
//     }
//   });
//   return (relatorio);
// };
// console.log(createReport(allLessons, 'Maria Clara'));
