const salarioBruto = 3400;

function salarioLiquido(salarioBruto) {

    let descontos = 0;

    if (salarioBruto <= 1556.94) {
        console.log('Desconto de 8%')
        descontos += salarioBruto * 0.08;
    } else if (salarioBruto <= 2594.92) {
        console.log('Desconto de 9%')
        descontos += salarioBruto * 0.09;
    } else if (salarioBruto <= 5189.82) {
        console.log('Desconto de 11%')
        descontos += salarioBruto * 0.11;
    } else if (salarioBruto > 5189.82) {
        console.log('Desconto de R$570,88')
        descontos += 570.88;
    }

    if (salarioBruto <= 1903.98) {
        console.log('Isento de IR')
    } else if (salarioBruto <= 2826.65) {
        console.log('Desconto de 7.5% - R$142.80')
        descontos += salarioBruto * 0.075 - 142.8;
    } else if (salarioBruto <= 3751.05) {
        console.log('Desconto de 15% - R$354.80')
        descontos += salarioBruto * 0.15 - 354.8;
    } else if (salarioBruto <= 4664.68) {
        console.log('Desconto de 22.5% - R$636,13')
        descontos += salarioBruto * 0.225 - 636.13;
    } else if (salarioBruto > 4664.68) {
        console.log('Desconto de 27.5% - R$869,36')
        descontos += salarioBruto * 0.275 - 868.36;
    }
    console.log("Descontos totais de" + descontos)
    return salarioBruto - descontos
}

console.log(salarioLiquido(salarioBruto));