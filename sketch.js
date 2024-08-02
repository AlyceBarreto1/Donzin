function setup() {
    createCanvas(600, 600);
    background("pink");
  }
  
  function draw() {
    stroke("lightgreen");
    fill("aqua");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  