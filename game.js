const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let score = 0;
let aiScore = 0;

const keeper = {
    x: 1120,
    y: 300,
    w: 20,
    h: 100
};

const enemy = {
    x: 900,
    y: 350,
    size: 30
};

const player = {
    x: 150,
    y: 350,
    size: 30,
    speed: 5
};

const ball = {
    x: 600,
    y: 350,
    r: 12,
    vx: 0,
    vy: 0
};

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowUp") player.y -= player.speed;
    if (e.key === "ArrowDown") player.y += player.speed;
    if (e.key === "ArrowLeft") player.x -= player.speed;
    if (e.key === "ArrowRight") player.x += player.speed;
    if (e.code === "Space") {

    ball.vx = 15;
    ball.vy = 0;

}

});

function updateBall() {

    let dx = ball.x - player.x;
    let dy = ball.y - player.y;

    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 40) {
        ball.vx = dx * 0.15;
        ball.vy = dy * 0.15;
    }

    ball.x += ball.vx;
    ball.y += ball.vy;

    ball.vx *= 0.98;
    ball.vy *= 0.98;

    if (ball.x < ball.r) ball.x = ball.r;
    if (ball.y < ball.r) ball.y = ball.r;
    if (ball.x > canvas.width - ball.r)
        ball.x = canvas.width - ball.r;
    if (ball.y > canvas.height - ball.r)
        ball.y = canvas.height - ball.r;
}

function checkGoal() {

    if (
        ball.x > canvas.width - 20 &&
        ball.y > canvas.height / 2 - 100 &&
        ball.y < canvas.height / 2 + 100
         score++;

        alert("GOAL! Score: " + score);

        ball.x = 600;
        ball.y = 350;

        ball.vx = 0;
        ball.vy = 0;
    }

    if (
        ball.x < 20 &&
        ball.y > canvas.height / 2 - 100 &&
        ball.y < canvas.height / 2 + 100
    ) {

        aiScore++;

        alert("AI GOAL!");

        ball.x = 600;
        ball.y = 350;

        ball.vx = 0;
        ball.vy = 0;
    }

}
    ) {

        score++;

        alert("GOAL! Score: " + score);

        ball.x = 600;
        ball.y = 350;
        ball.vx = 0;
        ball.vy = 0;
    }
}

function draw() {
    function updateKeeper() {

    if(ball.y > keeper.y){
        keeper.y += 2;
    }

    if(ball.y < keeper.y){
        keeper.y -= 2;
    }

}

function updateEnemy() {
    let dx = ball.x - enemy.x;
let dy = ball.y - enemy.y;

let distance = Math.sqrt(dx * dx + dy * dy);

if (distance < 40) {
        ball.vx = -8;
    ball.vy = (Math.random() - 0.5) * 4;

    ball.vx = -8;
    ball.vy = (Math.random() - 0.5) * 4;

}

    if(ball.x > enemy.x){
        enemy.x += 1.5;
    }

    if(ball.x < enemy.x){
        enemy.x -= 1.5;
    }

    if(ball.y > enemy.y){
        enemy.y += 1.5;
    }

    if(ball.y < enemy.y){
        enemy.y -= 1.5;
    }

}

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#2e8b57";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "white";
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        80,
        0,
        Math.PI * 2
    );
    ctx.stroke();

    ctx.fillStyle = "white";

    ctx.fillRect(
        0,
        canvas.height / 2 - 100,
        20,
        200
    );

    ctx.fillRect(
        canvas.width - 20,
        canvas.height / 2 - 100,
        20,
        200
    );

 updateBall();
updateKeeper();
updateEnemy();
checkGoal();

    ctx.fillStyle = "blue";
    ctx.fillStyle = "black";
ctx.fillRect(
    keeper.x,
    keeper.y,
    keeper.w,
    keeper.h
);

ctx.fillStyle = "red";
ctx.fillRect(
    enemy.x,
    enemy.y,
    enemy.size,
    enemy.size
);
    ctx.fillRect(
        player.x,
        player.y,
        player.size,
        player.size
    );

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(
        ball.x,
        ball.y,
        ball.r,
        0,
        Math.PI * 2
    );
    ctx.fill();

    ctx.font = "24px Arial";
    ctx.fillText(
        "Aaryan",
        player.x - 10,
        player.y - 10
    );

    ctx.font = "32px Arial";
    ctx.fillText(
        "Score: " + score,
        20,
        40
    );

    requestAnimationFrame(draw);
}

draw();
