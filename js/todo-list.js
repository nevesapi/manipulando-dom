// Todo list
//Selecionar elementos
const input = document.getElementById("tarefa");
const btnAddTarefa = document.querySelector(".btnAdd");
const todoList = document.querySelector(".todo-list");

// Adicionar eventos
btnAddTarefa.addEventListener("click", function (event) {
  // prevenindo o comportamento padrão
  // Prevenindo que a página não seja recarregada ao clicar no button
  event.preventDefault();

  // Capturando o valor de um input
  const textoInput = input.value;

  // Validando o input
  if (textoInput === "") {
    alert("Por favor, preencha o campo!");
    return;
  }

  // Criando elementos
  const itemLista = document.createElement("li");
  const btnRemoveTarefa = document.createElement("button");

  // passando o conteúdo textual do input para o item da lista
  itemLista.textContent = textoInput;
  btnRemoveTarefa.textContent = "X";

  // passando item com o conteúdo para dentro da nossa lista
  itemLista.appendChild(btnRemoveTarefa);
  todoList.appendChild(itemLista);

  // marcando o item como concluido
  itemLista.addEventListener("click", () => {
    itemLista.classList.toggle("complete");
  });

  // Limpando o input após adicionar o item da lista
  input.value = "";

  // configurando button de remover item da lista
  btnRemoveTarefa.addEventListener("click", () => {
    // removendo item da lista
    todoList.removeChild(itemLista);
  });
});

// Ler ou alterar conteúdo
// Removendo elementos
