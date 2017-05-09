//sketches for each keypress 1 to 0 

function drawA()
{
  background(0,100);
  fill(255,100);
  stroke(255);
  strokeWeight(10);

  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 1800);
  var waveform = fft.waveform(256);
    
    rectMode(CORNER);
  fill(255);
  rect(0,a,width,30);
  a+=size/50;
  if (a>height){
    a=0;
  }
}



function drawB() {

  background(0);
  // Update the physics world
  physics.update();

  for (var i=0; i<particless.length; i++){
    particless[i].display();

  }
 for (var i=0; i<particlesss.length; i++){
    particlesss[i].display();
  }

   for (var i=0; i<particles.length; i++){
    particles[i].display();
  }

  //Draw a line between the particles
for (var i=0; i<100; i++){
  stroke(250);
  strokeWeight(0.3);
  line(p1.x,p1.y,particles[i].x,particles[i].y);
  line(p1.x,p1.y,particless[i].x,particless[i].y);
  line(p1.x,p1.y,particlesss[i].x,particlesss[i].y);
}

  p1.display();   
  p1.lock();

    if (mouseIsPressed) {
    attractor.lock();
    attractor.set(mouseX,mouseY);
  } else {
    attractor.unlock();
  }

}



function drawC() {

  background(0,10);
  fill(255,100);
 
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 500);
   if (level  >0){
    image(star,width/2-size/2,height/2-size/2,size,size);

  var waveform = fft.waveform(256);

    noStroke();
    beginShape();
  
    for (var i = 0; i< 256; i++){
      var x = map(i, 0, 256, 0, width);
      var y = map( waveform[i], -1, 1, 100, height-100);
      vertex(x,y);
    }
    endShape();
  }

}



function drawD() {

  background(0);
    fill(255,100);
    stroke(255);
    strokeWeight(2);

  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 1000);

   if (level  >0){
  var waveform = fft.waveform(256);
    noFill();
    beginShape();
    stroke(255); 
    strokeWeight(3);
    for (var i = 0; i< 256; i++){
      var x = map(i, 0, 256, 0, width);
      var y = map( waveform[i], -1, 1, 100, height-100);
      vertex(x,y);
    }
    endShape();
  }
}



function drawE() {

  background(0);
    fill(255);
    noStroke();
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 1000);

   if (level  >0){
  
  var waveform = fft.waveform(16);
  
noStroke();
   fill(255);
    beginShape();
    
    for (var i = 0; i< 16; i++){
      var x = map(i, 0, 15, 0, width);
      var y = map( waveform[i], -1, 1, 100, height-100);
      vertex(x,y);
    }
    endShape();
  }
}


var a=0;

function drawF() {

  background(0,50);
    fill(255,100);

  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 1000);

stroke(255);
strokeWeight(20);

 var r= width;
    var xx = r*r*cos(a);
    var yy= r*r*sin(a);
  line(width/2,height/2,xx,yy);
  a+=0.0005*size;


  
}

function drawG() {

  background(0);

    fill(255,200);

noStroke();
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 2000);


   if (level  >0){
     if (level>0.3){
      image(star,width/2-size/2,height/2-size/2,size,size);
}

var size1=map(level, 0.1, 1, 0, 500);
  if (level > 0.2) {
  for (var j=0; j < 5; j++) {
    for (var k=0; k < 5; k++) {
      ellipse (width/5*j+(width/10), height/5*k+(height/10), size1, size1);
      }
    }
  }

      var waveform = fft.waveform(256);
    

    noFill();
    beginShape();
    stroke(255); 
    strokeWeight(1);
    for (var i = 0; i< 256; i++){
      var x = map(i, 0, 255, 0, width);
      var y = map( waveform[i], -1, 1, 100, height-100);
      vertex(x,y);
    }
    endShape();
  }
}

function drawH() {

  
  noFill();
  strokeWeight(.5);
   var level = amplitude.getLevel();
    var size = map(level, 0, 1, 0, 500);
   // console.log(amplitude.getLevel());

   var frames=map(level, 0, 1, 10, 0);
     var points = map(level, 0, 1, 2, 10);


  num= size;
  smooth(6);
  stroke(255,150);
  noFill();
  //randomSeed(3434);
  background(0);
  for (var n=0; n<num; n++) {
      angle=0;
  var offSet=PI/num*n;
  beginShape();
  for (var i=0; i<points; i++) {
    //d = map(sin(offSet+theta),-1,1,80,100);
    d=2.5*n;
    var d2 = 2*n/2;
    var x = midx+sin(offSet+angle)*d;
    var y = midy+cos(offSet+angle)*d;
    var px = x + sin(offSet+theta)*d2;
   var py = y + cos(offSet+theta)*d2;
    vertex(px, py);
    angle += TWO_PI/points;
  }
  endShape(CLOSE);
  }
  theta += TWO_PI/frames;
midx= width/2;
midy= height/2;
}

function drawI() {

background(0);
    stroke(255);
    strokeWeight(30);

  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 500);
  var waveform = fft.waveform(256);
  //var speed= y;

    rectMode(CENTER);
    rect(width/2,height/2,rectSize,rectSize);
    rectSize+= size;
    if(rectSize > width)
    {
      rectSize = 0;
    }
}

var num;
var angle, theta=0, d=10;
var midx, midy;



function drawJ() {

    background(0);
    fill(255,100);
    stroke(255);
    strokeWeight(10);

  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 1000);
  var waveform = fft.waveform(16);
    

    noFill();
    beginShape();
    stroke(255); 
    strokeWeight(10);
    for (var i = 0; i< 16; i++){
      var x = map(i, 0, 15, 0, width);
      var y = map( waveform[i], -1, 1, 0, height);
      vertex(x,y);
    }
    endShape();
  
}