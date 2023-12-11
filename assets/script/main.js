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





