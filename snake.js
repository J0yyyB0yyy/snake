let bgColor = { r: 15, g: 23, b: 42 };
let direction = "";
let gameOver = false, eat=false;
let lastMove=0, moveDelay=200;
let score=0, highScore=0;
let food;


let snake = [
    [300, 300],
    [280, 300],
    [260, 300],
    [240, 300],
];

function setup() {
    createCanvas(600, 600);
    food = {
        x: 20*floor(random(1, 29)),
        y: 20*floor(random(1, 29)),

        createFood(){
            let occupied = true;
            while(occupied){
                this.x = 20*floor(random(1, 29));
                this.y = 20*floor(random(1, 29));
                occupied=false;
                for (let val of snake) {
                    if (this.x === val[0] && this.y === val[1]) {
                        occupied = true;
                    }
                }  
            }
        }
    };

}

function checkCollision(snake){
    let len = snake.length;
    for(let i=1; i<len;i++){
        if(snake[0][0]===snake[i][0]&&snake[0][1]===snake[i][1]){
            return true;
        }
    }
    return false;

}

function move(snake, direction) {
    let newHead;

    if (direction === "up") {
        newHead=[snake[0][0],snake[0][1] - 20];    
    }
    else if (direction === "down") {
        newHead=[
            snake[0][0],
            snake[0][1] + 20
        ];
    }
    else if (direction === "right") {
        newHead=[
            snake[0][0] + 20,
            snake[0][1]
        ];
    }
    else if (direction === "left") {
        newHead=[
            snake[0][0] - 20,
            snake[0][1]
        ];
    }

    if(newHead[0]===food.x && newHead[1]===food.y){
        eat=true;
        score+=10;
        highScore=Math.max(score, highScore);
        food.createFood();
    }

    snake.unshift(newHead);

    if(!eat){
        snake.pop();
    }

    eat=false;
}

function draw() {

    background(bgColor.r, bgColor.g, bgColor.b);

    //score
    fill(248, 250, 252);
    textSize(20);
    textStyle(BOLD);
    textAlign(LEFT, TOP);

    text("Score: " + score, 20, 20);
    text("High Score: " + highScore, 430, 20);
    

    // border
    stroke(51, 65, 85);
    strokeWeight(10);
    noFill();
    rect(0, 0, width, height);

    // Move snake
    if (!gameOver && direction !== "") {
        if(millis()-lastMove>=moveDelay){
            move(snake, direction);
            lastMove=millis();
        }
        
    }

    // Check collision
    if (
        snake[0][0] + 20 > width - 10 ||
        snake[0][0] < 10 ||
        snake[0][1] + 20 > height - 10 ||
        snake[0][1] < 10
    ) 
    {
        gameOver = true;
    }

    //food  
    fill(255, 0, 0);
    noStroke();
    circle(food.x + 10, food.y + 10, 20);
    
    //collision
    if(checkCollision(snake)){
        gameOver=true;
    }
    //snake
    fill(34, 197, 94);
    for (let val of snake) {
        square(val[0], val[1], 20);
    }
    
    // Game over
    if (gameOver) {

        fill(248, 250, 252);
        textSize(52);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);

        text("GAME OVER", width / 2, height / 2 - 20);

        textSize(18);
        textStyle(NORMAL);
        fill(148, 163, 184);
        text("Press R to restart", width / 2, height / 2 + 35);
    }

    //eating

}

// control
function keyPressed() {

    if (keyCode === UP_ARROW || key === "w") {
        if(direction !="down"){
            direction = "up";
        }
    }

    else if (keyCode === DOWN_ARROW || key === "s") {
        if(direction !="up"){
            direction = "down";
        }
    }

    else if (keyCode === LEFT_ARROW || key === "a") {
        if(direction !="right"){
            direction = "left";
        }
    }

    else if (keyCode === RIGHT_ARROW || key === "d") {
        if(direction !="left"){
            direction = "right";
        }
    }

    if((key==="r" || key==="R")&&gameOver){
        snake = [
        [300, 300],
        [280, 300],
        [260, 300],
        [240, 300]
        ];
        direction="";
        score=0;
        lastMove=0;
        gameOver=false;

        food.createFood();
    }

    return false;
}