var circle;
var star;
var  amplitude;

function preload(){
  star= loadImage("spark.png");
  sound= loadSound("backgroundM.m4a");
}

function setup() {
  //bubble= loadImage("star.png");
  	var cnv= createCanvas(windowWidth, windowHeight);
  	 cnv.mouseClicked(togglePlay);
	background(0);
 	fft = new p5.FFT();
  	amplitude = new p5.Amplitude();

  	sound.amp(0.2);
  	//sound.play();

}
function draw() {

  

  background(0);

  //noFill();
    fill(255,100);
   //fill(random(100,255),random(200),random(150,255),200);
    //stroke(random(200,255),random(200,255),random(200,255),200);
    stroke(255);
    strokeWeight(0.5);

   var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 1000);

  // if (sound.isPlaying()) {
   //ellipse(width/2,height/2,size,size);
   if (level  >0){
   image(star,width/2-size/2,height/2-size/2,size,size);


    var waveform = fft.waveform(16);
  

  noFill();
  beginShape();
  stroke(255); 
  strokeWeight(1);
  for (var i = 0; i< 16; i++){
    var x = map(i, 0, 16, 0, width);
    var y = map( waveform[i], -1, 1, 100, height-100);
    vertex(x,y);
  }
  endShape();
}

  //if waveform[i]
// }
// else {
// noFill();
//   beginShape();
//   stroke(255); 
//   strokeWeight(2);
//   for (var i = 0; i< waveform.length; i++){
//     var x = map(i, 0, waveform.length, 0, width);
//     var y = height/2;
//     vertex(x,y);
//   }
//   endShape();
//     }
}
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.play();
  }
}
