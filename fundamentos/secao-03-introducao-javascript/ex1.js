// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica.
//  Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)



// Utilize if/else para escrever um código que retorne o maior de dois números.
//  Defina, no começo do seu código, duas constantes com os valores que serão comparados.
const elementoA = 170;
const elementoB = 5;
const elementoC = 5;

// if (elementoA + elementoB + elementoC == 180 && elementoA > 0 && elementoB > 0 && elementoC > 0) {
//     console.log('true')
//     return 'true'
// } else {
//     return 'false'
// }


// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma
//  peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = 'peao';

peca = peca.toLowerCase

switch (peca) {
    case 'peao':
        return '1 ou 2 para frente'
        break;
    case 'cavalo':
        return 'L'
        break;
    case 'torre':
        return 'linha reta'
        break;
    case 'bispo':
        return 'diagonal'
        break;
    default:
        return 'peça inválida'
        break;
}