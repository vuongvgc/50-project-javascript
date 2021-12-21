const progress = document.getElementById("progress");
const pre = document.getElementById("pre");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentStep = 1;
updateProgress();
next.addEventListener("click", () => {
  currentStep++;
  if (currentStep > circles.length) {
    currentStep = circles.length;
  }
  console.log(currentStep);
  updateProgress();
});

pre.addEventListener("click", () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  updateProgress();
});

function updateProgress() {
  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  console.debug(currentStep, circles.length);
  progress.style.width = ((currentStep - 1) / (circles.length - 1)) * 100 + "%";
  if (currentStep == circles.length) {
    next.disabled = true;
  } else if (currentStep == 1) {
    pre.disabled = true;
  } else {
    next.disabled = false;
    pre.disabled = false;
  }
}
