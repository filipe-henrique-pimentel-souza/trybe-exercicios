// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.

// Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array,
//  que deverá ser retornado ao final pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

const arrayOfNumbers = (vector) => {
    const novaLista = [];
    for (const i of vector) {
        // console.log(i)
        for (const j of i) {
        // console.log(j)
            if (j % 2 == 0){
                novaLista.push(j)
            }
        }
    }
    return novaLista
}

console.log(arrayOfNumbers(vector))
