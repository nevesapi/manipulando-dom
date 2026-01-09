// containers
const formContato = document.querySelector("#form-contato");
const enderecoContainer = formContato.querySelector("#endereco");

// Info user
const inputName = formContato.querySelector("#name");
const inputEmail = formContato.querySelector("#email");

// Endereco
const inputCep = formContato.querySelector("#cep");
const inputRua = formContato.querySelector("#rua");
const inputBairro = formContato.querySelector("#bairro");
const inputEstado = formContato.querySelector("#estado");

// btn actions
const btnBuscaCep = formContato.querySelector("#buscarCep");
const btnEnviarForm = formContato.querySelector("#btnEnviarForm");

formContato.addEventListener("submit", (event) => {
  event.preventDefault();
});

btnBuscaCep.addEventListener("click", () => {
  let cepValue = inputCep.value.replace(/\D/g, "");
});
