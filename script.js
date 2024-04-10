const decreasebtn = document.getElementById("Decreasebtn");
const increasebtn = document.getElementById("Increasebtn");
const resetbtn = document.getElementById("Resetbtn");
const counter = document.getElementById("Counter");

let count = 0;

increasebtn.onclick = function () {
  count++;
  counter.textContent = count;
};

decreasebtn.onclick = function () {
  count--;
  counter.textContent = count;
};

resetbtn.onclick = function () {
  count = 0;
  counter.textContent = 0;
};
