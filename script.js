// CONSTANTS
const darkColor = "#011053";

// GLOBALS
let boardSize = 16;

// COLLECT DOM ELEMENTS
let gridDiv = document.querySelector('#grid-div');
let slider = document.querySelector('.slider');
let sliderValue = document.querySelector('.slider-value');
let resetButton = document.querySelector('#reset-btn');

// --------------------------------------------
//              HELPER FUNCTIONS
// --------------------------------------------

function getPercent(amount) {
    let aPortion = (1/amount)*100;
    return aPortion.toFixed(4).toString(10);
}

// --------------------------------------------
//                  FUNCTIONS
// --------------------------------------------
function changeColor (event) {
    event.target.style.backgroundColor = "var(--dark)";
}

function populateGrid (grid) {
    for (let i=0; i < (boardSize*boardSize); i++) {
        // Create grid block
        const gridBlock = document.createElement('div');
        gridBlock.classList.add('grid-block');
        // Style grid block
        gridBlock.style.width = getPercent(boardSize) + "%";
        gridBlock.style.height = getPercent(boardSize) + "%";
        gridBlock.style.border = "1px solid var(--dark)"; 
        gridBlock.addEventListener("mouseover", (event) => changeColor(event) );
        // Append
        grid.appendChild(gridBlock);
        console.log("Appended a block to the grid");
    }
}

function resetGrid() {
    console.log("Resetting Grid");
    // Delete all grid blocks
    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.firstChild);
    }
    //repopulate grid
    populateGrid(gridDiv);
}



// --------------------------------------------
//                     DOM
// --------------------------------------------

// Populate Grid with blocks
populateGrid(gridDiv);

// Add Event Listeners
resetButton.addEventListener("click", () => resetGrid() );

slider.oninput = function() {
    // Update slider text value
    boardSize = this.value;
    sliderValue.textContent = boardSize.toString(10);
    // Resey grid
    resetGrid()
}
