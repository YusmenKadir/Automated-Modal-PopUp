const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".fa-solid");

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");

  setTimeout(() => {
    modal.classList.add("active");
  }, 5000);
});

const showModal = () => {
  setTimeout(() => {
    modal.classList.add("active");
  }, 3000);
};

showModal();
