// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

const idades = [15,24,42];
const nomes = ['Carolzita', 'Flavio', 'Noel'];
let menorIdade = 9999;
let nomeDoNovinho;
for (let i in idades) {
    if (idades[i] < menorIdade){
        // menorIdade = idades[i]
        nomeDoNovinho = nomes[i]
    }
}
console.log('A pessoa mais nova é: ' + nomeDoNovinho)