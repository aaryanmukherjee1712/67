const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const player = {
    x: 150,
    y: 350,
    size: 30,
    speed: 5
};

const ball = {
    x: 600,
    y: 350,
    r: 12
};

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowUp") {
        player.y -= player.speed;
    }

    if (e.key === "ArrowDown") {
        player.y += player.speed;
    }

    if (e.key === "ArrowLeft") {
        player.x -= player.speed;
    }

    if (e.key === "ArrowRight") {
        player.x += player.speed;
    }

});

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Veld
    ctx.fillStyle = "#2e8b57";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Middenlijn
    ctx.strokeStyle = "white";
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    // Middencirkel
    ctx.beginPath();
    ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        80,
        0,
        Math.PI * 2
    );
    ctx.stroke();

    // Linker doel
    ctx.fillStyle = "white";
    ctx.fillRect(
        0,
        canvas.height / 2 - 100,
        20,
        200
    );

    // Rechter doel
    ctx.fillRect(
        canvas.width - 20,
        canvas.height / 2 - 100,
        20,
        200
    );

    // Speler (Aaryan)
    ctx.fillStyle = "blue";
    ctx.fillRect(
        player.x,
        player.y,
        player.size,
        player.size
    );

    // Bal
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

    // Naam
    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText(
        "Aaryan",
        player.x - 10,
        player.y - 10
    );

    requestAnimationFrame(draw);
}

draw();
