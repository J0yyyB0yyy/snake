let bgColor = { r: 132, g: 0, b: 255 };
let direction = "", moveDirection ="";
let gameOver = false;
let lastMove=0, moveDelay=200;

let snake = [
    [300, 300],
    [280, 300],
    [260, 300]
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
    stroke(0, 0, 0);
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
    fill(0, 0, 0);

    for (let val of snake) {
        square(val[0], val[1], 20);
    }

    // Game over
    if (gameOver) {
        fill(255, 0, 0);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("GAME OVER", width / 2, height / 2);
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