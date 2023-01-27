let idades = ['java', 'javascript', 'python', 'html', 'css'];

// Criar 2 variáveis para maior e menor;
// Se a palavra tiver mair letras que a palavra da variável, troca.
let menor = '';
let maior = '';
for (let i = 0; i < idades.length; i++) {
    if (idades[i].length > maior.length) {
        maior = idades[i]
    }
}
console.log(maior)

for (let i of idades) {
    if (menor.length == 0) {
        menor = i
    } else if (i.length < menor.length) {
        menor = i
    }
}

console.log(menor)