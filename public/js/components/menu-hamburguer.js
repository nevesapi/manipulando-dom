/*Selecionar/capturar elementos*/
const btnMenu = document.getElementById("btn-menu");
const listaMenu = document.querySelector("#menu-principal");
const menuLinks = document.querySelectorAll("#menu-principal a");
const iconeBtnMenu = document.querySelector("i");

/* Adicionar eventos(ou seja, observar ações do usuário) */
btnMenu.addEventListener("click", function () {
  listaMenu.classList.toggle("ativo");

  if (listaMenu.classList.contains("ativo")) {
    // Manipulando classes
    iconeBtnMenu.classList.remove("fi-sr-menu-burger");
    iconeBtnMenu.classList.add("fi-sr-cross");

    // alterando o valor dos atributos
    btnMenu.setAttribute("aria-label", "Fechar Menu");
    btnMenu.setAttribute("aria-expanded", "true");
  } else {
    iconeBtnMenu.classList.remove("fi-sr-cross");
    iconeBtnMenu.classList.add("fi-sr-menu-burger");

    btnMenu.setAttribute("aria-label", "Abrir Menu");
    btnMenu.setAttribute("aria-expanded", "false");
  }
});

const path = window.location.pathname;
const page = path.split("/").pop().split(".")[0];

menuLinks.forEach((link) => {
  const href = link.getAttribute("href");
  const hrefPage = href.split("/").pop().split(".")[0];
  if (hrefPage === page || (hrefPage === "" && page === "")) {
    link.classList.add("ativoLink");
  }
});
