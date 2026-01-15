// containers
const formContato = document.querySelector("#form-contato");
const enderecoContainer = formContato.querySelector("#endereco");

// Info user
const inputName = formContato.querySelector("#name");
const inputEmail = formContato.querySelector("#email");
const textArea = formContato.querySelector("#message");

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

  const name = inputName.value;
  const email = inputEmail.value;
  const message = textArea.value;
  const cep = inputCep.value;
  const rua = inputRua.value;
  const bairro = inputBairro.value;
  const estado = inputEstado.value;

  if (!name || !email || !message || !cep || !rua || !bairro || !estado) {
    alert("Todos os campos são obrigatórios");
    return;
  }

  btnEnviarForm.disabled = true;
  formContato.submit();
});

// sintaxe async/await
// async - indica que a função é assincrona, ou seja, pode demorar ser executado
btnBuscaCep.addEventListener("click", async () => {
  // texto.replace(oQueEuQueroTrocar, peloQueEuVouTrocar);
  let cepValue = inputCep.value.replace(/\D/g, "");
  if (cepValue.length !== 8) {
    alert("Digite um CEP válido");
    return;
  }

  /* Começando com o Fetch API
  Fetch API - API nativa do JavaScript
    - usamos para fazer requisições HTTP ((GET)buscar dados de servidor, por exemplo.)
    - também é possível usar para enviar dados para servidores:
      - (POST, PUT, DELETE)
    - consumir serviços externos (ex: ViaCEP)
  */

  // a palavra chave await, diz para o programa AGUARDAR/ESPERAR a consulta ser realizada
  // const resposta = await fetch(`https://viacep.com.br/ws/01001000/json/`);
  const resposta = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
  const dados = await resposta.json();

  if (dados.erro) {
    alert("CEP não encontrado");
    return;
  }

  // preenchendo os inputs com os valores
  inputRua.value = dados.logradouro;
  inputBairro.value = dados.bairro;
  inputEstado.value = dados.estado;

  // apresentando o formulário com os dados preenchidos
  enderecoContainer.classList.add("ativoEndereco");

  btnEnviarForm.disabled = false;

  console.log(resposta);
  console.log(dados);
});
