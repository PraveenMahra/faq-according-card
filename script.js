const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((faq) => {
  const question = faq.querySelector(".question");

  question.addEventListener("click", function () {
    const answer = this.parentElement.querySelector(".answer");
    const questionIcon = this.querySelector(".question-icon");

    // Close all other FAQ items
    faqItems.forEach((item) => {
      if (item !== faq) {
        const otherAnswer = item.querySelector(".answer");
        const otherQuestion = item.querySelector(".question");
        const otherQuestionIcon = otherQuestion.querySelector(".question-icon");

        otherQuestion.classList.remove("question-active");
        otherAnswer.classList.add("hidden");
        otherQuestionIcon.classList.remove("icon-rotate");
      }
    });

    // Toggle the clicked FAQ item
    question.classList.toggle("question-active");
    answer.classList.toggle("hidden");
    questionIcon.classList.toggle("icon-rotate");
  });
});
