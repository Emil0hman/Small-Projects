let squares = [];
let text = "";
let output = "";
let squareNum = 0;

function preload() {
    binary = loadJSON(
        "https://raw.githubusercontent.com/Emil0hman/Small-Projects/master/B-QR/binary.json",
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

    for (i in text) {
        output.push()
    }

    squaresize = floor(400 / Math.sqrt(output.length));
    console.log(squaresize);
    console.log(output);
    console.log(text);

    // Draw the squares
    for (let i = 0; i < 400 / squaresize; i++) {
        s = new Square(j * squaresize, i * squaresize, [0, 0, 0]);
        squares.push(s);
        s.render();
        squareNum += 1;
    }
}

function draw() {}
