let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// BACKGROUND COLOR VERANDEREN VAN BODY - CLICK
let frontend = document.querySelector('a:nth-of-type(1)')
let body = document.querySelector('body')

frontend.addEventListener('click', bgcolor)

function bgcolor() {
  body.classList.toggle("green");
  console.log("green")

  if(this.innerHTML === "Frontend") {
    this.innerHTML = "Groen";
    console.log("groen_schrijf")
  } else {
    this.innerHTML = "Frontend";
    console.log("frontend_schrijf")
  }
}


//RANDOM ROTATE - CLICK
let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', groter)

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomDeg() {
  return `${random(360)}deg`;
}

function groter() {
  this.style.rotate = randomDeg();
  console.log(randomDeg())
}


//MOUSEOVER

let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener("mouseover", hovered, false);
and.addEventListener("mouseout", hoveredOut, false);
and.addEventListener('click', defaultScale)

function random2(number) {
  return Math.floor(Math.random() * 10)+ 1;
}

function randomScale() {
  return `${random2(5)}`;
}

function hovered() {
  console.log("Hovered!");
  this.style.scale = randomScale();
}

function hoveredOut() {
  console.log("Hovered Away!");
  this.style.scale = 1;
}

function defaultScale() {
  this.style.scale = 1;
}


