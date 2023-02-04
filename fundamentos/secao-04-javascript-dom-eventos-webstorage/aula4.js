localStorage.setItem("chave", "energia");

const jogador = {
  vida: 100,
  mana: 100,
  magicLevel: 0,
  sword: 0,
};

localStorage.setItem('jogador', JSON.stringify(jogador))

const recebendoJogador = JSON.parse(localStorage.getItem('jogador'));
recebendoJogador.magicLevel = 1
console.log(recebendoJogador)
localStorage.setItem('jogador', JSON.stringify(recebendoJogador))

document.cookie = 'nome=Filipe; max-age=3600; path=/; domain='
// document.cookie = 'nome=Henrique; expires=Thu, 18 Dec 2019 12:00:00 UTC'
console.log(document.cookie)
