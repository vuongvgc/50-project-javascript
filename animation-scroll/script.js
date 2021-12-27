const boxs = document.querySelectorAll(".box");

window.addEventListener("scroll", checkboxes);
checkboxes();
function checkboxes() {
  console.debug(window.innerHeight);
  console.debug((window.innerHeight / 5) * 4);
  const TriggerBottom = (window.innerHeight / 5) * 4;
  boxs.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;
    if (boxTop < TriggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
