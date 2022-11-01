

/**
Portrait
Noémie Carrier


CART 253, Automne 2022

Conditional in class exercise 3, Fonctions

*/

"use strict";
let ring = 3;
var targetW = 20;
let targetRing = [100,30,50];

function preload() {
}

function setup() {
  createCanvas(500,500);
  background(93, 158, 65);
  rectMode(CENTER);
  noStroke(0);
}

function draw() {
}
  //react to where the mouse is positionned
function mouseClicked(){
  if (ring<1) {
    ring=1;
  }
  if(mousePosition(true)){
      print ("delete a ring");
      drawTarget(ring--);
    } else {
      print ("add a ring");
      drawTarget(ring++);
    }
}

//fonction to draw targets at the mouse position
function drawTarget(ring){
  let color1 = color(random(100,255),0,0);
  let color2 = color(200,200,random(200));
  for (let i=ring;i>=1;i--){
    if (i%2){//checks if
      fill(color1);
    } else {
      fill(color2);
    }
    ellipse(mouseX, mouseY, targetW*i);
  }
}

//function to check the position of the mouse. will return true = remove a circle
function mousePosition() {
  if(mouseX < width/2 && mouseY < height/2){
    return true;
  }
  if (mouseX > width/2 && mouseY > height/2){
    return true;
  }
}
