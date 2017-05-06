  var a=0;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  
} 

function draw() { 
  background(0,100);
  fill(255);

	rect(0,a,width,30);
	a+=10;
}