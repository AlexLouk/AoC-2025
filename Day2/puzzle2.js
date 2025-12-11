const fs = require('fs');

function readAndFormatData(){
    return fs.readFileSync('./input.txt', 'UTF-8')
        .split(',')
        .map(line => {
            const splitStartEnd = line.split('-');
            const start = splitStartEnd[0]
            const end = splitStartEnd[1]
            return { start, end }
        })
}

function findInvalidIDsPart1(){
    const data = readAndFormatData();
}