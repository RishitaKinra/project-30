const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops = 100;
var drops = [];
var man, man_img;

function preload(){
    man_img = loadImage("walking_1.png");
}

function setup(){
   createCanvas(windowWidth,windowHeight);

   engine = Engine.create();
   world = engine.world;

    if(frameCount% 150 === 0){
        for(var i = 0; i<maxDrops; i++){
            drops.push(new createDrops(random(0,windowWidth), random(0,windowHeight)));
        }
    }

    man = createSprite(windowWidth-400,windowHeight-250);
    man.addImage(man_img);
    man.scale = 1;
    
}

function draw(){
    background(0);

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
    
}   

