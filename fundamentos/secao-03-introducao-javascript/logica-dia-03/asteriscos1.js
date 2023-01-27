// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****

// Para escrever isso:
// Variável = 5, e a cada * diminui 1.
let tamanho = 5;
let asteriscos = tamanho;
let linha = '';
for (let i = 0; i < tamanho; i++){
    linha += '*'
    asteriscos--;
}
for (tamanho; tamanho > 0; tamanho--){
    console.log(linha)
}