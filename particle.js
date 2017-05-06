function Particle(position, radius, range, strength) {
  VerletParticle2D.call(this,position);
  this.r= radius;
  physics.addParticle(this);
  physics.addBehavior(new AttractionBehavior(this, range, strength));

  // Override the display method
  this.display = function(){
   noFill();
    //fill(255);
   //fill(random(100,255),random(200),random(150,255),200);
    //stroke(random(200,255),random(200,255),random(200,255),200);
    stroke(255);
    strokeWeight(0.5);
   
  //  ellipse(this.x,this.y,this.r*2,this.r*2);
   image(star,this.x-this.r,this.y-this.r,this.r*2,this.r*2);
    //this.image2 = image(star,this.x+this.r,this.y+this.r,this.r*2,this.r*2);

    //line (this.x-this.r,this.y-this.r,this.x+this.r,this.y+this.r);
    //var spring=new VerletSpring2D(this.image1,this.image2,160,0.01);

  }
}

// Inherit from the parent class
Particle.prototype = Object.create(VerletParticle2D.prototype);
Particle.prototype.constructor = Particle;

