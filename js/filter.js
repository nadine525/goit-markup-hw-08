const buttons = document.querySelectorAll(".filter__button");
const cards = document.querySelectorAll(".portfolio__item");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentCategory = button.dataset.filter;
    // console.log(currentCategory);

    cards.forEach((card) => {
      if (
        card.dataset.category === currentCategory ||
        currentCategory === "Усі"
      ) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});
