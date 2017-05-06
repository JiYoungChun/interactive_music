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
}



function setup() {
  //bubble= loadImage("star.png");
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

function draw() {

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
  strokeWeight(0.5);
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

 // Creature1.draw();
  //Creature2.draw();
 // Creature3.draw();
   //Creature4.draw();
   //Creature5.draw();
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


var Creature = function(_position, _radius){

  this.position = _position;
  this.radius = _radius;
  this.numSegments =60;
  this.points = [];
  this.centroid;
  this.particles = [];
  this.springStrength = 0.5;
  //this.springStrength2=0.001;

  this.init = function(){

    var theta = 0;

    var centerParticle = new Particle( new Vec2D(this.position.x,this.position.y), 400,16,1);
   physics.addParticle(centerParticle);

    //centerParticle.lock();
    
    this.centroid = centerParticle;

    var increment = TWO_PI / this.numSegments;

    for ( var i = 0; i < this.numSegments; i++){

      theta = i * increment;

      var x = this.radius * cos ( theta );
      var y = this.radius * sin ( theta );

      x += this.position.x;
      y += this.position.y;

      var tempParticle = new Particle(new Vec2D(x,y),4,16,-1);
      var spring = new VerletSpring2D(centerParticle, tempParticle ,this.radius,this.springStrength);

      this.particles.push(tempParticle);

   // physics.addParticle(tempParticle);
    //physics.addSpring(spring);

      this.points[i] = createVector(x,y);

      if (i != 0 ){
        var distanceBetween = this.points[i].dist(this.points[i-1]);

        var neighbourSpring = new VerletSpring2D(tempParticle, this.particles[i-1] ,distanceBetween,this.springStrength);
       physics.addSpring(neighbourSpring);

      }
      

    }

    var lastSpring = new VerletSpring2D(this.particles[0], this.particles[this.particles.length-1],distanceBetween,this.springStrength);
    physics.addSpring(lastSpring);

// for (var a=0; a< this.numSegments/2-1; a++){
//     var diagnalSpring= new VerletSpring2D(this.particles[a], this.particles[a+this.numSegments/2], this.radius*2, this.springStrength);
// beginShape();
// vertex (this.particles[a].x, this.particles[a].y);
// endShape(CLOSE);
// }
// physics.addSpring(diagnalSpring);

//form of the monster
var diagnalSpring= new VerletSpring2D(this.particles[0], this.particles[20], this.radius*2, this.springStrength2);
var diagnalSpring2= new VerletSpring2D(this.particles[10], this.particles[30], this.radius*2, this.springStrength2);
var diagnalSpring3= new VerletSpring2D(this.particles[20], this.particles[40], this.radius*2, this.springStrength2);
var diagnalSpring4= new VerletSpring2D(this.particles[30], this.particles[50], this.radius*2, this.springStrength2);
var diagnalSpring5= new VerletSpring2D(this.particles[40], this.particles[0], this.radius*2, this.springStrength2);
var diagnalSpring6= new VerletSpring2D(this.particles[50], this.particles[10], this.radius*2, this.springStrength2);
// // physics.addSpring(diagnalSpring);
// // physics.addSpring(diagnalSpring2);
// // physics.addSpring(diagnalSpring3);
// // physics.addSpring(diagnalSpring4);
// // physics.addSpring(diagnalSpring5);
// // physics.addSpring(diagnalSpring6);
}

  this.draw = function(){
var a=0.001;
strokeWeight(a);
//stroke(200,180,255);
stroke(random(100,230),180,random(200,255));
//strokeWeight(1);
    for (var i = 0; i < this.numSegments; i++){
//noFill();


      fill(random(100,255),random(200),random(150,255),100);
      //fill(255,100);

      // noFill();
      // ellipse(this.points[i].x, this.points[i].y, 5,5 );  
      // 
      // this.particles[i].display();
      beginShape();
      for (var i = 0; i < this.particles.length; i++){

        vertex(this.particles[i].x, this.particles[i].y);
        line(this.centroid.x, this.centroid.y, this.particles[i].x, this.particles[i].y);

      }

      vertex(this.particles[0].x, this.particles[0].y);

      endShape();
    }
  }
}



