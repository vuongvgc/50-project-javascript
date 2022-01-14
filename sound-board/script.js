const sounds = ["applause", "boo", "tada", "victory", "wrong"];
sounds.forEach((sound) => {
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerHTML = sound;
  btn.addEventListener("click", () => {
    stopSound(sounds);
    document.getElementById(sound).play();
  });

  let buttons = document.getElementById("buttons");
  buttons.appendChild(btn);
});

function stopSound(sounds) {
  sounds.forEach((sound) => {
    let song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
