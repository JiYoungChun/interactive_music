var physics
var particles=[];
var particless = [];
var particlesss = [];
var attractor;

var p;

var star;
var myCreature, anotherCreature;


function preload(){
  star= loadImage("spark.png");
    sound= loadSound("BackgroundMusic.mp3");
//effect1=loadSound("jijijiji.mp3");
effect2=loadSound("ppyo.mp3");
//effect3=loadSound("tantantan.mp3");
effect4=loadSound("thik.mp3");
}

function setup() {
  //bubble= loadImage("star.png");
  setupA();
  setupB();
sound.play();
}



function draw() {


if (mouseIsPressed){
var speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 3);
  sound.rate(speed);

 // console.log(speed);
}else{
  sound.rate(1);
}


 // console.log(speed);
    var panning = map(mouseX, 0., width,-1.0, 1.0);
   // console.log(panning);
  sound.pan(panning);

if(isA)
{
   //console.log("A")
  drawA();
}
else if (isB)
{
  //console.log("B")
  drawB();
}

else if (isC)
{
 // console.log("C")
  drawC();
}

else if (isD)
{
  //console.log("D")
  drawD();
}
else if (isE)
{
  //console.log("E")
  drawE();
}
else if (isF)
{
  //console.log("F")
  drawF();
}
else if (isG)
{
  //console.log("G")
  drawG();
}
else if (isH)
{
  //console.log("H")
  drawH();
}
else if (isI)
{
  //console.log("I")
  drawI();
}
else if (isJ)
{
  //console.log("J")
  drawJ();
}

  
}





// function mousePressed(){
  // map the ball's x location to a panning degree
  // between -1.0 (left) and 1.0 (right)
  // var panning = map(mouseX, 0., width,-1.0, 1.0);
  //   console.log(panning);
  // sound.pan(panning);

  // sound.play();
// }


var isA = true;
var isB = false;
var isC = false;
var isD = false;
var isE = false;
var isF = false;
var isG = false;
var isH = false;
var isI = false;
var isJ = false;





function keyPressed() {
    if (keyCode === 49) {
    console.log("1");
    isA = true;
    isB = false;
    isC = false;
    isD = false;
    isE = false;
    isF = false;
    isG = false;
    isH = false;
    isI = false;
    isJ = false;

  } else if (keyCode === 50) {
    console.log("2");
    isB = true;
    isA = false;
    isC = false;
    isD = false;
    isE = false;
    isF = false;
    isG = false;
    isH = false;
    isI = false;
    isJ = false;
  }
    else if (keyCode === 51) {
    console.log("3");
    isC = true;
    isA = false;
    isB = false;
    isD = false;
    isE = false;
    isF = false;
    isG = false;
    isH = false;
    isI = false;
    isJ = false;
  }
    else if (keyCode === 52) {
    console.log("4");
    isD = true;
    isA = false;
    isB = false;
    isC = false;
    isE = false;
    isF = false;
    isG = false;
    isH = false;
    isI = false;
    isJ = false;
  }
    else if (keyCode === 53) {
    console.log("5");
    isE = true;
    isA = false;
    isB = false;
    isC = false;
    isD = false;
    isF = false;
    isG = false;
    isH = false;
    isI = false;
    isJ = false;
  }
    else if (keyCode === 54) {
    console.log("6");
    isF = true;
    isA = false;
    isB = false;
    isC = false;
    isD = false;
    isE = false;
    isG = false;
    isH = false;
    isI = false;
    isJ = false;

  } 
    else if (keyCode === 55) {
    console.log("7");
    isG = true;
    isA = false;
    isB = false;
    isC = false;
    isD = false;
    isE = false;
    isF = false;
    isH = false;
    isI = false;
    isJ = false;
  }
    else if (keyCode === 56) {
    console.log("8");
    isH = true;
    isA = false;
    isB = false;
    isC = false;
    isD = false;
    isE = false;
    isF = false;
    isG = false;
    isI = false;
    isJ = false;
  }
    else if (keyCode === 57) {
    console.log("9");
    isI = true;
    isA = false;
    isB = false;
    isC = false;
    isD = false;
    isE = false;
    isF = false;
    isG = false;
    isH = false;
    isJ = false;
  }
    else if (keyCode === 48) {
    console.log("0");
    isJ = true;
    isA = false;
    isB = false;
    isC = false;
    isD = false;
    isE = false;
    isF = false;
    isG = false;
    isH = false;
    isI = false;
  }
}




//SETUP

function setupA(){
   createCanvas(windowWidth, windowHeight);
  background(0);
    

  // Initialize the physics
  physics=new VerletPhysics2D();
  physics.setDrag(0.01);
  

  // for(var i=0; i<50; i++) {
  //   particless.push(new Particle(new Vec2D(random(width),random(height)),random(0.1,30.0),1,-0.1));
  // }
  // for(var i=0; i<50; i++) {
  //   particlesss.push(new Particle(new Vec2D(random(width),random(height)),random(0.5,10),1,-0.005));
  // }

  attractor = new Particle(new Vec2D(width/2, height/2), 1, width,1);
 // physics.addBehavior(new GravityBehavior(new Vec2D(0,0.2)));

  // Set the world's bounding box
 physics.setWorldBounds(new Rect(10,10,width-10,height-10));

  
  // Make two particles
  p1 = new Particle(new Vec2D(width/2,height/2),4,16,-10);
  //p2 = new Particle(new Vec2D(width/2+160,20),4,16,-1);
  // Lock one in place
  // p1.lock();
for(var i=0; i<100; i++) {
  particles.push(new Particle(new Vec2D(random(width),random(height)),random(5,20.0),1,-0.1));
  particless.push(new Particle(new Vec2D(random(width),random(height)),random(10,20.0),1,-0.1));
  particlesss.push(new Particle(new Vec2D(random(width),random(height)),random(5,10),1,-0.005));
    var distanceB = int(dist(particless[i].x, particless[i].y, particlesss[i].x, particlesss[i].y));
  //particless[i].dist(particlesss[i]);
    // Make a spring connecting both Particles
   var spring1=new VerletSpring2D(p1,particlesss[i],windowHeight-400,0.3);
   var spring2=new VerletSpring2D(p1,particless[i],random(100,500),0.3);
   //var spring3=new VerletSpring2D(p1,particlesss[i],random(10,50),0.3);
    var spring3=new VerletSpring2D(p1,particles[i],random(10,50),0.3);
    // Anything we make, we have to add into the physics world
   
   physics.addParticle(p1);
    physics.addParticle(particles[i]);
    physics.addParticle(particless[i]);
   physics.addParticle(particlesss[i]);
    physics.addSpring(spring1);
   physics.addSpring(spring2);
   physics.addSpring(spring3);
  }

}


function setupB() {
  //bubble= loadImage("star.png");
    var cnv= createCanvas(windowWidth, windowHeight);
     //cnv.mouseClicked(togglePlay);
  background(0);
  fft = new p5.FFT();
    amplitude = new p5.Amplitude();

    sound.amp(0.2);
    //sound.play();

    rectSize= width/10;

}






function drawA()
{background(0,100);

  //noFill();
    fill(255,100);
   //fill(random(100,255),random(200),random(150,255),200);
    //stroke(random(200,255),random(200,255),random(200,255),200);
    stroke(255);
    strokeWeight(10);

   var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 1800);

  // if (sound.isPlaying()) {
   //ellipse(width/2,height/2,size,size);
   if (level  >0){
    // image(star,width/2-size/2,height/2-size/2,size,size);

}
      var waveform = fft.waveform(256);
    

    // noFill();
    // beginShape();
    // stroke(255); 
    // strokeWeight(10);
    // for (var i = 0; i< 16; i++){
    //   var x = map(i, 0, 15, 0, windowWidth);
    //   var y = map( waveform[i], -1, 1, 0, height);
    //   vertex(x,y);
    // }
    // endShape();
   // background(0,100);
  fill(255);

  rect(0,a,width,30);
  a+=size/50;
  if (a>height){
    a=0;
  }
}

function drawB() {

  // Update the physics world
  physics.update();

  background(0);

  //attractor.display();
  for (var i=0; i<particless.length; i++){
    particless[i].display();
   // particless[i].lock();
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
  // //Display the particles
  p1.display();
  // p2.display();

  // Move the second one according to the mouse
  // if (mouseIsPressed) {
   p1.lock();
  //   p2.x = mouseX;
  //   p2.y = mouseY;
  //   p2.unlock();
  // } 
    if (mouseIsPressed) {
    attractor.lock();
    attractor.set(mouseX,mouseY);
  } else {
    attractor.unlock();
  }
//   
  //Creature1.position.x= mouseX;
  //Creature1.position.y=mouseY;
  
}


function drawC() {

  background(0,10);

  //noFill();
    fill(255,100);
   //fill(random(100,255),random(200),random(150,255),200);
    //stroke(random(200,255),random(200,255),random(200,255),200);
 
   var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 1000);

  // if (sound.isPlaying()) {
   //ellipse(width/2,height/2,size,size);
   if (level  >0){
     image(star,width/2-size/2,height/2-size/2,size,size);


      var waveform = fft.waveform(256);
    

    fill(255);
    noStroke();
    beginShape();
    // stroke(255); 
    // strokeWeight(3);
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

  //noFill();
    fill(255,100);
   //fill(random(100,255),random(200),random(150,255),200);
    //stroke(random(200,255),random(200,255),random(200,255),200);
    stroke(255);
    strokeWeight(2);

   var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 1000);

  // if (sound.isPlaying()) {
   //ellipse(width/2,height/2,size,size);
   if (level  >0){
     //image(star,width/2-size/2,height/2-size/2,size,size);
    //ellipse(width/2,height/2,size,size);

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

  //noFill();
    fill(255);
   //fill(random(100,255),random(200),random(150,255),200);
    //stroke(random(200,255),random(200,255),random(200,255),200);
    //stroke(255);
    //strokeWeight(10);
    noStroke();
   var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 1000);

  // if (sound.isPlaying()) {
   //ellipse(width/2,height/2,size,size);
   if (level  >0){
     //image(star,width/2-size/2,height/2-size/2,size,size);
//ellipse(width/2,height/2,size,size);

      var waveform = fft.waveform(16);
    
noStroke();
   fill(255);
    beginShape();
    // stroke(255); 
    // strokeWeight(3);
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

  //noFill();
    fill(255,100);
   //fill(random(100,255),random(200),random(150,255),200);
    //stroke(random(200,255),random(200,255),random(200,255),200);
    stroke(255);
    strokeWeight(10);

   var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 1000);

  // if (sound.isPlaying()) {
   //ellipse(width/2,height/2,size,size);
   if (level  >0){
    // image(star,width/2-size/2,height/2-size/2,size,size);


      var waveform = fft.waveform(256);
    

    fill(255);
    noStroke();
    //beginShape();
    //stroke(255); 
    //strokeWeight(3);
    for (var i = 0; i< 256; i++){
      var x = map(i, 0, 255, 0, width);
      var y = map( waveform[i], -1, 1, 0, height);
      //vertex(x,y);
    }
    //endShape();
  //ellipse(width/2,height/2,y,y);

 // background(0,10);
  //fill(255);
stroke(255);
strokeWeight(20);

 var r= width;
    var xx = r*r*cos(a);
    var yy= r*r*sin(a);
  line(width/2,height/2,xx,yy);
  a+=0.0005*size;


  }
}

function drawG() {

  background(0);

  //noFill();
    fill(255,200);
   //fill(random(100,255),random(200),random(150,255),200);
    //stroke(random(200,255),random(200,255),random(200,255),200);
    //stroke(255);
    //strokeWeight(2);

noStroke();
   var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 2000);

  // if (sound.isPlaying()) {
   //ellipse(width/2,height/2,size,size);
   if (level  >0){
     if (level>0.3){
      image(star,width/2-size/2,height/2-size/2,size,size);
}

var size1=map(level, 0.1, 1, 0, 500);
  if (level > 0.2) {
  for (var j=0; j < 5; j++) {
    for (var k=0; k < 5; k++) {
      ellipse (width/5*j+(width/10), height/5*k+(height/10), size1, size1);
     //image (star,width/5*j+(width/10), height/5*k+(height/10), size1, size1);
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


   //num = width/9;
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
  //if (frameCount<=frames) saveFrame("image-###.gif");

midx= width/2;
midy= height/2;
}

function drawI() {

  background(0);

  //noFill();
    //fill(255,100);
   //fill(random(100,255),random(200),random(150,255),200);
    //stroke(random(200,255),random(200,255),random(200,255),200);
    stroke(255);
    strokeWeight(30);

   var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 500);

  // if (sound.isPlaying()) {
   //ellipse(width/2,height/2,size,size);
   if (level  >0){
    // image(star,width/2-size/2,height/2-size/2,size,size);
}

      var waveform = fft.waveform(256);
    

    // noFill();
    // beginShape();
    // stroke(255); 
    // strokeWeight(3);
    for (var i = 0; i< 256; i++){
      var x = map(i, 0, 255, 0, width);
      var y = map( waveform[i], -1, 1, 100, height-100);
      vertex(x,y);
     }
    // endShape();
    
    var speed= y;
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

  //noFill();
    fill(255,100);
   //fill(random(100,255),random(200),random(150,255),200);
    //stroke(random(200,255),random(200,255),random(200,255),200);
    stroke(255);
    strokeWeight(10);

   var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 1000);

  // if (sound.isPlaying()) {
   //ellipse(width/2,height/2,size,size);
   if (level  >0){
    // image(star,width/2-size/2,height/2-size/2,size,size);
}

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


function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.play();
  }
}
