window.addEventListener("keydown", (event) => {
  console.debug("event", event);
  let insert = document.getElementById("insert");
  insert.innerHTML = `<div class="key">
    ${event.key === " " ? "space" : event.key}
    <small>Event.key</small>
    </div>
    <div class="key">
    ${event.keyCode}
    <small>Event.keyCode</small>
    </div>
    <div class="key">
    ${event.code}
    <small>Event.code</small>
    </div>`;
});
