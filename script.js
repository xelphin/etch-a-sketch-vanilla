// CONSTANTS
const darkColor = "#011053";
const rainbowColors = ["#ffadad","#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff" ];

// GLOBALS
let boardSize = 16;
let style = "block-colored-blue";
let rainbowIndex = 0;

// COLLECT DOM ELEMENTS
let gridDiv = document.querySelector('#grid-div');
let slider = document.querySelector('.slider');
let sliderValue = document.querySelector('.slider-value');
let resetButton = document.querySelector('#reset-btn');
// Styles
const styles = document.querySelectorAll('.style-btn');
let stylesArr = Array.from(styles);

// --------------------------------------------
//              HELPER FUNCTIONS
// --------------------------------------------

function getPercent(amount) {
    let aPortion = (1/amount)*100;
    return aPortion.toFixed(4).toString(10);
}

function getRainbowColor() {
    let color = rainbowColors[rainbowIndex];
    rainbowIndex = (rainbowIndex + 1 ) % rainbowColors.length;
    return color;
}

// --------------------------------------------
//                  FUNCTIONS
// --------------------------------------------
function changeColor (event) {
    event.target.style.removeProperty('background-color');
    event.target.className = "grid-block";
    event.target.classList.add(style);

    // Case Rainbow
    if (style == "block-colored-rainbow") {
        event.target.style.backgroundColor = getRainbowColor();
    }
}

function populateGrid (grid) {
    for (let i=0; i < (boardSize*boardSize); i++) {
        // Create grid block
        const gridBlock = document.createElement('div');
        gridBlock.className = 'grid-block';
        // Style grid block
        gridBlock.style.width = getPercent(boardSize) + "%";
        gridBlock.style.height = getPercent(boardSize) + "%";
        gridBlock.style.border = "1px solid var(--secondary)"; 
        gridBlock.addEventListener("mouseover", (event) => changeColor(event) );
        // Append
        grid.appendChild(gridBlock);
        console.log("Appended a block to the grid");
    }
}

function resetGridEntirely() {
    console.log("Resetting Grid Entirely");
    // Delete all grid blocks
    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.firstChild);
    }
    // Repopulate grid
    populateGrid(gridDiv);
}

function resetGridColor() {
    console.log("Resetting Grid Color");
    for (let child of gridDiv.children) {
        child.className = 'grid-block block-empty';
        child.style.removeProperty('background-color');
    }
    
}

function changeStyle(event) {
    let pickedStyle = event.target.getAttribute('data-style');
    switch (pickedStyle) {
        case "blue":
            console.log("style: dark blue");
            style = "block-colored-blue";
            break;
        case "gold":
            console.log("style: gold");
            style = "block-colored-gold";
            break;
        case "rainbow":
            console.log("style: rainbow");
            style = "block-colored-rainbow";
            break;
        default:
            console.log("style: something else");
    }
    resetGridColor();
}



// --------------------------------------------
//                     DOM
// --------------------------------------------

// Populate Grid with blocks
populateGrid(gridDiv);

// Add Event Listeners
resetButton.addEventListener("click", () => resetGridColor() );

slider.oninput = function() {
    // Update slider text value
    boardSize = this.value;
    sliderValue.textContent = boardSize.toString(10);
    // Resey grid
    resetGridEntirely()
}

stylesArr.forEach( (styleBtn) => {
    styleBtn.addEventListener("click", (event) => changeStyle(event) );
});