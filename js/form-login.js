// capturando/pegando elementos
const usuario = document.getElementById("email");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btn-login");
const mensagem = document.querySelector("#mensagem");

// Usuário fixo - apenas ficticio para estudo
const usuarioCorreto = "exemplo@exemplo.com";
const passwordCorreta = "1234";

btnLogin.addEventListener("click", (event) => {
  event.preventDefault();

  // obtendo valor dos elementos (inputs)
  const passwordValue = password.value;
  const usuarioValue = usuario.value;

  // validando inputs - garantindo que há os dados necessários
  if (usuarioValue === "" || passwordValue === "") {
    infoMensagem("Por favor, preencha todos os campos!", "red");
    return;
  }

  // Verificando se o valor digitado pelo usuário é igual ao que consta no banco de dados
  if (usuarioValue === usuarioCorreto && passwordValue === passwordCorreta) {
    infoMensagem("Login realizado com sucesso!", "green");

    // salvando o login do usuário
  } else {
    infoMensagem("Usuário ou senha incorretos!", "red");
  }
});

function infoMensagem(text, color) {
  mensagem.style.color = color;
  mensagem.innerHTML = text;
}
