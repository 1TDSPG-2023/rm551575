const botaoCor = document.getElementById("botao-cor");

function gerarCor() {
    let cor = "#";
    let letras = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function mudarCor() {
    let cor = gerarCor();
    document.body.style.backgroundColor = cor;
}

botaoCor.addEventListener("click", mudarCor);



const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");
const entrada = document.getElementById("entrada");

function adicionarItem(event) {
  event.preventDefault();
  const novoItem = document.createElement("li");
  novoItem.innerHTML = entrada.value;
  lista.appendChild(novoItem);
  entrada.value = "";
}

formulario.addEventListener("submit", adicionarItem);



const imagens = ["lobo1.jpg", "lobo2.jpg", "lobo3.jpg", "lobo4.jpg", "lobo5.jpg", "lobo6.jpg"];
let indice = 0;

function trocarImagem() {
    indice++;
    if (indice >= imagens.length) {
        indice = 0;
    }
    imagem.src = "./img/" + imagens[indice];
    imagem.alt = "Lobo " + (indice + 1);
}

const botaoImagem = document.getElementById("botao-imagem");

botaoImagem.addEventListener("click", trocarImagem);



const texto = document.getElementById("texto");
const botaoOcultar = document.getElementById("botao-ocultar");
function ocultarTexto() {
    texto.style.display = "none";
}

botaoOcultar.addEventListener("click", ocultarTexto);