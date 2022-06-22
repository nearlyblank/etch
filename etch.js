let regex = /[4-9]|[1-9][0-9]{1,1}$/; //regex limiting range of valid entries of 4 to 99

const gridBtn = document.getElementsByClassName('grid-btn');
const board = document.querySelector('.board');
const rows = document.getElementsByClassName('row');
let userInput = 16;
makeGrid();

gridBtn[0].addEventListener('click', () => {
    userInput = prompt('Please enter size of grid', '16' );
    userGrid();
});

function userGrid() {
    if (userInput.match(regex) === null) {
        alert("Number must be less than 100 and greater than 3");
    }
    else {
        clearBoard();
        makeGrid();
    }
}

function makeRow (){
    for (let i = 0; i < userInput; i++) {
        const newRow = document.createElement('div');
        board.appendChild(newRow).className = "row";
    }
}

function makeColumn () {
    for (let i = 0; i < userInput; i++) {
        for (let j = 0; j < userInput; j++) {
            const newBox = document.createElement('div');
            rows[j].appendChild(newBox).className = "grid-box";
            newBox.addEventListener('mouseover', function(e) {
                e.target.style.backgroundColor = 'white';
            });
        }
    }
}

function makeGrid () {
    makeRow();
    makeColumn();
}

function clearBoard () {
    board.replaceChildren();
}

function colorChange () {

}

function erase () {

}

//next:  add erase button, color change button