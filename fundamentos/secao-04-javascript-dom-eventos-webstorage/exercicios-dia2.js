const h1Requisito1 = document.createElement("h1");
h1Requisito1.innerHTML = "TrybeTrip - Agência de Viagens";
document.getElementsByTagName("body")[0].appendChild(h1Requisito1);

const elementoMain = document.createElement("main");
const classe = document.createAttribute("class");
classe.value = "main-content";
elementoMain.setAttributeNode(classe);
document.getElementsByTagName("body")[0].appendChild(elementoMain);

const section1 = document.createElement("section");
const classeSection1 = document.createAttribute("class");
classeSection1.value = "center-content";
section1.setAttributeNode(classeSection1);
elementoMain.appendChild(section1);

const tagP1 = document.createElement("p");
section1.appendChild(tagP1);
tagP1.innerHTML = 'Tag "p" requisito 4.';

const sectionLeft = document.createElement("section");
elementoMain.appendChild(sectionLeft);
const left_content = document.createAttribute("class");
left_content.value = "left-content";
sectionLeft.setAttributeNode(left_content);

const sectionRight = document.createElement("section");
elementoMain.appendChild(sectionRight);
const right_content = document.createAttribute("class");
right_content.value = "right-content";
sectionRight.setAttributeNode(right_content);

const imagemSmall = document.createElement("img");
sectionLeft.appendChild(imagemSmall);
const srcImagemSmall = document.createAttribute("src");
srcImagemSmall.value = "https://picsum.photos/200";
imagemSmall.setAttributeNode(srcImagemSmall);
const classeImagemSmall = document.createAttribute("class");
classeImagemSmall.value = "small-image";
imagemSmall.setAttributeNode(classeImagemSmall);

const listaUL = document.createElement("ul");
sectionRight.appendChild(listaUL);
const classeUL = document.createAttribute("id");
classeUL.value = "ul10";
listaUL.setAttributeNode(classeUL);

const listaDeContagem = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

for (const numero of listaDeContagem) {
  const item = document.createElement("li");
  listaUL.appendChild(item);
  item.innerHTML = numero;
}

for (let i = 1; i <= 3; i++) {
  const element = document.createElement("h3");
  elementoMain.appendChild(element);
  element.innerHTML = `Texto H3 ${i}`;
  const IdDoH3 = document.createAttribute("id");
  IdDoH3.value = `h3_${i}`;
  element.setAttributeNode(IdDoH3);
}

const h3EmMain = document.querySelectorAll("main h3");
for (let h3 = 0; h3 < h3EmMain.length; h3++) {
  const element = document.createAttribute("class");
  element.value = "description";
  h3EmMain[h3].setAttributeNode(element);
}

const classeH1Inicial = document.createAttribute("class");
classeH1Inicial.value = "title";
h1Requisito1.setAttributeNode(classeH1Inicial);

for (const i of elementoMain.childNodes) {
  if (i.classList[0] === "left-content") {
    elementoMain.removeChild(i)
  }
}

sectionRight.style.marginRight = 'auto';

section1.parentElement.style.backgroundColor = 'green';

listaUL.removeChild(listaUL.lastElementChild);
listaUL.removeChild(listaUL.lastElementChild);
