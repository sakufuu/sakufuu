document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navMenu = document.querySelector(".menu");

  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }
});
