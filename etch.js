const container = document.querySelector('.container');
//default size of grid
let sidesSize = 16;
//if size of the grid is pushed
const sizeButton = document.getElementById('setSizeButton');
sizeButton.addEventListener('click', test);
const grid = document.querySelector('.grid');
//flow 
createGrid();


//creating grid
function createGrid() {
    
    boxSide = (500 / sidesSize);
    let borderSize = (boxSide / 40.0) * 5.0;
    let insideSize = boxSide / 40.0 * 30.0;
    insideSize = insideSize + "px";
    borderSize = borderSize + "px";
    boxSide = boxSide + "px";


    for (let i = 0; i < sidesSize; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');   
        for (let j = 0; j < sidesSize; j++) {
            let id = "Box:" + i + "&" + j;
            const box = document.createElement('div'); 
            box.setAttribute('class', 'box'); 
            box.setAttribute('id', id);   
            box.addEventListener('mouseover', changeBox);
            box.style.width = insideSize;
            box.style.height = insideSize;
            box.style.borderStyle = "solid";
            box.style.borderWidth = borderSize;
            row.appendChild(box)  
            
        }
        grid.appendChild(row);
    }
    container.appendChild(grid);
}
//changing color of box
function changeBox(e) {
    e.target.style.background = 'white';
}
function resetGrid() {

}
//getting user input
function getUserInput() {
    let num = -1; 
    while (num <= 0 && num > 100) {
        num = prompt("Please a number", "number 1 -100");
    }
    return num;
}
//setting the sidesSize
function setSidesSize (size) {
    sidesSize = size;
}
//test
function test () {
    console.log("Hello");
    sidesSize = prompt("Please a number", "number 1 -100");
    grid.replaceChildren();
    createGrid();
}
