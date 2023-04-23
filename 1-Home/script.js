var volunteer = 0;
var submitImg, submit;

function preload(){
    submitImg = loadImage("submit.png");
}

function setup(){
    canvas = createCanvas(400, 400);
    submit = createSprite(100, 100);
    submit.addImage(submitImg);
    submit.scale = 0.5;
}

function draw(){
    fill("white");
    textSize(30);
    text("Volunteers: "+volunteer, 200, 200);

    if(mousePressedOver(submit)){
        volunteer+=1
    }
    drawSprites();
}
    