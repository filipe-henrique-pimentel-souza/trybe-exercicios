const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

const classeTechLi = (evento) => {
  const alteraClasseLi = document.querySelectorAll('[id$="-li"]');
  for (const i of alteraClasseLi) {
    i.removeAttribute("class");
  }
  evento.target.setAttribute("class", `tech`);
};

const techLiElements = document.querySelectorAll('[id$="-li"]');
techLiElements.forEach((element) => {
  element.addEventListener("click", classeTechLi);
});

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// Capturar #input; criar evento para ele; o item que tiver class tech recebe input.value
const inputTexto = document.getElementById('input');
const textoLi = (evento) => {
console.log(evento.data)
const classTech = document.getElementsByClassName('tech');
classTech[0].innerText += evento.data;
}
inputTexto.addEventListener('input', textoLi);

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
const redirecionarTop3 = (evento) => {
  window.open('https://github.com/filipe-henrique-pimentel-souza', '_blank');
}

const top3 = document.getElementById('my-spotrybefy');
top3.addEventListener('dblclick', redirecionarTop3)

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
const mudaCorTop3 = (evento) => {
top3.style.color = 'brown';
}
top3.addEventListener('mouseover', mudaCorTop3);

// Segue abaixo um exemplo do uso de event.target:

const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
};

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
