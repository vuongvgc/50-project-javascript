let panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeClassNameActive(panels);
    panel.classList.add("active");
  });
});
function removeClassNameActive(panels) {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
