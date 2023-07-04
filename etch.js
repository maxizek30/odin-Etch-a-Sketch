const etchasketch = document.querySelector('.etchasketch');
//default size of grid
let sidesSize = 16;
const grid = document.querySelector('.grid');
//if reset button is pushed 
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    grid.replaceChildren();
    createGrid();
});
//slider functionality
const slider = document.getElementById("myRange");
slider.oninput = function() {
    sidesSize = this.value;
    grid.replaceChildren();
    createGrid();
}
const sliderText = document.querySelector('.sizeLabel');





//flow 
createGrid();

//creating grid
function createGrid() {
    sliderText.innerHTML = sidesSize + " x " + sidesSize;
    boxSide = (500 / sidesSize);
    //let borderSize = (boxSide / 40.0) * 5.0;
    //let insideSize = boxSide / 40.0 * 30.0;
    //insideSize = insideSize + "px";
    ////borderSize = borderSize + "px";
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
            box.style.width = boxSide;
            box.style.height = boxSide;
            //box.style.borderStyle = "solid";
            //box.style.borderWidth = borderSize;
            row.appendChild(box)  
            
        }
        grid.appendChild(row);
    }
    
}
//changing color of box
function changeBox(e) {
    e.target.style.background = '#424647';
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
//resetting the size
function setSidesSize () {
    let num = -1; 
    while (num <= 0 || num > 100) {
        num = prompt("Please enter the amount of squares per row(1-100)");
    }
    sidesSize = num;
    grid.replaceChildren();
    createGrid();
}
