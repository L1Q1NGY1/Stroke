function setup() {
  createCanvas(windowWidth,windowHeight);
  background(200);
  angleMode(DEGREES);
  
  frameRate(20);
}

function draw() {
  translate(width/2,height/2);
  rotate(frameCount*6);
  noStroke();
  
  fill(lerpColor(color(92,0,26,10), color(6,94,79,10), frameCount/200));
  ellipse(100,0,50+frameCount*6,50+frameCount*6);
  
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}