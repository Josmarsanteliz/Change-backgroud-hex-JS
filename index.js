const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexbtnEl = document.getElementById("btn");
const bodyBcg = document.getElementById("body");
const hex = document.getElementById("hex");

console.log(hexNumbers, hexbtnEl, hex, bodyBcg);

hexbtnEl.addEventListener("click", getHex);

function getHex() {
  let hexCol = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * hexNumbers.length);

    hexCol += hexNumbers[random];
  }
  bodyBcg.style.backgroundColor = hexCol;
  hex.innerHTML = hexCol;
}
