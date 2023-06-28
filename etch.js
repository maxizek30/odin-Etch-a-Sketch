//elements
const container = document.querySelector('.container');
const sizeButton = document.getElementById('setSizeButton');
let sidesSize = 16;
sizeButton.addEventListener('click', test);



//creating grid

for (let i = 0; i < sidesSize; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');   
    for (let j = 0; j < sidesSize; j++) {
        let id = "Box:" + i + "&" + j;
        const box = document.createElement('div'); 
        box.setAttribute('class', 'box'); 
        box.setAttribute('id', id);   
        row.appendChild(box)  
        box.addEventListener('mouseover', changeBox);
    }
    container.appendChild(row);
}
//changing color of box
function changeBox(e) {
    e.target.style.background = 'white';
}
function getUserInput() {
    let num = -1; 
    while (num <= 0 && num > 100) {
        num = prompt("Please a number", "number 1 -100");
    }
    return num;

}
function setSidesSize (size) {
    sidesSize = size;
}
function test () {
    console.log("Hello");
    let sidesSize  = prompt("Please a number", "number 1 -100");
}