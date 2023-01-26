// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo,
//  e caso não seja nem positivo e nem negativo retorne “zero”.

let valor = (numero) => {
    if(numero > 0){
        return 'positive'
    } else if (numero == 0){
        return 'zero'
    } else {
        return 'negative'
    }
}

console.log(valor(3))