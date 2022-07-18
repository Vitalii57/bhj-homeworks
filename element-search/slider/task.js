let slider = document.getElementsByClassName("slider__item");
let btnNext = document.querySelector(".slider__arrow_next");

// btnNext.onclick = function () {
//   for (let i = 0; i < slider.length; i++) {
//     let a = 0;
//     a++
//     slider[i,0].classList.remove("slider__item_active");
//     slider[i,a].classList.add("slider__item_active");
//   }
// };

// let a =0;
// btnNext.addEventListener("click", function(){
//   for (let i = 0; i < slider.length; i++) {
//     if(a === 0){
//       a++
//       slider[i,0].classList.remove("slider__item_active");
//     slider[i,a].classList.add("slider__item_active");
//     } else if (a === 1) {
//       a = a+1
//       slider[i,a].classList.add("slider__item_active");
//     }

//   }
// })

function slider1() {
  for (let i = 0; i < slider.length; i++) {
    let a = 0;
    let b = 0;
    a++;
    slider[b].classList.remove("slider__item_active");
    slider[a].classList.add("slider__item_active");
    b++;

    // if (a < 5) {
    //   a++;
    console.log(a);

    //   slider[a].classList.add("slider__item_active");
    // } else if ((a = 5)) {
    //   break;
    // }
  }
}
setInterval(slider1, 1000);
// btnNext.onclick = slider1

// function yyy(b) {
//   if (b < 5) {
//     b++;
//   }
// }
// btnNext.onclick = yyy(0);
// console.log(yyy());
