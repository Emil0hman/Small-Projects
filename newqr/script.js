let squares = [];
let text = "";
let output = "";
let squareNum = 0;

function preload() {
    binary = loadJSON(
        "https://raw.githubusercontent.com/Emil0hman/Small-Projects/master/newqr/binary.json",
    );
}

function setup() {
    // Inputbox
    inp = createInput("Text");
    btnCreate = createButton("Generate");
    btnCreate.mousePressed(generate);
    // Button 'Save Code'
    btnSave = createButton("Save B-QR Code");
    btnSave.mousePressed(saveTest);
    // Load
    createCanvas(500, 500);
    background(255);
}

function saveTest() {
    let newText = "";
    if (text.length < 10) {
        newText = text;
    } else {
        for (let i = 0; i < 10; i++) {
            newText += text[i];
        }
        newText += "...";
    }
    saveCanvas(`${newText} (B-QR)`, "png");
}

function generate() {
    output = "";
    squareNum = 0;
    clear();
    text = inp.value();

    // Load Binary
    for (i = 0; i < text.length; i++) {
        output += binary[text[i]];
    }
    squaresize = floor(401 / Math.sqrt(output.length));
    console.log(squaresize);
    console.log(output);

    // Draw the squares
    for (let i = 0; i < 400 / squaresize; i++) {
        for (let j = 0; j < 400 / squaresize; j++) {
            if (output[squareNum] == 0) {
                s = new Square(j * squaresize, i * squaresize, [0, 0, 0]);
            } else if (output[squareNum] == 1) {
                s = new Square(j * squaresize, i * squaresize, [255, 255, 255]);
            } else {
                s = new Square(j * squaresize, i * squaresize, [255, 175, 175]);
            }
            squares.push(s);
            s.render();
            squareNum += 1;
        }
    }
}

function draw() {}
