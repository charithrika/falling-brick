var box;
function setup()
{
 createCanvas(400,400)
 box=createSprite(40,40,40,40)
 box.shapeColor= "green";
 box.velocityX=5;
 box.rotation=50;
 box.x=200;
 box.y=200;

}

function draw()
{
 background(220);
 drawSprites();
}

