const readline = require('readline');

class Input {
    constructor() {
        this.n = process.argv[2];
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    askForN(callback) {
        if (this.n != undefined && this.checkN(this.n)) {
            this.rl.close();
            return callback(this.n);
        }

        this.rl.question('Enter N(size): ', (userInput) => {
            this.n = userInput;
            if (this.checkN(this.n)) {
                this.rl.close();
                return callback(this.n);
            }
            this.askForN(callback);
        });
    }

    checkN(size) {
        if (!isNaN(size)) {
            if ( (size % 2 == 1) && size > 2 && size < 10000) {
                return true;
            }
            console.log('N must be odd and between 2 and 10000!');
            this.n = undefined;
            return false;
        }
        console.log('N must be number and between 2 and 10000!');
        this.n = undefined;
        return false;
    }
}

module.exports = Input;
