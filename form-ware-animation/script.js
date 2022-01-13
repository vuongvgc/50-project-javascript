const labels = document.querySelectorAll(".form-control label");
console.debug("labels", labels);
labels.forEach((label) => {
  console.debug("text", label.textContent);
  label.innerHTML = label.innerText
    .split("")
    .map((letter, index) => {
      return `<span style="transition-delay: ${
        index * 300
      }ms">${letter}</span>`;
    })
    .join("");
});
