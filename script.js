// CONSTANTS
const darkColor = "#011053";

// COLLECT DOM ELEMENTS
let gridDiv = document.querySelector('#grid-div');
let slider = document.querySelector('.slider');
let sliderValue = document.querySelector('.slider-value');

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
//                     DOM
// --------------------------------------------

// Populate Grid with blocks
populateGrid(gridDiv, 16,16);

slider.oninput = function() {
    // Update slider text value
    let newValue = this.value;
    sliderValue.textContent = newValue.toString(10);
    // Delete all grid blocks
    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.firstChild);
    }
    //repopulate grid
    populateGrid(gridDiv, newValue,newValue);
}
