let primos = [];

// 5 é primo?
// 5 / 2; ... 5/4; se algum deles tiver resto 0, não é primo.
for (let ePrimo = 2; ePrimo <= 50; ePrimo++) {

    primos.push(ePrimo);
    for (let i = 2; i < ePrimo; i++) {
        if (ePrimo % i == 0) {
            console.log('Não é primo')
            primos.pop()
            break
        }
    }

}
console.log(primos)