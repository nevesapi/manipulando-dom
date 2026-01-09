// Trabalhando com Event Delegation (Delegação de eventos)
const faqContainer = document.querySelector(".faq-container");
console.log(faqContainer);

faqContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".btn-faq");

  // early return - retorno antecipado
  if (!button) return;

  // comaprando com true, criamos uma váriavel booleana
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  const answerId = button.getAttribute("aria-controls");
  const answer = document.getElementById(answerId);

  button.setAttribute("aria-expanded", !isExpanded);
  answer.classList.toggle("ativoFaq");
});
