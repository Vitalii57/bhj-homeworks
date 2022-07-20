let slider = document.getElementsByClassName("slider__item");
let btnNext = document.querySelector(".slider__arrow_next");
let btnPrev = document.querySelector(".slider__arrow_prev");
let currentIndex = 0;
const elementsNumber = 5;
var momentIndex;

btnNext.addEventListener("click", function () {
  slider[currentIndex].classList.remove("slider__item_active");
  currentIndex = (currentIndex + 1) % elementsNumber;
  slider[currentIndex].classList.add("slider__item_active");
  // momentIndex = currentIndex;
  console.log(currentIndex);
});

btnPrev.addEventListener("click", function () {
  slider[currentIndex].classList.remove("slider__item_active");

  // if (currentIndex == 0 ) {
  //   momentIndex = elementsNumber - 1;
  // }
  // if (momentIndex > 0) {
  //   momentIndex = momentIndex - 1;
  // } else if (momentIndex == 0) {
  //   momentIndex = elementsNumber - 1;
  // }
  currentIndex = (currentIndex - 1 + elementsNumber) % elementsNumber;
  slider[currentIndex].classList.add("slider__item_active");
  // console.log(momentIndex);
  console.log(currentIndex);
});

console.log(currentIndex);
