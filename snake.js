let bgColor={r: 132, g: 0, b: 255};
let x=0, y=0;


class food{

};
class Snake{

};


function setup(){
    createCanvas(600, 600);
    background(bgColor.r, bgColor.g, bgColor.b);
}


function draw(){
    background(bgColor.r, bgColor.g, bgColor.b);

    if(keyIsDown(UP_ARROW) || keyIsDown(119)){
        y=y-2;
    }
    else if(keyIsDown(DOWN_ARROW) || keyIsDown(115)){
        y=y+2;
    }else if(keyIsDown(LEFT_ARROW) || keyIsDown(100)){
        x=x-2;
    }else if(keyIsDown(RIGHT_ARROW) || keyIsDown(97)){
        x=x+2;
    }
    // fill(255, 0, 0);
    // circle(mouseX, mouseY, 50);

    fill(0,0,0)
    square(x, y, 20);
    
    
}

function KeyPressed(){
    if(keyCode==UP_ARROW || keyCode=="w"){
        y=y-5;
    }
    else if(keyCode==DOWN_ARROW || keyCode=="s"){
        y=y+5;
    }
    else if(keyCode==LEFT_ARROW || keyCode=="d"){
        x=x-5;
    }
    else if(keyCode==RIGHT_ARROW || keyCode=="a"){
        x=x+5;
    }
    
}
