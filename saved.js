window.onload = savedList;

// Hamburger Menu

(function () {
  let hamburger = document.getElementById("hamburger"),
    content = document.getElementById("content"),
    button = document.getElementById("button");

  button.onclick = function () {
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
})();

// Hamburger End

function savedList() {
  let saves = document.getElementById("list-of-saves");
  let savedItem = document.createElement("h3");
  savedItem.innerHTML = "test";
  saves.appendChild(savedItem);
}
