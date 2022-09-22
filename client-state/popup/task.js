const modal = document.querySelector(".modal");

let key = "show";
let value = "ended";

function getCookies(element, key) {
  let strSr = key + "=" + value;
  console.log(element.includes(strSr));
  return element.includes(strSr);
}

if (!getCookies(document.cookie, key)) {
  modal.classList.add("modal_active");
}

modal.addEventListener("click", (event) => {
  if (event.target.className.includes("modal__close")) {
    modal.classList.remove("modal_active");
    document.cookie =
      encodeURIComponent(key) + "=" + encodeURIComponent(value) + "max-age=300";
  }
});
