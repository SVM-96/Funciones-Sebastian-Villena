const blue = document.getElementById("a")
const red = document.getElementById("b")
const green = document.getElementById("c")
const yellow = document.getElementById("d")

const changeColor = (e) => {
    e.target.style.backgroundColor = 'black'
};

blue.addEventListener('click', changeColor);
red.addEventListener('click', changeColor);
green.addEventListener('click', changeColor);
yellow.addEventListener('click', changeColor);


const key = document.getElementById("key");

document.addEventListener('keydown', function (e) {
    if (e.key === 'a') {
        key.style.backgroundColor = 'pink';
    } else if (e.key === 's') {
        key.style.backgroundColor = 'orange';
    }
    else if (e.key === 'd') {
        key.style.backgroundColor = 'skyblue';
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'q') {
        newDiv()
        newElement.style.backgroundColor = "purple";
    } else if (e.key === 'w') {
        newDiv()
        newElement.style.backgroundColor = "grey";
    }
    else if (e.key === 'e') {
        newDiv()
        newElement.style.backgroundColor = "brown";
    }
});

function newDiv() {
    container = document.getElementById("container");
    newElement = document.createElement("div");
    newElement.style.width = "200px";
    newElement.style.height = "200px";
    newElement.style.margin = "10px auto";
    newElement.style.border = "1px solid black";
    container.appendChild(newElement);
}


