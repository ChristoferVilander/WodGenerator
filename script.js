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
    "Push Ups x 20",
  ];

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
}

// Clicking the button executes the function wodGenerator
let generatebutton = document.querySelector(".generateBtn");
generatebutton.onclick = wodGenerator;
