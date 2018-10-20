let squares = [];
let squaresize = 25;
let text = "cyclopentanoperhydrophenanthrene";
let output = "";
let squareNum = 0;


function preload() {
    binary = loadJSON('binary.json', 'json')
}

function setup() {
    createCanvas(401, 401);
    background(51);
    for (i = 0; i < text.length; i++) {
        output += binary[text[i]];
        console.log(output);
    }
    for (let i = 0; i < 400 / squaresize; i++) {
        for (let j = 0; j < 400 / squaresize; j++) {
            if (output[squareNum] == 0) {
                s = new Square(j * squaresize, i * squaresize, 0);
            } else {
                s = new Square(j * squaresize, i * squaresize, 255);
            }
            squares.push(s);
            s.render();
            console.log(squareNum);
            squareNum += 1;
        }
    }
}

function draw() {}
