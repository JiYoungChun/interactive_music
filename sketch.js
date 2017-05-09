var physics
var particles = [];
var particless = [];
var particlesss = [];
var attractor;
var p;
var star;
var sound;
var rectSize;

function preload() {

    star = loadImage("assets/spark.png");
    sound = loadSound("assets/backgroundMusic.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // cnv.mouseClicked(togglePlay);
    background(0);


    //Setup part 18

    // Initialize the physics
    physics = new VerletPhysics2D();
    physics.setDrag(0.01);

    attractor = new Particle(new Vec2D(width / 2, height / 2), 1, width, 1);

    // Set the world's bounding box
    physics.setWorldBounds(new Rect(10, 10, width - 10, height - 10));

    // Make particles
    p1 = new Particle(new Vec2D(width / 2, height / 2), 4, 16, -10);

    for (var i = 0; i < 100; i++) {
        particles.push(new Particle(new Vec2D(random(width), random(height)), random(5, 20.0), 1, -0.1));
        particless.push(new Particle(new Vec2D(random(width), random(height)), random(10, 20.0), 1, -0.1));
        particlesss.push(new Particle(new Vec2D(random(width), random(height)), random(5, 10), 1, -0.005));
        var distanceB = int(dist(particless[i].x, particless[i].y, particlesss[i].x, particlesss[i].y));
        //particless[i].dist(particlesss[i]);

        var spring1 = new VerletSpring2D(p1, particlesss[i], windowHeight - 400, 0.3);
        var spring2 = new VerletSpring2D(p1, particless[i], random(100, 500), 0.3);
        //var spring3=new VerletSpring2D(p1,particlesss[i],random(10,50),0.3);
        var spring3 = new VerletSpring2D(p1, particles[i], random(10, 50), 0.3);


        physics.addParticle(p1);
        physics.addParticle(particles[i]);
        physics.addParticle(particless[i]);
        physics.addParticle(particlesss[i]);
        physics.addSpring(spring1);
        physics.addSpring(spring2);
        physics.addSpring(spring3);
    }

    //Setup Part2

    fft = new p5.FFT();
    amplitude = new p5.Amplitude();
    sound.amp(0.2);
    rectSize = width / 10;

    sound.play();
}

var currSketch = 1;
//

function draw() {

    if (mouseIsPressed) {
        var speed = map(mouseY, 0.1, height, 0, 2);
        speed = constrain(speed, 0.01, 3);
        sound.rate(speed);
        // console.log(speed);
    } else {
        sound.rate(1);
    }

    // console.log("mousex: "+mouseX); 
    //mouseX doesn't exist when in mobile mode
    //need to implement touch if mobile
    var panning = map(mouseX, 0., width, -1.0, 1.0);
    // console.log(panning);
    sound.pan(panning);

    switch (currSketch) {
        case 1:
            drawA();
            break;
        case 2:
            drawB();
            break;
        case 3:
            drawC();
            break;
        case 4:
            drawD();
            break;
        case 5:
            drawE();
            break;
        case 6:
            drawF();
            break;
        case 7:
            drawG();
            break;
        case 8:
            drawH();
        case 9:
            drawI();
            break;
        case 0:
            drawJ();
            break;
        default:
            drawA();
    }
}


function playSketch(id) {
    currSketch = id;
}

function keyPressed() {
    if (keyCode === 49) {
        console.log("1");
        playSketch(1);
    } else if (keyCode === 50) {
        console.log("2");
        playSketch(2);
    } else if (keyCode === 51) {
        console.log("3");
        playSketch(3);
    } else if (keyCode === 52) {
        console.log("4");
        playSketch(4);
    } else if (keyCode === 53) {
        console.log("5");
        playSketch(5);
    } else if (keyCode === 54) {
        console.log("6");
        playSketch(6);
    } else if (keyCode === 55) {
        console.log("7");
        playSketch(7);
    } else if (keyCode === 56) {
        console.log("8");
        playSketch(8);
    } else if (keyCode === 57) {
        console.log("9");
        playSketch(9);
    } else if (keyCode === 48) {
        console.log("0");
        playSketch(0);
    }
}


function togglePlay() {
    if (sound.isPlaying()) {
        sound.pause();
    } else {
        sound.play();
    }
}