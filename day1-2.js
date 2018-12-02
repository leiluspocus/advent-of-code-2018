const fs = require('fs');

const fetchFirstFrequency = () => {
    fs.readFile('input', (err, data) => {
        arr = data.toString().split('\n');
        const frequencies = new Map();
        let result = 0;
        let firstFrequency = 0;
        let firstFrequencyFound = false;
        while ( !firstFrequencyFound ) {
             arr.forEach((val) => { 
                result += parseInt(val);
                if ( frequencies.has(result) ) {
                    const res = parseInt(frequencies.get(result)) + 1;
                    frequencies.set(result, res);
                    if ( res === 2 && !firstFrequencyFound) {
                        console.log("FIRST FREQUENCY > " + result );
                        firstFrequency = result; 
                        firstFrequencyFound = true;
                    }
                }
                else {
                    frequencies.set(result, 1);
                }
            });   
        }
        console.log("NB VAL " + frequencies.size);
    });
}

fetchFirstFrequency();
