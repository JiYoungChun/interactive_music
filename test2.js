  var a=0;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  
} 

function draw() { 
  background(0,10);
  fill(255);
stroke(255);
strokeWeight(5);
 var r= width;
  	var x = r*r*cos(a);
  	var y= r*r*sin(a);
	line(width/2,height/2,x,y);
	a+=0.1;

}