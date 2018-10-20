class Square {
    constructor(x, y, c) {
        this.color = c;
        this.x = x;
        this.y = y;
    }

    render() {
        stroke(0);
        fill(this.color);
        rect(this.x, this.y, squaresize, squaresize);
    }
}
