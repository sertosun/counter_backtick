let elementDiv = document.createElement("div");
let count = 0;

let container = `<div class="container">
                    <button class="btn" id="up">UP</button>
                    <p id="result">0</p>
                    <button class="btn" id="down">DOWN</button>
                    </div>`;

document.body.innerHTML = container;

let = btnUp = document.querySelector("#up");
btnUp.addEventListener("click", () => {
  count++;
  result.innerHTML = count;
});

let = btnDown = document.querySelector("#down");
btnDown.addEventListener("click", () => {
  count--;
  result.innerHTML = count;
});
