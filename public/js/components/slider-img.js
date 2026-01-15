// Capturando os elementos
const imagens = document.querySelectorAll(".slides img");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

let index = 0;

function mostrarImagens(indice) {
  imagens.forEach((imagem) => {
    imagem.classList.remove("active");
  });

  imagens[indice].classList.add("active");
}

btnNext.addEventListener("click", () => {
  index = (index + 1) % imagens.length;
  mostrarImagens(index);
});

btnPrev.addEventListener("click", () => {
  // 0 = (0 - 1)
  index = (index - 1 + imagens.length) % imagens.length;
  mostrarImagens(index);

  // index - 1 = volta uma imagem
  // + imagem.length = Garante que o valor de index nunca seja negativo
});

mostrarImagens(index);
