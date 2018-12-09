const fs = require('fs');

const countDiffCharacters = (str1, str2) => { 
    let differentChars = 0;
    for ( var i=0 ; i < str1.length ; i++) {
        if ( str1.charAt(i) !== str2.charAt(i) ) {
            differentChars++;
        }
    }
    return differentChars;
}

const extractCommonChars = (str1, str2) => {
    let a = '';
    for ( var i=0 ; i < str1.length ; i++) {
        if ( str1.charAt(i) === str2.charAt(i) ) {
            a = a + str1.charAt(i);
        }
    }
    return a;   
}

const commonChars = () => {
    fs.readFile('input', (err, data) => {
        arr = data.toString().split('\n');
        var str = '';
        min = countDiffCharacters(arr[0], arr[1]);
        for ( var i=0; i<arr.length; i++) {
            for ( var j=i+1; j < arr.length; j++) {
                const diff = countDiffCharacters(arr[i], arr[j]);
                if ( diff < min ) { 
                    str = extractCommonChars(arr[i], arr[j]); 
                    min = diff;
                }
            }
        }
        console.log("Common chars: " + str);
    });
}

commonChars();
