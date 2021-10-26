//計數器
var counterVal = 0;
var total = 0;

function incrementClick() {
  updateDisplay(++counterVal);
  document.getElementById("goldSign").innerHTML = ~~(counterVal / 10) + total;
}

function resetCounter() {
  let total = counterVal;
  counterVal = 0;
  updateDisplay(counterVal);
}

function updateDisplay(val) {
  document.getElementById("counter-label").innerHTML = val;
}

if (counterVal > 10) {
  document.getElementById("goldSign").innerHTML = "mmm";
}

document.getElementById("goldSign").innerHTML = total;

/*計時器
var timeoutID = setTimeout(myAlert, 5000);

function myAlert() {
    console.log('Light Power is gone.');
}
*/
//計時器2
function paddedFormat(num) {
  return num < 10 ? "0" + num : num;
}

function startCountDown(duration, element) {
  let secondsRemaining = duration;
  let min = 0;
  let sec = 0;

  let countInterval = setInterval(function () {
    min = parseInt(secondsRemaining / 60);
    sec = parseInt(secondsRemaining % 60);

    element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

    secondsRemaining = secondsRemaining - 1;
    if (secondsRemaining < 0) {
      clearInterval(countInterval);
    }
  }, 1000);
}
document.getElementById("startbtn").addEventListener("click", function () {
  let time_minutes = 1; // Value in minutes
  let time_seconds = 30; // Value in seconds

  let duration = time_minutes * 60 + time_seconds;

  element = document.querySelector("#count-down-timer");
  element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(
    time_seconds
  )}`;

  startCountDown(--duration, element);
});

//炸彈

function showSoil() {
  var foo = document.getElementById("soilss");

  foo.style["background-color"] = "#DAA520";
  document.getElementById("board").innerHTML = "Ke~Ching! It's a gold!";
  alert("Ke~Ching! It's a gold!");
}

function showBomb() {
  var foo = document.getElementById("bomb");
  foo.style["background-color"] = "#DAA520";
  document.getElementById("board").innerHTML = "Ke~Ching! It's a gold!";
  alert("Ke~Ching! It's a gold!");
}

var grid, i;
grid = document.querySelectorAll("[id='soil']");
for (i = 0; i < grid.length; i++) {
  grid[i].addEventListener("click", function (event) {
    let clicked = event.target;
    if ((clicked.id = "soil")) {
      clicked.style["background-color"] = "rgba(250, 240, 230,0.9)";
      document.getElementById("board").innerHTML =
        "C'mon! Dig it till u make it";
    }
  });
}
