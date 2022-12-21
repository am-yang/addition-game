let num1 = Math.trunc(Math.random() * 100) + 1; // Max number is 100
let num2 = Math.trunc(Math.random() * 100) + 1;

document.querySelector(".num1").textContent = num1;
document.querySelector(".num2").textContent = num2;

let currScore = 0;

document.querySelector(".submit-button").addEventListener("click", function () {
  let computedSum = Number(document.querySelector(".answer").value);
  if (computedSum === num1 + num2) {
    currScore++;
    document.querySelector(".score").textContent = currScore;
    if (currScore > Number(document.querySelector(".highscore").textContent)) {
      document.querySelector(".highscore").textContent = currScore;
    }
  } else if (computedSum !== num1 + num2) {
    currScore = 0;
    document.querySelector(".score").textContent = currScore;
  }
  document.querySelector(".answer").value = ""; // Make answer box empty again
  num1 = Math.trunc(Math.random() * 100) + 1;
  num2 = Math.trunc(Math.random() * 100) + 1;
  document.querySelector(".num1").textContent = num1;
  document.querySelector(".num2").textContent = num2;
});
