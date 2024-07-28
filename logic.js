const animationList = document.querySelector("#animation-list");
let selectedAnimation = "stand"

animationList.addEventListener("change", (e) => {
  selectedAnimation = e.target.value;
});

const animationSpeed = document.querySelector("#animation-speed");
const animationSpeedInNumber = document.querySelector("#animation-speed-in-number");
let staggerFrames = 5;
animationSpeedInNumber.innerText = staggerFrames;

animationSpeed.addEventListener("change", (e) => {
  staggerFrames = e.target.value;
  animationSpeedInNumber.innerText = staggerFrames;
})


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;

let frameX = 0;
let frameY = 0;
let gameFrame = 0;

const spriteAnimation = [
  {
    id: 1,
    name: "stand",
    frame: 6,
    y: 0,
  },
  {
    id: 2,
    name: "jump",
    frame: 6,
    y: 1,
  },
  {
    id: 3,
    name: "fall",
    frame: 6,
    y: 2,
  },
  {
    id: 4,
    name: "run",
    frame: 8,
    y: 3,
  },
  {
    id: 5,
    name: "dizzy",
    frame: 10,
    y: 4,
  },
  {
    id: 6,
    name: "sit",
    frame: 4,
    y: 5,
  },
  {
    id: 7,
    name: "roll",
    frame: 6,
    y: 6,
  },
  {
    id: 8,
    name: "bite",
    frame: 6,
    y: 7,
  },
  {
    id: 9,
    name: "KO",
    frame: 11,
    y: 8,
  },
  {
    id: 10,
    name: "get hit",
    frame: 3,
    y: 9,
  },
];

const playerImage = new Image();
playerImage.src = "assets/images/shadow_dog.png";

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  spriteAnimation.forEach((item) => {
    if (item.name !== selectedAnimation) {
      return;
    }
    frameY = item.y;

    ctx.drawImage(
      playerImage,
      frameX * SPRITE_WIDTH,
      frameY * SPRITE_HEIGHT,
      SPRITE_WIDTH,
      SPRITE_HEIGHT,
      0,
      0,
      SPRITE_WIDTH,
      SPRITE_HEIGHT
    );
    if (Math.floor(gameFrame % staggerFrames) === 0) {
      if (frameX < item.frame) frameX++;
      else frameX = 0;
    }
  });

  gameFrame++;
  requestAnimationFrame(animate);
}
animate()