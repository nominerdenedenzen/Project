const boxes = document.querySelectorAll(".container div");
const resetBtn = document.querySelector(".reset");

const values = [3, 7, 3, 9, 6, 6, 7, 9, 10, 1, 10, 1];
let selected = [];

const reset = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";
    boxes[i].classList.remove("match");
  }
};

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", () => {
    if (selected.length < 2) {
      boxes[i].textContent = values[i];
      selected.push(i);

      if (selected.length === 2) {
        const [a, b] = selected;
        let isMatch = values[a] === values[b];

        if (isMatch) {
          boxes[a].classList.add("match");
          boxes[b].classList.add("match");
          selected = [];
        } else {
          setTimeout(() => {
            selected = [];
            boxes[a].textContent = "";
            boxes[b].textContent = "";
          }, 1000);
        }
      }
    }
  });
}
resetBtn.addEventListener("click", () => {
  reset();
});
