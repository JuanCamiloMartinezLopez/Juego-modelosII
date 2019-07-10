const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint, Events } = Matter;

let ground;
const boxes = [];
let bird;
let world, engine;
let mConstraint;
let slingshot;
let border;


let dotImg;
let boxImg;
let bkgImg;

function preload() {
    dotImg = loadImage('./images/coctel.png');
    boxImg = loadImage('./images/pig.png');
    bkgImg = loadImage('./images/fondo.png');
    capucho = loadImage('./images/capucho.png')
}

function setup() {
    const canvas = createCanvas(711, 400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width / 2, height - 10, width, 20);
    border = new Ground(width - 10, height / 2, 20, height);
    for (let i = 0; i < 3; i++) {
        boxes[i] = new Box(450, 300 - i * 75, 50, 67);
    }
    bird = new Bird(150, 300, 25);

    slingshot = new SlingShot(150, 290, bird.body);

    const mouse = Mouse.create(canvas.elt);
    const options = {
        mouse: mouse,
    }

    // A fix for HiDPI displays
    mouse.pixelRatio = pixelDensity();
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
}

function keyPressed() {
    if (key == ' ') {
        World.remove(world, bird.body);
        bird = new Bird(150, 300, 25);
        slingshot.attach(bird.body);
    }

}


function mouseReleased() {
    setTimeout(() => {
        slingshot.fly();
    }, 100);
}

function draw() {

    background(bkgImg);
    image(capucho, 75, 265, 90, 120);
    Matter.Engine.update(engine);
    ground.show();
    border.show();
    for (let box of boxes) {
        box.show();
    }
    slingshot.show();
    bird.show();
}