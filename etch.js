const container = document.querySelector('.container');


//creating grid
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');   
    for (let j = 0; j < 16; j++) {
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