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

let regex = /^[1-9][0-9]{0,1}$/;

document.addEventListener("DOMContentLoaded", function() {
    makeRow();
  });

let dim = prompt('Please enter size of grid', '16' );

if (dim.match(regex) == null) {
    alert("Number must be less than 100 and greater than 0");
    dim = prompt('Please enter size of grid', '16');
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