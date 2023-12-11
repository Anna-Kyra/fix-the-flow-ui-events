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
    this.innerHTML = "Groen"; // als er Frontend staat veranderd de innerHTML in Groen
    console.log("groen_schrijf")
  } else {
    this.innerHTML = "Frontend"; // als er geen Frontend staat veranderd de innerHTML in Groen
    console.log("frontend_schrijf")
  }
}


//RANDOM ROTATE - CLICK
let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', groter)

function random(number) {
  return Math.floor(Math.random() * number); //random nummer
}

function randomDeg() {
  return `${random(360)}deg`; // random getal tot 360 met deg erachter
}

function groter() {
  this.style.rotate = randomDeg(); // random getal wordt opgeroepen in rotate
  console.log(randomDeg())
}


//MOUSEOVER

let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener("mouseover", hovered, false);
and.addEventListener("mouseout", hoveredOut, false);
and.addEventListener('click', defaultScale)

function randomScale(number) {
  return Math.floor(Math.random() * 50)+ 1; // random getal van 1 tot 50
}

function hovered() {
  console.log("Hovered!");
  this.style.scale = randomScale(); // random getal wordt opgeroepin als scale
}

function hoveredOut() {
  console.log("Hovered Away!");
  this.style.scale = 1; // scale = 1
}

function defaultScale() {
  this.style.scale = 1;
}

// MOUSEDOWN
let development = document.querySelector('a:nth-of-type(4)');
development.addEventListener("mousedown", mousePressed, false);
development.addEventListener("mouseup", mouseReleased, false);
development.addEventListener("click", mouseClicked, false);

function mousePressed() { //wanneer je hem indrukt
    console.log("Mouse is down!");
    this.classList.add('omlaag');
    this.classList.remove('omhoog');
}

function mouseReleased() { //wanneer je hem loslaat
    console.log("Mouse is up!");
    this.classList.add('omhoog');
    this.classList.remove('omlaag');
}

count = 0; // de click counter begint met 0

function mouseClicked() { //wanneer je hem heb geklikt
    console.log("Mouse is clicked!");
    count += 1; // er komt steeds 1 bij
    this.innerHTML = "Development: " + count; // de count wordt opgeroepen in de html
}
