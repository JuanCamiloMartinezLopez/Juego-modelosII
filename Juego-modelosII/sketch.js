const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint, Events} = Matter;

var sound;
var song;

let ground;
const boxes = [];
const tables = [];
let bird;
let world, engine;
let mConstraint;
let slingshot;
let border;

var punt = 0;

let dotImg;
let boxImg;
let bkgImg;
let tblImg;

//carga de archivos
function preload() {
    dotImg = loadImage('./images/coctel.png');
    boxImg = loadImage('./images/pig.png');
    bkgImg = loadImage('./images/fondo.png');
    capucho = loadImage('./images/capucho.png')
    tblImg = loadImage('./images/tabla.png')
    sound = loadsong('./sounds/pop.mp3')
    song =  loadsong('./sounds/angryb.mp3')
}
//inicializacion del juego
function setup() {
    const canvas = createCanvas(700, 400);
    
    //song.play();
    //song.setVolume(0.5);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(width / 2, height - 10, width, 20);
    border = new Ground(width - 10, height / 2, 20, height);
    for (let i = 0; i < 3; i++) {
        boxes[i] = new Box(450, 360 - i * 60, 15,1);
    }
    for (let i = 0; i < 3; i++) {
        tables[i] = new Table(400,320-i*60, 10,50)
        tables[i+3] = new Table(500,320-i*60, 10,50)
        tables[i+6] = new Table(400,310-i*60, 110,10)
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

    try {
        if(bird.intersects(box)){
            World.remove(world, box.body);
            punt +=100;
            //sound.play();
        }
        if(bird.intersects(table)){
            World.remove(world,table.body);
            //sound.play();
        }
    }catch(event){

    }
    
}

function keyPressed() {
    if (key == ' ') {
        World.remove(world, bird.body);
        bird = new Bird(150, 300, 25);
        slingshot.attach(bird.body);
    }
    if(key=='r'){
        World.remove(world, world);
        setup();

    }

}


function mouseReleased() {
    setTimeout(() => {
        slingshot.fly();
    }, 100);
}

function distance(x1,y1,x2,y2){
    let d = dist(x1,y1,x2,y2);
    return d;

}


function draw() {
    fill(250);
    textSize(64);
    text(punt,122,251);
    background(bkgImg);
    image(capucho, 75, 265, 90, 120);
    Matter.Engine.update(engine);
    ground.show();
    //border.show();
    for (let box of boxes) {
        box.show();
    }
    for (let table of tables){
        table.show();
    }
    slingshot.show();
    bird.show();
    
}