let regex = /^([4-9]|[1-9][0-9])$/; //regex limiting range of valid entries of 4 to 99

const gridBtn = document.getElementsByClassName('grid-btn');
const board = document.querySelector('.board');
const rows = document.getElementsByClassName('row');
let userInput = 16;
makeGrid();

gridBtn[0].addEventListener('click', () => {
    userInput = prompt('Please enter size of grid (number must be between 4 and 99)', '16' );
    userGrid();
});

gridBtn[1].addEventListener('click', () => {
    erase();
});

gridBtn[2].addEventListener('click', () => {
    draw();
});

gridBtn[3].addEventListener('click', () => {
    randomColor();
});

gridBtn[4].addEventListener('click', () => {
    board.replaceChildren();
    makeGrid();
});

window.addEventListener("load", colorPicker());

function userGrid() {
    if (userInput.match(regex) === null) {
        alert("Number must be between 4 and 99");
        userInput = 16;
    }
    else {
        board.replaceChildren();
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


function erase () {
    const newStyle = document.querySelectorAll('.grid-box')

    newStyle.forEach(gridBox => {
        gridBox.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'black';
        });
    });
}

function draw () {
    const newStyle = document.querySelectorAll('.grid-box')

    newStyle.forEach(gridBox => {
        gridBox.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'white';
        });
    });
}

function randomColor () {
    const newStyle = document.querySelectorAll('.grid-box')
    const randomColorSelect = Math.floor(Math.random()*16777215).toString(16);
    
    newStyle.forEach (gridBox => {
        gridBox.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = `#${randomColorSelect}`;
        });
    });
}

function colorPicker () {
   

    const defaultColor = "#77B5C5";
    startup();

    function startup() {
        colors = document.querySelector("#colors");
        colors.value = defaultColor;
        colors.addEventListener("input", updateFirst());
        colors.addEventListener("change", () => updateAll());
        colors.select();
        
    }

    function updateFirst(event) {

        const newStyle = document.querySelectorAll('.grid-box')

        newStyle.forEach(gridBox => {
            gridBox.addEventListener('mouseover', function(e) {
                e.target.style.backgroundColor = colors.value;
            });
        });
    }

    function updateAll(event) {

        const newStyle = document.querySelectorAll('.grid-box')

        newStyle.forEach(gridBox => {
            gridBox.addEventListener('mouseover', function(e) {
                e.target.style.backgroundColor = colors.value;
            });
        });
        
    }
}