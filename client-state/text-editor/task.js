const textArea = document.querySelector("#editor");
const buttonTextArea = document.querySelector(".button");

const storeName = localStorage.getItem("text");
if (storeName) {
  textArea.textContent = storeName;
}

textArea.addEventListener("input", (event) => {
  const textTextArea = textArea.value;
  localStorage.setItem("text", textTextArea);
});

buttonTextArea.addEventListener("click", (event) => {
  textArea.innerHTML = "";
  localStorage.removeItem("text");
});
