let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let cactus = document.querySelector("#cactus");
let road = document.querySelector("#road");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

// score variables + functions
let interval = null;
let playerScore = 0;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

// start
window.addEventListener("keydown", (start) => {
    // console.log(start);
    if (start.code == "Space") {
        gameOver.style.display = "none";
        cactus.classList.add("cactusActive");
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 100);
    }
});

// jump
window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp")
        if (dino.classList != "dinoActive") {
            dino.classList.add("dinoActive");

            setTimeout(() => {
                dino.classList.remove("dinoActive");
            }, 500);
        }
});

// end
let result = setInterval(() => {
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));

    let cactusLeft = parseInt(getComputedStyle(cactus).getPropertyValue("left"));

    if (dinoBottom <= 90 && cactusLeft >= 20 && cactusLeft <= 145) {
        // console.log("Game Over");
        gameOver.style.display = "block";
        cactus.classList.remove("cactusActive");
        road.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);