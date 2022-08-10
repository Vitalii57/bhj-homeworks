// const arrTabs = Array.from(document.querySelectorAll(".tab"));
// const arrContentTabs = Array.from(document.querySelectorAll(".tab__content"));

// const arrTab = arrTabs.map((el) => el);
// const arrContent = arrContentTabs.map((el) => el);
// let arrLength = arrTab.length;

// arrTab[0].addEventListener("click", () => {
//   arrContent[0].classList.toggle('tab__content_active')
// });
// arrTab[1].addEventListener("click", () => {
//   let num = 0;
//   arrContent[num].classList.remove("tab__content_active");
//   num = (num + 1) % 2;
//   arrContent[num].classList.toggle('tab__content_active')
// });
// arrTab[2].addEventListener("click", () => {
//   let num = 1;
//   arrContent[0].classList.remove("tab__content_active");
//   arrContent[num].classList.remove("tab__content_active");
//   num = (num + 1) % arrLength;
//   arrContent[num].classList.toggle('tab__content_active')
// });

const tabs = document.querySelectorAll(".tab");
const tabPages = document.querySelectorAll(".tab__content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    if (!e.target.classList.contains("tab_active")) {
      tabs.forEach((tab) => {
        tab.classList.remove("tab_active");
      });
      e.target.classList.add("tab_active");

      tabPages.forEach((page) => {
        page.classList.remove("tab__content_active");
      });
      tabPages[index].classList.add("tab__content_active");
    }
  });
});
