let indexAtual = 0;
let fotos = [];

fetch("data/fotos.json")
  .then(res => res.json())
  .then(dados => {
    fotos = dados;
    criarSlides();
    atualizarCarrossel();
  });

function criarSlides() {
  const track = document.querySelector(".carousel-track");
  track.innerHTML = "";

  fotos.forEach(foto => {
    const img = document.createElement("img");
    img.src = `media/fotos/${foto.arquivo}`;
    track.appendChild(img);
  });
}

function atualizarCarrossel() {
  const track = document.querySelector(".carousel-track");
  const largura = 600;
  track.style.transform = `translateX(-${indexAtual * largura}px)`;
}
document.querySelector(".next").addEventListener("click", () => {
  indexAtual = (indexAtual + 1) % fotos.length;
  atualizarCarrossel();
});

document.querySelector(".prev").addEventListener("click", () => {
  indexAtual = (indexAtual - 1 + fotos.length) % fotos.length;
  atualizarCarrossel();
});
