let time = document.getElementById("timer");
function timeCounter() {
  if (time.textContent == 0) {
    alert("Вы победили в конкурсе");
    clearTimeout(v);
  }
  let v = setTimeout(timeCounter, 1000, --time.textContent);
}
setTimeout(timeCounter, 1000);
