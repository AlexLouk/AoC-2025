const fs = require('node:fs');

function readAndFormatData() {
    return fs.readFileSync('./input.txt', 'utf-8')
        .trim()
        .split('\r\n')
        .map(line => {
            const direction = line[0];
            const steps = parseInt(line.slice(1));
            return { direction, steps };
        })
}

function puzzle1() {
    const data = readAndFormatData();
    let startingPoint = 50;
    let zeroes = 0;

    data.forEach(line => {
        let oldPos = startingPoint;
        zeroes += Math.floor(Math.abs(line.steps) / 100);

        if (line.direction === "L") {
            startingPoint -= line.steps;
            if (oldPos >= 0 && startingPoint < 0){
                zeroes++;
            }
        } else {
            startingPoint += line.steps;
            if (oldPos <= 99 && startingPoint > 99){
                zeroes++;
            }
        }

        startingPoint = ((startingPoint % 100) + 100) % 100;
    })

    console.log(`The amount of Zeroes hit is: ${zeroes}`);
}

puzzle1();
