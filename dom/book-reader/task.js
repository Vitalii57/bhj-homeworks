const button = document.querySelectorAll(".font-size");
const content = document.querySelector(".book__content");
// console.log(button)
let num = 0;
button.forEach((but, index) => {
  but.addEventListener("click", (el) => {
    if (!el.target.classList.contains("font-size_active")) {
      button.forEach((but) => {
        but.classList.remove("font-size_active");
      });
    }
    but.classList.remove("font-size_active");
    console.log(but);
  });
});
