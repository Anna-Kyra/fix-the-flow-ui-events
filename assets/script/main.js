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

// ON MOUSE MOVE + KEYDOWN
let sprint5 = document.querySelector('a:nth-of-type(5)')

sprint5.addEventListener("click", moveWithMouse, false); // wanneer de sprint 5 button is ingeklikt volgd de button de muis

window.onmousemove = function (e) { // voor het volgen van de muis op de pagina
  var x = e.pageX,
      y = e.pageY;
  sprint5.style.top = (y) + 'px';
  sprint5.style.left = (x) + 'px';
};

function moveWithMouse() {
  this.classList.add('absolute');
  this.innerHTML = "undo met X";
  console.log('hi')
}

addEventListener("keydown", keydown)

function keydown(event){
  if (event.keyCode === 88) { // 88 is de x key
    sprint5.classList.remove('absolute');
    sprint5.innerHTML = "Sprint 5";
    console.log('88')
	}
}

// DOUBLE CLICK
let fix = document.querySelector('a:nth-of-type(6)')
fix.addEventListener("dblclick", dblclick, false);

function dblclick(){
  console.log('geklikt dubbel')
  this.classList.add('blur')
}

// FOCUS
let the = document.querySelector('a:nth-of-type(7)')

the.addEventListener('focus', focusThe)
the.addEventListener('blur', blurThe)

function focusThe(){
  console.log('is gefocused')
  this.classList.toggle('focus-the')
}

function blurThe(){
  console.log('is gefocused')
  // this.style.background = "#7ce7c9";
  // this.style.color = "#050840";
  this.classList.toggle('blur-the')
}

// RICKROLLED 
let flow = document.querySelector('a:nth-of-type(8)')
let rickrolled = document.querySelector('.rickrolled')

 // wanneer de sprint 5 button is ingeklikt volgd de button de muis
flow.addEventListener("mousemove", hoveredFlow, false);
// flow.addEventListener("mouseout", hoveredOutFlow, false);

window.onmousemove = function (e) { // voor het volgen van de muis op de pagina
  var x = e.pageX,
      y = e.pageY;
      rickrolled.style.top = (y) + 'px';
      rickrolled.style.left = (x) + 'px';
      console.log('hij doet het')
};

let audio2 = document.querySelector('audio[data-key="82"]');

console.log(audio2)
function hoveredFlow() {
  rickrolled.classList.toggle('visibility');
  console.log('hi')
}

function playSound(e){
  if (e.keyCode === 82) { // 82 is de r key
    console.log('r') 
	}

  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  // const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if(!audio) return; //stop the function from running all toghether
  audio.currentTime = 0; //rewind to the start
  audio.play();


  rickrolled.classList.toggle('visibility');
};

window.addEventListener('keydown', playSound); 
