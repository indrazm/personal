import Typed from "typed.js";
import confetti from "canvas-confetti";

new Typed("#element", {
  strings: ["Design Engineer.", "Product Engineer.", "SaaS enthusiast."],
  typeSpeed: 70,
  loop: true,
});

const myCanvas = document.createElement("canvas");
myCanvas.style.position = "absolute";
myCanvas.style.inset = 0;
myCanvas.style.zIndex = 0;
myCanvas.style.width = "100vw";
myCanvas.style.height = "100vh";
const appreciateButton = document.getElementById("appreciate");

appreciateButton.addEventListener("click", () => {
  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 160,
  });
});
