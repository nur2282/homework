const searchInput = document.querySelector(".search__input");
const searchTagButtons = document.querySelectorAll(".search__tag-button");

searchTagButtons.forEach(button => {
  button.addEventListener("click", () => {
    searchInput.value = button.textContent.trim();
  });
});
