const heading = document.querySelector("#heading");

const keyframes = {
  color: ["#f66", "#fc2", "#0c6", "#0bd"],
  //   opacity: [0, 1],
  //   translate: ["0 100px", 0],
};

const options = {
  duration: 2000,
  direction: "alternate",
  iterations: Infinity,
  //   easing: "easy",
};

heading.animate(keyframes, options);
