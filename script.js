// script.js
document.addEventListener("DOMContentLoaded", () => {
    const diceButton = document.getElementById("roll-dice");
    const diceResult = document.getElementById("dice-result");
    const playerPosition = document.getElementById("player-position");
    const boardCells = document.querySelectorAll(".cell");

    let position = 0;

    function resetBoard() {
        boardCells.forEach(cell => cell.style.backgroundColor = "#e9ecef");
    }

    diceButton.addEventListener("click", () => {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        diceResult.textContent = `Résultat : ${diceRoll}`;
        
        resetBoard();

        position = (position + diceRoll) % boardCells.length;
        playerPosition.textContent = `Position actuelle : ${position}`;

        const currentCell = document.getElementById(`cell-${position}`);
        currentCell.style.backgroundColor = "#ffd700";
    });
});