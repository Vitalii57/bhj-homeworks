let modal_main = document.getElementById("modal_main");
const modal_success = document.getElementById("modal_success");
modal_main.classList.add("modal_active");
let btn_success = document.querySelector(".btn");
btn_success.onclick = function () {
  modal_main.classList.remove("modal_active");
  modal_success.classList.add("modal_active");
};
let modal__close = document.querySelector(".modal__close_times");
modal__close.onclick = function () {
  modal_main.classList.remove("modal_active");
};
console.log(modal_success);
