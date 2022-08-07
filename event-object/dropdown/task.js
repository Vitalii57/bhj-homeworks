let dropdown__value = document.querySelector(".dropdown__value");
let dropdown__list = document.querySelector(".dropdown__list");

// button.addEventListener("click", () => {
//   if (dropdown__list.className === "dropdown__list dropdown__list_active") {
//     dropdown__list.classList.remove("dropdown__list_active");
//   } else {dropdown__list.classList.add("dropdown__list_active");}
// });

dropdown__value.addEventListener("click", () => dropdown__list.classList.toggle("dropdown__list_active"));

const arrDropdownItem = Array.from(document.querySelectorAll(".dropdown__item"));
console.log(arrDropdownItem);
arrDropdownItem.forEach((el) => el.addEventListener("click", () => dropdown__value.textContent = el.textContent));
