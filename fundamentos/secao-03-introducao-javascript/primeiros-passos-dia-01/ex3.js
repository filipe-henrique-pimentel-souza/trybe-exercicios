// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const elementoA = 2;
const elementoB = 0;
const elementoC = 2;

if (elementoA % 2 == 1 || elementoB % 2 == 1 || elementoC % 2 == 1){
    console.log(true)
    return true
} else {
    return false
}