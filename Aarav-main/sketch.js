const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Apple,AppleCut,Banana,BananaCut,Kiwi,KiwiCut,
Pineapple,PineappleCut,Strawberry,StrawberryCut,
Watermelon,WatermelonCut
var fruit = []
var rand
var knife

function preload(){
    fruit1 = loadImage("Fruit Ninja/fruit1.png")
    fruit1cut = loadImage("Fruit Ninja/fruit1cut.png")
    fruit2 = loadImage("Fruit Ninja/fruit2.png")
    fruit2cut = loadImage("Fruit Ninja/fruit2cut.png")
    fruit3 = loadImage("Fruit Ninja/fruit3.png")
    fruit3cut = loadImage("Fruit Ninja/fruit3cut.png")
    fruit4 = loadImage("Fruit Ninja/fruit4.png")
    fruit4cut = loadImage("Fruit Ninja/fruit4cut.png")
    fruit5 = loadImage("Fruit Ninja/fruit5.png")
    fruit5cut = loadImage("Fruit Ninja/fruit5cut.png")
    fruit6 = loadImage("Fruit Ninja/fruit6.png")
    fruit6cut = loadImage("Fruit Ninja/fruit6cut.png")
    Knife = loadImage("Fruit Ninja/knife.png")
}

function setup(){
    createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;

    knife = Bodies.circle(0, 0, 5)
        
}

function draw(){
    background("black");
    Engine.update(engine);
  if(frameCount%30 === 0){
    fruit.push(new Fruit(0,"fruit"+Math.round(random(1,6))+".png"))
}
for (var i=0; i<fruit.length; i++){
    fruit[i].display()
  }  



  image(Knife,mouseX,mouseY, 50, 50)

}
