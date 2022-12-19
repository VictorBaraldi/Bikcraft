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
