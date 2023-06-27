const container = document.querySelector('.container');

//creating grid
for (let i = 0; i < 4; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');   
    for (let i = 0; i < 4; i++) {
        const box = document.createElement('div'); 
        box.setAttribute('class', 'box');  
        row.appendChild(box)  
    }

    
    
    container.appendChild(row);
}