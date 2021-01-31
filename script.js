function wodGenerator() {
  let workouts = [
    "Snatch x 6 (60%)",
    "Clean and Jerk x 6 (60%)",
    "Wallbals x 10 (9kg / 6kg)",
    "Pull Ups x 10",
    "DL x 6 (60%)",
    "Burpees x 10",
    "Kettlebell Swing x 5 (22.5kg / 17.55kg)",
    "Box Jump x 10",
    "TTB x 10",
    "Air Bike 15 Cal",
    "Row 15 Cal",
    "HSPU x 8",
    "Push Ups x 20",
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

  // This function creates a list of 4 random workouts.
  function createList() {
    wodContainer.appendChild(ulItem);

    let timeCap = document.createElement("li");

    timeCap.innerHTML = "<b>20 min AMRAP</b>";

    ulItem.appendChild(timeCap);

    for (var i = 0; i < 4; i++) {
      let wodItem = document.createElement("li");
      let shuffle = workouts[Math.floor(Math.random() * workouts.length)];
      let arrayIndex = workouts.indexOf(shuffle);

      workouts.splice(arrayIndex, 1); // Removes shuffled items to prevent duplicates

      wodItem.innerHTML = shuffle;

      ulItem.appendChild(wodItem);
    }
  }

  function saveWod() {
    // Saves the latest generated WOD to Local Storage
    localStorage.setItem("savedItems", wodContainer.innerHTML);
  }
  saveWod();
}

// Restores latest WOD from Local Storage
function restoreWod() {
  let wodContainer = document.querySelector(".wodList");
  wodContainer.innerHTML = localStorage.getItem("savedItems");
}

restoreWod();

// Clicking the button executes the function wodGenerator
let generatebutton = document.querySelector(".generateBtn");
generatebutton.onclick = wodGenerator;

// Timer, inkl start and stop btn

function go() {
  let timeRepeat = setInterval(timer, 1000);

  let sec = 0;
  let min = 0;

  let minDiv = document.querySelector(".min");
  let secDiv = document.querySelector(".sec");

  function timer() {
    if (sec === 60) {
      min++;
      sec = 0;
    }

    sec++;

    minDiv.innerHTML = sec;
    secDiv.innerHTML = min;

    console.log(sec, min);

    if (min === 20) {
      clearInterval(timeRepeat);
      minDiv.innerHTML = "";
      secDiv.innerHTML = "Time is Up!";
    }
  }

  function stoppa() {
    clearInterval(timeRepeat);
  }
  let stopBtn = document.getElementById("stopBtn");
  stopBtn.onclick = stoppa;
}

let startBtn = document.getElementById("startBtn");

startBtn.onclick = go;
