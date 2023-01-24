const num1 = 10;
const num2 = 1;

switch (num1 == num2) {
    case true:
        console.log(num1 + num2)
        break;
    case false:
        console.log(num1 * num2)
        break;

    default:
        console.log('Erro')
        break;
}