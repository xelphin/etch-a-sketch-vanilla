// CONSTANTS
const darkColor = "#011053";

// DOM
let gridDiv = document.querySelector('#grid-div');

// --------------------------------------------
//              HELPER FUNCTIONS
// --------------------------------------------

function getPercent(amount) {
    let aPortion = (1/amount)*100;
    return aPortion.toFixed(2).toString(10);
}

// --------------------------------------------
//                  FUNCTIONS
// --------------------------------------------
function changeColor (event) {
    event.target.style.backgroundColor = "var(--dark)";
}

function populateGrid (grid, rows, columns) {
    for (let i=0; i < (rows*columns); i++) {
        // Create grid block
        const gridBlock = document.createElement('div');
        gridBlock.classList.add('grid-block');
        // Style grid block
        gridBlock.style.width = getPercent(rows) + "%";
        gridBlock.style.height = getPercent(columns) + "%";
        gridBlock.style.border = "1px solid var(--dark)"; 
        gridBlock.addEventListener("mouseover", (event) => changeColor(event) );
        // Append
        grid.appendChild(gridBlock);
        console.log("Appended a block to the grid");
    }
}




// --------------------------------------------
//                     INIT
// --------------------------------------------

// Populate Grid with blocks
populateGrid(gridDiv, 16,16);

