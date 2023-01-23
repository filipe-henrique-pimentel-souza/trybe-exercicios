// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const nota = 100;

const porcentagem = nota / 100;

if (porcentagem >= 0.9) {
    console.log('A')
} else if (porcentagem >= 0.8) {
    console.log('B');
} else if (porcentagem >= 0.7) {
    console.log('C');
} else if (porcentagem >= 0.6) {
    console.log('D');
} else if (porcentagem >= 0.5) {
    console.log('E');
} else if (porcentagem < 0) {
    console.log('Erro');
} else if (porcentagem < 0.5) {
    console.log('F');
}