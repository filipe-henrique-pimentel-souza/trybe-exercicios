const pessoa = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
}

pessoa.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(`A jogadora ${pessoa.name} ${pessoa.lastName} foi eleita a melhor do mundo ${pessoa['bestInTheWorld'].length} vezes.`)
console.log(`A jogadora possui ${pessoa['medals']['golden']} medalhas de ouro e ${pessoa['medals']['silver']} medalhas de prata.`)