let regex = /[4-9]|[1-9][0-9]{1,1}$/; //regex limiting range of valid entries of 1 to 99

const gridBtn = document.getElementsByClassName('grid-btn');
const board = document.querySelector('.board');
const rows = document.getElementsByClassName('row');
let userInput = 16;


gridBtn[0].addEventListener('click', () => {
    // const gridBox = document.getElementsByClassName('grid-box');
    // div.style.removeProperty('background-color');
    //gridBox[0].style.backgroundColor = null; //this should work once the default grid function works
    userInput = prompt('Please enter size of grid', '16' );
    userGrid();
});



function userGrid() {
    if (userInput.match(regex) === null) {
        alert("Number must be less than 100 and greater than 3");
    }
    else {
        makeRow(userInput);
        makeColumn(userInput);
    }
};

function makeRow (rowNum){
    for (let i = 0; i < userInput; i++) {
        const newRow = document.createElement('div');
        board.appendChild(newRow).className = "row";
    }
}

function makeColumn (newRow) {
    for (let i = 0; i < userInput; i++) {
        for (let j = 0; j < userInput; j++) {
            const newBox = document.createElement('div');
            rows[j].appendChild(newBox).className = "grid-box";
        }
    }
}


function defaultGrid () {
    makeRow(16);
    makeColumn(16);
}
defaultGrid();

function clearBoard () {
    
}

function colorChange () {
    //call this function to create
}

//next:  add event listener mouseover, add clear function to call on click