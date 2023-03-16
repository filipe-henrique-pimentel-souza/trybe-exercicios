// const isEven = num => new Promise((resolve, reject) => {
//     if (num % 2 === 0) {
//         resolve(true);
//     } else {
//         reject(new Error('Número não é par'));
//     }
// });

// 1. Crie uma promise que retorne um valor inteiro aleatório entre 0 e 10:
const generateRandomNumber = () => Math.round(Math.random() * 10);
// const aleatorio = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const numeroAleatorio = generateRandomNumber();
//       if (numeroAleatorio > 5) resolve(numeroAleatorio);
//       else reject(new Error(`O número ${numeroAleatorio} é inválido`));
//     }, 1000);
//   });

// aleatorio()
//   .then((response) => console.log(`Parabéns, tirou ${response}.`))
//   .catch((error) => console.log(`${error.message}`))
//   .finally(() => console.log('resolvido'));

// 2. Crie uma promise que verifique se um número é par:
const ehPar = () =>
  new Promise((resolve, reject) => {
    const sorteio = generateRandomNumber();
    if (sorteio % 2 === 0) resolve(sorteio);
    else reject(new Error('Ímpar'));
  });

ehPar().then((resolve) => console.log(`${resolve} é par`)).catch((error) => console.log(`${error.message}`)).finally(() => console.log("é isso"))
