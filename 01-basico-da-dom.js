function mudarTexto() {
  // capturando/selecionando um elemento na DOM
  // utilizamos o método getElementById para capturar/selecionar um elemento com o ID "titulo"
  const titulo = document.getElementById("titulo");

  // titulo.innerText = "Olá, você clicou no botão!";
  // titulo.textContent = "Olá, você clicou no botão!";
  titulo.innerHTML = "Olá, você clicou no botão!";

}
