var dog,dogImg,hdogImg,database,foodS,foodStock

function preload()
{

  dogImg = loadImage("images/dogImg.png")
  hdogImg = loadImage("images/dogImg1.png")

}

function setup() {
  database = firebase.database ()
  createCanvas(500, 500);
  dog = createSprite(250,300,150,150)
  dog.addImage (dogImg)
  dog.scale = 0.1
  foodStock = database.ref ("Food")
  foodStock.on ("value",readStock)

  

}


function draw() {  
background ("green")

if (keyWentDown(UP_ARROW)) {
  writeStock (foodS);
  dog.addImage (hdogImg)
}
  drawSprites();

  text ("PRESS UP_ARROW TO FEED DOG",130,10)
  
  
  

}

function readStock (data) {
  foodS = data.val();
}

function writeStock (x) {

  if (x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref ('/').update ({
    Food:x })
}
