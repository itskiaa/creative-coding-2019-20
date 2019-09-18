function preload() {
  // put preload code here
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES); // could be RADIANS  !! Uses RADIANS by default

  frameRate(30); // how many times function draw() runs per second
}

function draw() {

strokeWeight(2);

translate(3*width/8,frameCount*2);
rotate(-frameCount*0.24); // each frame it rotates 3 degrees

line(3*width/8,height/2,5*width/8,height/2);

//
// noFill();
//
// stroke(lerpColor(color("#ea0043"), color("#0fefca"), frameCount/120));
// ellipse(100,0,250,250);
//
// if (frameCount == 120) {
//   noLoop();
// }
// pop();


}
