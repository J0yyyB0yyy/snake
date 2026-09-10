let bgColor={r: 132, g: 0, b: 255};
let x=0, y=0;
let direction="";


class food{

};
class Snake{

};


function setup(){
    createCanvas(600, 600);
    background(bgColor.r, bgColor.g, bgColor.b);
}


function draw(){
    
    if(direction==="up"){
        y=y-2;
    }
    else if(direction === "down"){
        y=y+2;
    }
    else if(direction === "right"){
        x=x+2;
    }
    else if(direction === "left"){
        x=x-2;
    }
    
    background(bgColor.r, bgColor.g, bgColor.b);
    fill(0,0,0)
    square(x, y, 20);
    
    
}

function keyPressed(){
    if(keyCode===UP_ARROW || key==='w'){
        direction="up";
    }
    else if(keyCode===DOWN_ARROW || key==='s'){
        direction="down";
    }
    else if(keyCode===LEFT_ARROW || key==='a'){
        direction="left";
    }
    else if(keyCode===RIGHT_ARROW || key==='d'){
        direction="right";
    }
    return false;
    
}
