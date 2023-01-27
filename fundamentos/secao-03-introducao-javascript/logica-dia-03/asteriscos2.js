// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5

// *
// **
// ***
// ****
// *****

let tamanho = 5;
let asteriscos = tamanho;
let linha = '';
for (let i = 0; i < tamanho; i++){
    linha += '*'
    asteriscos--;//aqui
}
for (tamanho; tamanho > 0; tamanho--){
    console.log(linha)
}