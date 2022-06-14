// const grid = document.querySelector('.grid-container');
// const gridDiv = document.createElement('div');
// const clone = gridDiv.cloneNode(true);

// gridDiv.classList.add('gridDiv')
// clone.classList.add('gridDiv');
// grid.appendChild(gridDiv);
// grid.appendChild(clone)
// grid.appendChild(clone)

// for (let i = 0; i < 16; i++) {

// const newgridDiv = document.createElement('div');

// }



const gridContainer = document.querySelector('.grid-container');
let gridColumn = document.getElementsByClassName('grid-column');
let gridBox = document.getElementsByClassName('grid-box');


for (let i = 0; i<16; i++) {
    let newBox = document.createElement('div');
    gridContainer.appendChild(newBox).className = "grid-box";
}
