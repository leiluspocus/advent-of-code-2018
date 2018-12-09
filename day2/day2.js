const fs = require('fs');

const checksum = () => {
    fs.readFile('input', (err, data) => {
        arr = data.toString().split('\n'); 
        console.log("RESULT " + arr.length);
        const checksum = new Map();
        checksum.set(2, 0);
        checksum.set(3, 0);
        arr.forEach(element => { 
            const characters = [];
            // Count number of characters
            for (var i=0; i<element.length ; i++) {
                if ( characters[element.charAt(i)] !== undefined) {
                    characters[element.charAt(i)]++;
                }
                else {
                    characters[element.charAt(i)] = 1;
                }
            } 
            if ( Object.values(characters).includes(2) ) {
                checksum.set(2, checksum.get(2)+1);
            }
            if ( Object.values(characters).includes(3) ) {
                checksum.set(3, checksum.get(3)+1);
            }
        });
        const result = checksum.get(2) * checksum.get(3);
        console.log("CHECKSUM " + result);
        return checksum.get(2) * checksum.get(3);
    });
}

checksum();
