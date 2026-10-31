// pega o elemento pelo id
// const paragrafo = document.getElementById("mensagem"); 
// const titulo = document.getElementById("titulo");

// console.log(paragrafo);
// console.log(titulo);
// //Altera o texto
// paragrafo.textContent = "O Dom permitiu que o JS me alterasse!";
// paragrafo.style.color = "blue";
// paragrafo.style.borderBottom = "2px solid blue";

// const bottom = document.getElementById("btn-acao");
// console.log("Tag do botão:" + botao.tagName);

//por TAG
const primeiroP = document.querySelector("p");
primeiroP.style.backgroundColor = "yellow";

const alerta = document.querySelector(".alerta");
console.log("POr Classe:", alerta.textContent);

const span = document.querySelector("#unico");
console.log(span);

span.textContent = "Alterado pelo querySelector";

const pNoDiv = document.querySelector("div p");
pNoDiv.style.fontweight = "bold";
pNoDiv.style.color = "red"