const canvas = document.getElementById('canvas');

function addNew(size) {
    
    for (let i = 0; i < size; i++) {
        const newRow = document.createElement('row');
        newRow.style.width = "500px";
        canvas.appendChild(newRow).className = "row";
        for (let x = 0; x < size; x++) {
            const newDiv = document.createElement('div');
            newDiv.style.width = `${500/size}px`
            newRow.appendChild(newDiv).className = "grid";
        }
    }


}

