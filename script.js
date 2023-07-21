let score = 0;
let myXPos = 100;
let myYPos = 100;
let ballArray = []
let shipPNG;
let meatPng;
function preload() {
    
    shipPng = loadImage("images/ship,png")
    meatPng = loadImage("images/astroid.jpg")
}
function setup() {
    createCanvas(700, 500)
    background(0);
    imageMode(CENTER)
}

function draw() {
    background(0);

    fill(255, 0, 0);
    rect(myXPos, myYPos, 70, 70); //for the square (player) <-- we should make that a square instead 
    
   image(meatPng, 50, 250) // <-- that's our astroid. 
   image(shipPNG, myXPos,myYPos)
   shipPNG.resize(50 , 50)
// put it here!
   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 2;
   }


   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 2;
   }


   if (keyIsDown(UP_ARROW)) {
       myYPos -= 2;
   }


   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 2;
   }
   
   
    score += 1;
    
    fill(255);
    textSize(30);
    text("Score: " + score, 20, 30);
   
}



