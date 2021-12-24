const bg = document.querySelector(".bg");
const blurryText = document.querySelector(".blurry-text");

let load = 0;
const blurry = function () {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  blurryText.innerText = `${load}%`;
  blurryText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)})`;
};

let int = setInterval(blurry, 30);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
