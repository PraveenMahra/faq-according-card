const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((faq) => {
  const question = faq.querySelector(".question");

  question.addEventListener("click", function () {
    const answer = this.parentElement.querySelector(".answer");
    const questionIcon = this.querySelector(".question-icon");

    question.classList.toggle("question-active");
    answer.classList.toggle("hidden");
    questionIcon.classList.toggle("icon-rotate");
  });
});
