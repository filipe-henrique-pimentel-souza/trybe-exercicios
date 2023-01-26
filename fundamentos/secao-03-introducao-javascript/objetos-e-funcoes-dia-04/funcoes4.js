// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo.
//  Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido,
//  o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

const ang1 = 100;
const ang2 = 50;
const ang3 = 30;

const testarAngulo = (a,b,c) => {
    if (a < 1 || b < 1 || c < 1){
        return 'Erro'
    } else if (a + b + c == 180) {
        return true;
    } else {
        return false;
    }
}

console.log(testarAngulo(ang1, ang2, ang3))