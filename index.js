const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const menu = document.querySelector(".menu");
const homeLink = document.getElementById("homeLink");


homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".menu").classList.remove("open");
  document.querySelector(".toggle").classList.remove("active");
  document.querySelector(".showcase").classList.remove("active");

  // Optional: scroll to top or to the showcase section
  window.scrollTo({ top: 0, behavior: "smooth" });
});

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
  menu.classList.toggle("open");
});
