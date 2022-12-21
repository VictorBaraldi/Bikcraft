const menu = document.querySelectorAll(".header-menu a");

function pageSelect(value) {
  const href = value.href;
  const location = window.location.href;

  if (location.includes(href)) {
    value.classList.add("ativo");
  } else {
  }
}

menu.forEach(pageSelect);

//Ativar itens

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Perguntas

const perguntas = document.querySelectorAll(".perguntas button");

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

function ativarPergunta(e) {
  const target = e.currentTarget;
  const controls = target.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativo = resposta.classList.contains("ativa");
  if (ativo) {
    target.setAttribute("aria-expanded", "true");
  } else {
    target.setAttribute("aria-expanded", "false");
  }
}

perguntas.forEach(eventosPerguntas);

//imagens

const imagens = document.querySelectorAll(".interno-img img");
const galeriaImg = document.querySelector(".interno-img");

function trocaImagem(item) {
  item.addEventListener("click", selecionaImagem);
}

function selecionaImagem(e) {
  const img = e.target;
  const media = matchMedia("(min-width: 1000px)").matches;
  console.log(media);
  if (media) {
    galeriaImg.prepend(img);
  }
}

imagens.forEach(trocaImagem);

//Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
