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

document.addEventListener("DOMContentLoaded", function() {
    makeRow();
  });

let dim = parseInt(prompt('Please enter size of grid', '16' ));

if (dim > 100) {
    alert("Number must be less than 100 and greater than 0");
    dim = parseInt(prompt('Please enter size of grid', '16'));
}

else if (dim < 0) {
    alert("Number must be less than 100 and greater than 0");
    dim = parseInt(prompt('Please enter size of grid', '16'));
}

const gridContainer = document.querySelector('.grid-container');
const rowContainer = document.querySelector('.row-container');

// let gridColumn = document.getElementsByClassName('grid-column');
let gridBox = document.getElementsByClassName('grid-box');

function makeRow() {
    for (let i = 0; i < dim; i++) {
        let newBox = document.createElement('div');
        rowContainer.appendChild(newBox).className = "grid-box";
    }
}

function makeGrid() {

}