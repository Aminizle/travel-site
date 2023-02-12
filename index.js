const menuToggle = document.querySelector(".toggle");
const showcaseToggle = document.querySelector(".showcase");
const homeToggle = document.querySelector(".home");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
});
showcaseToggle.addEventListener("click", () => {
  showcaseToggle.classList.toggle("active");
});
homeToggle.addEventListener("click", () => {
  showcaseToggle.classList.toggle("active");
});
