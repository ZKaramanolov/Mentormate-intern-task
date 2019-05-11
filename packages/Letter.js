class Letter {

    constructor(n, letterSymbol, emptySpaceSymbol) {
        this.n = n;
        this.letterSymbol = letterSymbol;
        this.emptySpaceSymbol =  emptySpaceSymbol;
    }

    draw() {
        let size = Number(this.n);
        for (let i = 0; i < size - size / 2; i++) {
            console.log(
                this.emptySpaceSymbol.repeat(size - i) +
                this.letterSymbol.repeat(size + i * 2) +
                this.emptySpaceSymbol.repeat(size - i * 2) +
                this.letterSymbol.repeat(size + i * 2) +
                this.emptySpaceSymbol.repeat(size * 2 - i * 2) +
                this.letterSymbol.repeat(size + i * 2) +
                this.emptySpaceSymbol.repeat(size - i * 2) +
                this.letterSymbol.repeat(size + i * 2) +
                this.emptySpaceSymbol.repeat(size - i)
            );
        }

        for (let i = 0; i < size - size / 2; i++) {
            console.log(
                this.emptySpaceSymbol.repeat(size / 2 - i) +
                this.letterSymbol.repeat(size) +
                this.emptySpaceSymbol.repeat(i * 2 + 1) +
                this.letterSymbol.repeat(size * 2 - 1 - i * 2) +
                this.emptySpaceSymbol.repeat(i * 2 + 1) +
                this.letterSymbol.repeat(size) +
                this.emptySpaceSymbol.repeat(size / 2 - i) +

                this.emptySpaceSymbol.repeat(size / 2 - i) +
                this.letterSymbol.repeat(size) +
                this.emptySpaceSymbol.repeat(i * 2 + 1) +
                this.letterSymbol.repeat(size * 2 - 1 - i * 2) +
                this.emptySpaceSymbol.repeat(i * 2 + 1) +
                this.letterSymbol.repeat(size) +
                this.emptySpaceSymbol.repeat(size / 2 - i)
            );
        }
    }
}

module.exports = Letter;
