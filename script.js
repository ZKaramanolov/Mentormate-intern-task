const Letter = require('./packages/Letter');

const Input = require('./packages/Input');

const emptySpaceSymbol = '-';

const letterSymbol = '*';

let input = new Input();

const drawLetter = input.askForN((n) => {
    let l = new Letter(n, letterSymbol, emptySpaceSymbol);
    l.draw();
});
