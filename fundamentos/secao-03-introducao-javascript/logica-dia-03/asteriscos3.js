let tamanho = 7;
let asteriscos = 1;
let espacos = tamanho - asteriscos;

for (let i = 0; i < tamanho; i++) {
    linha = [];
    espacosOperados = espacos;
    asteriscosOperados = asteriscos;
    while (espacosOperados > 0) {
        linha.push(' ')
        espacosOperados--
    }
    while (asteriscosOperados > 0) {
        linha.push('*')
        asteriscosOperados--
    }
    
    console.log(linha.join(''))
    espacos--
    asteriscos++
}
// Se o índice da palavra for != asterisco, push ' '
// fazer um for para percorrer isso

