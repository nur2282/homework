const body = document.querySelector(".page__body");
const searchModalOpen = document.querySelector(".search-btn");
const searchModalClose = document.querySelector(".modal__close");
const searchModalWindow = document.querySelector(".modal__window");
const searchModal = document.querySelector(".modal");

searchModalOpen.addEventListener("click", () => {
  body.classList.add("page__body--no-scroll");
  searchModal.classList.add("modal--open");
  searchModalWindow.classList.add("modal__window--open");
});

const closeModal = () => {
  body.classList.remove("page__body--no-scroll");
  searchModal.classList.remove("modal--open");
  searchModalWindow.classList.remove("modal__window--open");
};

searchModal.addEventListener("click", event => {
  if (event.target === searchModal) {
    closeModal();
  }
});
searchModalClose.addEventListener("click", closeModal);
