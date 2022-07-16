let links = document.querySelectorAll(".menu__link");
links.forEach((elLink) => {
  elLink.onclick = function (event) {
    if (elLink.closest(".menu__item").querySelector(".menu_sub")) {
      elLink
        .closest(".menu__item")
        .querySelector(".menu_sub")
        .classList.toggle("menu_active");
      return false;
    }
  };
});
