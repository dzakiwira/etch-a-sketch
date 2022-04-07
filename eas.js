const canvas = document.getElementById('canvas');
const divs = document.querySelectorAll('div');
const resetBtn = document.getElementById('reset');
const randColour = document.getElementById('random');
const black = document.getElementById('black');
const colorPicker = document.getElementById('colorpicker')
let ax = document.getElementById('grid-size');

let setColor = 'black';

addNew(ax.value);

// Draws grid on to canvas
function addNew(size) {
    for (let i = 0; i < size; i++) {
        const newRow = document.createElement('row');
        newRow.style.width = "500px";
        canvas.appendChild(newRow).className = "row";
        
        for (let x = 0; x < size; x++) {
            const newDiv = document.createElement('div');
            newDiv.addEventListener('mouseover', changeColour);
            newDiv.style.width = `${500/size}px`;
            newRow.appendChild(newDiv).className = "grid";
        }
    }
}

// Resets the grid to a blank state and redraws with inputed value
function reset() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
    addNew(ax.value);
}

// Sets what colour is drawn
function changeColour(e) {
    if (setColor === 'random') {
        let r = Math.floor((Math.random() * 255));
        let g = Math.floor((Math.random() * 255));
        let b = Math.floor((Math.random() * 255));
        this.style.background = `rgb(${r},${g},${b})`;
    }else if (setColor === 'choose'){
        this.style.background = `${colorPicker.value}`;
    }else {
        this.style.background = 'black';
    }
    
}


// Event listeners
resetBtn.addEventListener('click', reset);
randColour.addEventListener('click', () => {
    setColor = 'random';
});
black.addEventListener('click', () => {
    setColor = 'black';
});
colorPicker.addEventListener('click', () => {
    setColor = 'choose';
});