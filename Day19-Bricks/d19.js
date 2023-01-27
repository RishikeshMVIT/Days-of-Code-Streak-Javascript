const rand = (a, b) => Math.floor(Math.random() * (b - a + 1));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function loop() {
  const brick = document.createElement("div");
  brick.style.position = "absolute";
  brick.style.left = `${rand(10, 90)}%`;
  brick.style.top = `${rand(10, 90)}%`;
  brick.style.transform = `rotate(${rand(0, 90)}deg)`;
  brick.setAttribute(
    "class",
    `brick a${rand(1, 6)} b${rand(1, 6)} ${pick([
      "red",
      "green",
      "blue",
      "yellow",
      "skyblue",
      "hotpink"
    ])}`
  );
  document.body.appendChild(brick);

  if (document.body.children.length > 20) {
    document.body.removeChild(document.body.firstChild);
  }
  window.setTimeout(() => {
    requestAnimationFrame(loop);
  }, 300);
}

loop();
