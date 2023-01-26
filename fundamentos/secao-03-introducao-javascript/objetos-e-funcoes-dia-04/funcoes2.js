// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const a = 3;
const b = 2;
const c = 2;

function maior(a,b,c) {
    if (a > b && a> c) {
        return a
    } else if (b > c){
        return b
    } else {
        return c
    }
}
console.log(maior(a,b,c))