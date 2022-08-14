const messages = Array.from(document.querySelectorAll(".rotator__case"));
let num = 0;
const messLength = messages.length;
let speed = 0;
// speed = messages[num].dataset.speed;
// console.log(speed)

messages.forEach(() => {});
setInterval((el, index) => {
  messages[num].classList.remove("rotator__case_active");
  num = (num + 1) % messLength;
  messages[num].classList.add("rotator__case_active");
  messages[num].style.color = messages[num].dataset.color;
  speed = messages[num].dataset.speed;
}, 1000);
