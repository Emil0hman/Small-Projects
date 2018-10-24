// Made by Emil Öhman (emilohman.nu)
// Forbidden to publish or use in a comercial use

class Square {
    constructor(x, y, c) {
        this.color = c;
        this.x = x;
        this.y = y;
    }

    render() {
        stroke(0);
        fill(this.color[0], this.color[1], this.color[2]);
        rect(this.x, this.y, squaresize, squaresize);
    }
}
