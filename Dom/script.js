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
// const primeiroP = document.querySelector("p");
// primeiroP.style.backgroundColor = "yellow";

// const alerta = document.querySelector(".alerta");
// console.log("POr Classe:", alerta.textContent);

// const span = document.querySelector("#unico");
// console.log(span);

// span.textContent = "Alterado pelo querySelector";

// const pNoDiv = document.querySelector("div p");
// pNoDiv.style.fontweight = "bold";
// pNoDiv.style.color = "red"



// const itens =document.querySelectorAll(".item");
// console.log(itens);

// for (let i = 0; i < itens.length; i++) {
//     console.log("Item" + (i + 1) + ": " + itens[i].textContent);

//     if (i % 2 !== 0) {
//         itens[i].style.backgroundColor = "#ccc"
//     }
// }


// for (const item of itens) {
//     item.style.fontweight = "bold";
// };


// itens.forEach((item, index) => {
//     console.log(index + "; " + item.textContent);
// });


// const saudacao =document.getElementById("saudacao");
// const nome = document.getElementById("nome");
// const link = document.getElementById("link");

// function mudarDados () {
//     saudacao.textContent = "O conteudo da div foi alterado";
//     nome.value = "Novo valor (Vitor)";
//     saudacao.innerHTML += `<p style="color: blue;">Conteúdo injetado com innerHTML</p>`
//     link.setAttribute("href", "https://www.google.com");
//     console.log(link.getAttribute("href"));
//     saudacao.classList.add("destaque");
// }

// document.getElementById("btn-mudar").addEventListener("click", mudarDados);


const lista = document.getElementById("lista");

function adicionarItem() {
    const novoItem = document.createElement("li");
    novoItem.textContent = "Novo Item ás " + new Date().toLocaleTimeString();
    lista.appendChild(novoItem);
}

function removerUltimo() {

    const ultimo = lista.lastElementChild;

    if (ultimo) {
        lista.removeChild(ultimo)
        console.log("Ultimo item removido")
    } else {
        console.log("Lista vazia. Nada a remover")
    }
}

document.getElementById("btn-add").addEventListener("click", adicionarItem);
document.getElementById("btn-remover").addEventListener("click", removerUltimo);