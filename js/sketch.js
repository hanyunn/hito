

function setup() {
  // put setup code here to run once

  //creat canvas 500 by 500 px
  createCanvas(windowWidth,windowHeight);

  background(320, 180, 540);

  print(windowWidth);
}

function draw() {

  //change rectangle x,y coordinates to center
  rectMode(CENTER);

  //point is only x,y coordinate
  strokeWeight(300);
  point(mouseX, mouseY);

  //styles for the ellipse
  


  smooth();
  //styles for the point
  fill(120);
  stroke(137, 112, 161)
  print(mouseX);

}
