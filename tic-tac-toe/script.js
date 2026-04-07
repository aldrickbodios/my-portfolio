const tiles = document.querySelectorAll(".tiles");

let turn = 0;
let moves = 9;

let p1_points = 0;
let p2_points = 0;

tiles.forEach(tile => {
    tile.addEventListener("click", () => {
        if (tile.innerHTML !== "X" && tile.innerHTML !== "O") {
            if (turn % 2 === 0)
                tile.innerHTML = "X";
            else
                tile.innerHTML = "O";
            moves--;
            checkResult();
        }
    });
});

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6]
]

function checkResult() {
    
    for (let i = 0; i < 8; i++) {
        const winningCondition = winningConditions[i];
        const a = tiles[winningCondition[0]].innerHTML;
        const b = tiles[winningCondition[1]].innerHTML;
        const c = tiles[winningCondition[2]].innerHTML;
        if (a === "" || b === "" || c === "")
            continue;
        
        if (a === b && b === c) {
            declareWinner();
            break;
        }

        if (moves <= 0) {
            alert("It's a draw.");
            reset();
            break;
        }
        
    }
    turn++;
}

const declareWinner = () => {
    if (turn % 2 == 0) {
        alert("X Won.");
        p1_points++;
    }
    else {
        alert("O Won.");
        p2_points++;
    }
    reset();
}

function reset() {
    tiles.forEach(tile => {
        tile.innerHTML = "";
        turn = -1;
        moves = 9;
    });
    document.getElementById("p1-scoreboard").innerHTML = `Score: ${p1_points}`;
    document.getElementById("p2-scoreboard").innerHTML = `Score: ${p2_points}`;
};