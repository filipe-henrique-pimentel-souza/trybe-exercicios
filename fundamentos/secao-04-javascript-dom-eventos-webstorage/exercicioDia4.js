const localEstilos = JSON.parse(localStorage.getItem("Estilos_Texto"));
let localBackgroundBody = localStorage.getItem("backGround_Body");
document.body.style.backgroundColor = localBackgroundBody;

const tagP = document.querySelector("p");
for (const i in localEstilos) {
  tagP.style[i] = localEstilos[i]
}

// Criar um evento para cada botão de Cor de Fundo;
//  Puxar os botões dentro de cor de fundo.
const botoesDeFundo = document.querySelectorAll("#fundo button");
const mudaCorDeFundo = (evento) => {
  document.body.style.backgroundColor = evento.target.innerText;
  localBackgroundBody
    ? localStorage.setItem("backGround_Body", evento.target.innerText)
    : localStorage.setItem(
        "backGround_Body",
        document.body.style.backgroundColor
      );
};
botoesDeFundo.forEach((element) =>
  element.addEventListener("click", mudaCorDeFundo)
);

const botoesDeFonte = document.querySelectorAll("#corFonte button");
const mudaCorDaFonte = (evento) => {
  tagP.style.color = evento.target.innerText;
};
botoesDeFonte.forEach((element) => {
  element.addEventListener("click", mudaCorDaFonte);
});

// Tamanho da Fonte
const botoesTamanhoFonte = document.querySelectorAll("#tamanho button");
const mudaTamanhoFonte = (evento) => {
  tagP.style.fontSize = evento.target.innerText;
};
botoesTamanhoFonte.forEach((element) => {
  element.addEventListener("click", mudaTamanhoFonte);
});

// Espaçamento entre linhas
const botoesEspacamento = document.querySelectorAll("#espacamento button");
const mudaEspacamento = (evento) => {
  tagP.style.lineHeight = evento.target.innerText;
};

botoesEspacamento.forEach((element) => {
  element.addEventListener("click", mudaEspacamento);
});

// Tipo de Fonte
const botaoDeFonte = document.querySelectorAll("#fonte button");
const mudaFonte = (evento) => {
  tagP.style.fontFamily = evento.target.innerText;
};

botaoDeFonte.forEach((element) => {
  element.addEventListener("click", mudaFonte);
});

const dados_do_Texto = {};

// if(localStorage["Estilos_Texto"])(console.log('true'))

const salvarEstilos = () => {
  [...tagP.style].forEach(element => dados_do_Texto[element] = tagP.style[element])
    localStorage.setItem("Estilos_Texto", JSON.stringify(dados_do_Texto));
};

addEventListener("beforeunload", salvarEstilos);
