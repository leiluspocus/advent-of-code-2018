const fs = require('fs');

const getResult = () => {
    fs.readFile('input', (err, data) => {
        arr = data.toString().split('\n');
        let result = 0;
        arr.forEach((val) => { 
            result += parseInt(val);
        });
        console.log("RESULT " + result);
    });
}

getResult();
