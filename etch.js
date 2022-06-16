let regex = /^[1-9][0-9]{0,1}$/; //regex limiting range of valid entries of 1 to 99

// document.addEventListener("DOMContentLoaded", function() {
//     makeRow();
//   });
const dimBtn = document.getElementsByClassName('dim-btn');


dimBtn[0].addEventListener('click', () => {
    //gridBox[0].style.backgroundColor = null; //this should work once the default grid function works
    dim = prompt('Please enter size of grid', '16' );
    userGrid(dim);
});

function userGrid(dim) {
    if (dim.match(regex) == null) {
        alert("Number must be less than 100 and greater than 0");
        dim = prompt('Please enter size of grid', '16');
        makeRow(dim);
    }
    else if (dim.match(regex)!= null) {
    makeRow(dim);
    }
};



const gridContainer = document.querySelector('.grid-container');
const rowContainer = document.querySelector('.row-container');

// let gridColumn = document.getElementsByClassName('grid-column');




function makeRow(num) {
    for (let i = 0; i < num; i++) {
        let newBox = document.createElement('div');
        rowContainer.appendChild(newBox).className = "grid-box";
        newBox.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'white';
        });
    }
}

function reset (gridBox) {
    gridBox = document.getElementsByClassName('grid-box');
    gridBox[0].style.removeProperty('background-color');
}
function makeGrid(num) {
    makeRow(num*num)
}

//next: figure out reset function > run reset at beginning of click event, create default grid function that loads at beginning (makeRow(16))
