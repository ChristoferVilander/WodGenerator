function wodGenerator() {
  let workouts = [
    "Snatch x 6 (60%)",
    "Clean and Jerk x 6 (60%)",
    "Wallbals x 10 (9kg/6kg)",
    "Pull Ups x 10",
    "DL x 6 (60%)",
    "Burpees x 10",
    "Kettlebell Swing x 5 (22.5kg/17.55kg)",
    "Box Jump x 10",
    "TTB x 10",
    "Air Bike 15 Cal",
    "Row 15 Cal",
    "Push Ups x 20",
  ];

  // This function creates a list of 4 random workouts

  function createList() {
    wodContainer.appendChild(ulItem);

    for (var i = 0; i < 4; i++) {
      let wodItem = document.createElement("li");

      wodItem.innerHTML = workouts[Math.floor(Math.random() * workouts.length)];

      ulItem.appendChild(wodItem);
    }
  }

<<<<<<< HEAD
  // Dom Elements
  let wodContainer = document.querySelector(".wodList");
  let ulItem = document.createElement("ul");
  ulItem.setAttribute("class", "ulist");
  let ulID = document.querySelector(".ulist");
=======
  let wodContainer = document.getElementById("wodList");
  let ulItem = document.createElement("ul");
  ulItem.setAttribute("id", "ulist");
  let ulID = document.getElementById("ulist");
  let timeCap = "20 min";
>>>>>>> e28b801e0bfcf69d7589a119ab7a4fe7bcdc5d7f

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
