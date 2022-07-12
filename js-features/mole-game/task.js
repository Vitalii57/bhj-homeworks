const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((id) => {
  document.getElementById(`hole${id}`).onclick = (e) => {
    if (e.target.classList.contains("hole_has-mole")) {
      if (+dead.textContent + 1 >= 10) {
        alert("Победа!");
        dead.textContent = 0;
        lost.textContent = 0;
        return;
      }
      dead.textContent = +dead.textContent + 1;
      return;
    }
    if (+lost.textContent + 1 >= 5) {
      alert("Вы проиграли!");
      dead.textContent = 0;
      lost.textContent = 0;
      return;
    }
    lost.textContent = +lost.textContent + 1;
  };
});
