// Hamburger Menu

function bls() {
  let hamburger = document.getElementById("hamburger"),
    content = document.getElementById("content"),
    button = document.getElementById("button");

  button.onclick = function nm() {
    if (hamburger.style.height === "10rem") {
      hamburger.style.height = "0";
      content.style.opacity = "0";
    } else {
      hamburger.style.height = "10rem";
      hamburger.style.transition = "height 0.5s";
      content.style.transition = "opacity 0.5s";
      content.style.opacity = "1";
    }
  };
}

bls();

// Hamburger End

function wodGenerator() {
  let workouts = [
    "Snatch x 6 (60%)",
    "Clean and Jerk x 6 (60%)",
    "Wallbals x 10 (9kg / 6kg)",
    "Pull Ups x 10",
    "Dead Lift x 6 (60%)",
    "Burpees x 10",
    "Kettlebell Swing x 5 (22.5kg / 17.55kg)",
    "Box Jump x 10",
    "TTB x 10",
    "Air Bike 15 Cal",
    "Row 15 Cal",
    "HSPU x 8",
    "Push Ups x 20",
  ];

  let intermediate = [
    "10 min AMRAP",
    "4 Rounds, (TC 10 min)",
    "EMOM, 10 min",
    "20 min AMRAP",
  ];

  let rx = [
    "20 min AMRAP",
    "10 min AMRAP",
    "4 Rounds (TC 20 min)",
    "EMOM, 20 min",
  ];

  let wodContainer = document.querySelector(".wodList");
  let ulItem = document.createElement("ul");
  ulItem.setAttribute("class", "ulist");
  let ulID = document.querySelector(".ulist");

  // If id 'ulist' exists it gets removed and then the createList function is executed, else it runs the createList straight away
  if (wodContainer.hasChildNodes()) {
    ulID.remove();
    createList();
  } else {
    createList();
  }

  // This function creates a list of 4 random workouts. This part has a lot of duplicate code which will be fixed.
  function createList() {
    wodContainer.appendChild(ulItem);
    let noChoice = document.createElement("h3");
    noChoice.setAttribute("id", "errorId");
    let errorMsg = document.querySelector(".errorMessage");
    let interCheck = document.getElementById("inter");
    let rxCheck = document.getElementById("rx");

    if (
      errorMsg.hasChildNodes() &&
      interCheck.checked === false &&
      rxCheck.checked === false
    ) {
      return;
    } else if (interCheck.checked === false && rxCheck.checked === false) {
      errorMsg.appendChild(noChoice);
      noChoice.className = "errorAnimation";
      noChoice.innerHTML = "Please choose an option";

      return;
    } else if (interCheck.checked || rxCheck.checked) {
      if (errorMsg.hasChildNodes()) {
        document.getElementById("errorId").remove();
      }

      let timeCap = document.createElement("h2");
      timeCap.id = "tc";
      timeCap.className = "animate";
      timeCap.innerHTML =
        intermediate[Math.floor(Math.random() * intermediate.length)];
      ulItem.appendChild(timeCap);
    } else if (rxCheck.checked) {
      let timeCap = document.createElement("h2");
      timeCap.id = "tc";
      timeCap.className = "animate";
      timeCap.innerHTML = rx[Math.floor(Math.random() * rx.length)];
      ulItem.appendChild(timeCap);
    }

    for (var i = 0; i < 4; i++) {
      let wodItem = document.createElement("li");
      let shuffle = workouts[Math.floor(Math.random() * workouts.length)];
      let arrayIndex = workouts.indexOf(shuffle);

      workouts.splice(arrayIndex, 1); // Removes shuffled items to prevent duplicates

      wodItem.innerHTML = shuffle;

      ulItem.appendChild(wodItem).className = "animate";
      startBtn.style.visibility = "visible";
    }
  }

  function saveWod() {
    // wodContainer the latest generated WOD to Local Storage
    localStorage.setItem("1. Workout", wodContainer.innerHTML);
  }
  saveWod();
}

// Restores latest WOD from Local Storage

// Clicking the button executes the function wodGenerator
let generatebutton = document.querySelector(".generateBtn");
generatebutton.onclick = wodGenerator;

// Timer, incl start and stop btn (should be rebuilt, since this is not a good solution)
function go() {
  let timeRepeat = setInterval(timer, 1000);
  let sec = 0;
  let min = 0;
  let minDiv = document.getElementById("minOne");
  let secDiv = document.getElementById("secOne");
  let btnText = document.getElementById("btnText");
  let statement = true;
  document.querySelector(".startBtn").setAttribute("id", "stopp");

  btnText.innerHTML = "Stop";

  function timer() {
    let g = document.getElementById("tc");
    let time = 10;
    if (g.innerHTML.includes("20")) {
      time = 20;
    } else {
      time = 10;
    }
    if (sec === 60) {
      min++;
      sec = 0;
    }

    sec++;

    minDiv.innerHTML = "<h1>Min:</h1> " + min;
    secDiv.innerHTML = "<h1>Sec:</h1> " + sec;

    if (min === time) {
      clearInterval(timeRepeat);
      minDiv.innerHTML = "";
      secDiv.innerHTML = "Time is Up!";
    }
  }

  // Stop Timer
  function stoppa() {
    clearInterval(timeRepeat);
    btnText.innerHTML = "Reset";

    document.getElementById("stopp").onclick = function () {
      if ((btnText.innerHTML = "Reset" && statement === true)) {
        let btnText = document.getElementById("btnText");
        btnText.innerHTML = "Start";
        minDiv.innerHTML = "<h1>Min:</h1> " + "0";
        secDiv.innerHTML = "<h1>Sec:</h1> " + "0";
        statement = false;
      } else {
        go();
      }
    };
  }
  document.getElementById("stopp").onclick = stoppa;
}

// Two functions which uncheck the checkbox

function uncheckInter() {
  inter.checked = false;
}

function uncheckRx() {
  rx.checked = false;
}

let startBtn = document.querySelector(".startBtn");

startBtn.onclick = go;

rx.onclick = uncheckInter;
inter.onclick = uncheckRx;

function savedList() {
  let ulID = document.querySelector(".ulist");
  let wodContainer = document.querySelector(".wodList");
  let savedItem = document.createElement("h2");
  savedItem.innerHTML = localStorage.key(0);
  wodContainer.removeChild(ulID);
  wodContainer.appendChild(savedItem);

  function restoreWod() {
    let wodContainer = document.querySelector(".wodList");
    wodContainer.innerHTML = localStorage.getItem("1. Workout");
    startBtn.style.visibility = "visible";
    let hamburger = document.getElementById("hamburger");
    hamburger.style.height = "0";
  }

  savedItem.onclick = restoreWod;
}

let savesLink = document.getElementById("savesLink");
savesLink.onclick = savedList;
