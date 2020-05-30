var fD, sD
function setup(){
    createCanvas(400,400);
    fD=new dropOne(50,50,50);
    sD=new dropTwo(20,20,20);
}
function draw(){
    background('#008080');
    fD.velocityY=5;
    sD.velocityY=5;
    if(fD.y>400){
        fD.y=0;
        fD.velocityY=5;
    }
    if(sD.y>400){
        sD.y=0;
        sD.velocityY=5;
    }
    
    fD.display();
    sD.display();
    drawSprites();
}