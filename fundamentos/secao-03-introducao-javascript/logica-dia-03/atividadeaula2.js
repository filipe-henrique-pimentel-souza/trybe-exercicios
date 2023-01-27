//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

//  if (quantidade == 50) { "mensagem xxx"}

// Como descobre se é divisível por 3?
// R: X % 3 == 0    OK

// Criar uma variável que conte quantos são divisíveis.
// Percorrer o for

let divisiveis = 0;

for (let i = 2; i <= 150; i+=1){

    if (i % 3 == 0) {
        divisiveis++
    }
}

if (divisiveis == 50) {
    console.log("Mensagem secreta")
}

console.log(divisiveis)