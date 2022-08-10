class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector(".word");
    this.winsElement = container.querySelector(".status__wins");
    this.lossElement = container.querySelector(".status__loss");

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener("keydown", (event) => {
      let keyDounWhat = event.key.charCodeAt();
      String.fromCharCode(keyDounWhat).toLowerCase() ===
      this.currentSymbol.textContent.toLowerCase()
        ? this.success()
        : this.fail();
    });
  }

  success() {
    this.currentSymbol.classList.add("symbol_correct");
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert("Победа!");
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert("Вы проиграли!");
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        "bob",
        "awesome",
        "netology",
        "hello",
        "kitty",
        "rock",
        "youtube",
        "popcorn",
        "cinema",
        "love",
        "javascript",
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? "symbol_current" : ""}">${s}</span>`
      )
      .join("");
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector(".symbol_current");
  }

  reverseTimer() {
    let intervalId = null;
    const countSecond = document.getElementById("timer");
    let hourMinutes = "00:00:";
    let secondString = countSecond.textContent;
    const countChairs = this.wordElement.childNodes.length * 1000;
    function countTimer() {
      if (secondString > 0) {
        secondString -= 1;
        let countSecondTextContent =
          hourMinutes + secondString.toString().padStart(2, 0);
        countSecond.textContent = countSecondTextContent;
      } else {
        clearTimeout(intervalId);
        alert("Вы победили в конкурсе");
      }
    }

    intervalId = setInterval(countTimer, countChairs);
  }
}

new Game(document.getElementById("game"));
