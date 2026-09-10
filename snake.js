let bgColor = { r: 15, g: 23, b: 42 };
let direction = "";
let gameOver = false;
let lastMove=0, moveDelay=200;

let snake = [
    [300, 300],
    [280, 300],
    [260, 300],
    [240, 300]
];

function setup() {
    createCanvas(600, 600);
}

function move(snake, direction) {

    if (direction === "up") {
        snake.unshift([
            snake[0][0],
            snake[0][1] - 20
        ]);
        snake.pop();
    }

    else if (direction === "down") {
        snake.unshift([
            snake[0][0],
            snake[0][1] + 20
        ]);
        snake.pop();
    }

    else if (direction === "right") {
        snake.unshift([
            snake[0][0] + 20,
            snake[0][1]
        ]);
        snake.pop();
    }

    else if (direction === "left") {
        snake.unshift([
            snake[0][0] - 20,
            snake[0][1]
        ]);
        snake.pop();
    }
}

function draw() {

    background(bgColor.r, bgColor.g, bgColor.b);

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
    ) {
        gameOver = true;
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
}

function keyPressed() {

    if (gameOver === true) {
        return;
    }

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

    return false;
}