const fs = require('node:fs');

function readAndFormatData() {
    return fs.readFileSync('./input.txt', 'utf-8')
        .trim()
        .split('\n')
        .map(line => {
            const direction = line[0];
            const steps = parseInt(line.slice(1));
            return { direction, steps };
        })
}

function calcPasswordPart1(){
    const data = readAndFormatData();
    let startingPoint = 50;
    let zeroes = 0;

    data.forEach(line => {
        if (line.direction === "L") {
            startingPoint -= line.steps;
        } else {
            startingPoint += line.steps;
        }

        startingPoint = ((startingPoint % 100) + 100) % 100;

        if(startingPoint === 0)
            zeroes++;
    })

    return zeroes;
}

function calcPasswordPart2() {
  const data = readAndFormatData();
  let pos = 50;
  let zeroes = 0;

  data.forEach(line => {
    const dir = line.direction;
    const steps = line.steps;

    for (let i = 0; i < steps; i++) {
      if (dir === "L") {
        pos = (pos - 1 + 100) % 100;
      } else {
        pos = (pos + 1) % 100;
      }

      if (pos === 0) {
        zeroes++;
      }
    }
  });

  return zeroes;
}


let pw1 = calcPasswordPart1();
let pw2 = calcPasswordPart2();

console.log(`The first password is: ${pw1}.`)
console.log(`The second password is:${pw2}.`)