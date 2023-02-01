document.getElementById("elementoOndeVoceEsta").parentElement.style.color =
  "green";
document.getElementById("primeiroFilhoDoFilho").innerHTML =
  "E dê um texto a ele.";
// console.log(document.getElementById("pai").childNodes[5]);

const sectionIrmao = document.createElement("section");
sectionIrmao.innerHTML = "Nova Section";
document
  .getElementById("elementoOndeVoceEsta")
  .parentElement.appendChild(sectionIrmao);
sectionIrmao.style.background = "yellow";

const filhoDeOndeVcEsta = document.createElement("h2");
filhoDeOndeVcEsta.innerHTML = "Filho de OndVcTa";
document.getElementById("elementoOndeVoceEsta").appendChild(filhoDeOndeVcEsta);

const filhoDeFilhoDoFilho = document.createElement("h1");
document
  .getElementById("primeiroFilhoDoFilho")
  .appendChild(filhoDeFilhoDoFilho);
filhoDeFilhoDoFilho.innerHTML = "Fi de Fi de Fi";

// console.log(filhoDeFilhoDoFilho.parentElement.parentElement.nextElementSibling);

// console.log(document.querySelectorAll('#elementoOndeVoceEsta'))

const removendoH2 = document.getElementById('elementoOndeVoceEsta').children;
console.log(removendoH2);
for (let i = 0; i < removendoH2.length; i++) {
   if (removendoH2[i].innerText.includes('VcTa')) { //aqui
    document.getElementById('elementoOndeVoceEsta').removeChild(removendoH2[i]);
   }
}
// Por quê o instrutor puxando lista por querySelectorAll (que gera NodeList) usar .includes() dentro do IF e eu puxando a lista por getElementById().childNodes (que também gera NodeList) não consegui usar .include?