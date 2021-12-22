const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const containerPage = document.querySelector(".container");
openButton.addEventListener("click", () => {
  containerPage.classList.add("show-nav");
});
closeButton.addEventListener("click", () => {
  containerPage.classList.remove("show-nav");
});
