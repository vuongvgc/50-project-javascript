const joke = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");

generateJoke();
// function generateJoke() {
//   fetch("https://icanhazdadjoke.com", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       joke.innerHTML = data.joke;
//     });
// }

async function generateJoke() {
  let res = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  let data = await res.json();
  joke.innerHTML = data.joke;
}

btn.addEventListener("click", () => {
  generateJoke();
});
