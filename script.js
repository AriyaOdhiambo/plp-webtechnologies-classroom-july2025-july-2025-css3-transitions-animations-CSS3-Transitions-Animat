// Global variable example
let animationCount = 0;

// Part 2: Functions with scope, parameters, and return values
function incrementCounter(step) {
  // local scope
  let newValue = animationCount + step;
  return newValue; // returns a value
}

function updateCounter() {
  animationCount = incrementCounter(1); // uses return value
  console.log("Animation triggered:", animationCount, "times");
}

// Part 3: Use JS to trigger CSS animation
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  // Reusable function to trigger animation
  triggerAnimation(box, "animate");
  updateCounter();
});

// Reusable function to add/remove animation class
function triggerAnimation(element, className) {
  element.classList.remove(className); // reset if already applied
  void element.offsetWidth; // reflow trick to restart animation
  element.classList.add(className);
}
