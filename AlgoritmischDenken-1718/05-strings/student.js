// Schrijf hier je oplossingen voor de codeervragen
function repeat(str, n) {
    if (n === 0) {
        return "";
    }
    let strUit = str;
    for (let i = 1; i < n; i++) {
        strUit = strUit + str;
    }
    return strUit;
}

function formatTime(h, m, s) {
    return h + ":" + m + ":" + s;
}

function quotrest(a, b) {
    let rest = a % b;
    let resultaat = (a - rest) / b;

    return a + " = " + resultaat + " * " + b + " + " + rest;
}

function countWords(str) {
    if (str.length === 0) {
        return 0;
    }
    return str.split(' ').length;
}

function parseDate(str) {
    const parts = str.split('/');
    let result = [];
    for (let i = 0; i != parts.length; ++i) {
        result.push(parseFloat(parts[i]));
    }
    return result;
}

function evaluate(str) {
    let result = 0;
    const terms = str.split('+');
    for (let i = 0; i != terms.length; ++i) {
        const factors = terms[i].split('*');
        let r = 1;
        for (let j = 0; j != factors.length; ++j) {
            r *= parseFloat(factors[j]);
        }
        result += r;
    }
    return result;
}

function isLowerCaseLetter(c) {
    const min = "a".charCodeAt(0);
    const max = "z".charCodeAt(0);
    const charCode = c.charCodeAt(0);
    return min <= charCode && charCode <= max;
}

function isUpperCaseLetter(c) {
    const min = "A".charCodeAt(0);
    const max = "Z".charCodeAt(0);
    const charCode = c.charCodeAt(0);
    return min <= charCode && charCode <= max;
}

function isLetter(c) {
    const min = "A".charCodeAt(0);
    const max = "z".charCodeAt(0);
    const charCode = c.charCodeAt(0);
    return min <= charCode && charCode <= max;
}

function isDigit(x) {
    const min = "0".charCodeAt(0);
    const max = "9".charCodeAt(0);
    const charcode = x.charCodeAt(0);
    return min <= charcode && charcode <= max;
}

function isValidPassword(password) {
    if (password.length < 8) {
        return false;
    }

    let upperLetter, lowerLetter, Digit = false;

    for (let i = 0; i < password.length; i++) {
        let letter = password.substr(i, 1);
        upperLetter = upperLetter || isUpperCaseLetter(letter);
        lowerLetter = lowerLetter || isLowerCaseLetter(letter);
        Digit = Digit || isDigit(letter);
    }
    return Digit && upperLetter && lowerLetter;
}
function fromHex(str){
    let uitvoer = "";
    let test;
    for (let i = 0; i < str.length; i++){
        let letter = str.substr(i,1);
        if (isDigit(letter)){
            test = toBinary(letter);
            if (test.length === 0){
                uitvoer += "0000";
            }
            if(test.length === 1){
                uitvoer += "000" + test;
            }else if(test.length === 2){
                uitvoer += "00" + test;
            }else if(test.length === 3){
                uitvoer += "0" + test;
            }else{uitvoer += test;}
        }
        else{
            test = toBinary(inverseAlphabet(letter)+10);
            if(test.length === 1){
                uitvoer += "000" + test;
            }else if(test.length === 2){
                uitvoer += "00" + test;
            }else if(test.length === 3){
                uitvoer += "0" + test;
            }else{uitvoer += test;}
        }
    }
    uitvoer = fromBinary(uitvoer);
    return uitvoer;
}
function alphabet(n) {
    return String.fromCharCode(n + "A".charCodeAt(0));
}
function alphabetLowerCase(n){
    return String.fromCharCode(n + "a".charCodeAt(0));
}

function inverseAlphabet(c){
    const charCode = c.charCodeAt(0);
    const charCode_A = "A".charCodeAt(0);
    const charCode_Z = "Z".charCodeAt(0);
    const charCode_a = "a".charCodeAt(0);
    if (charCode_A <= charCode && charCode <= charCode_Z)
    {
        return charCode - charCode_A;
    }
    else
    {
        return charCode - charCode_a;
    }
}

function caesar(str, n){
    let charcodeLetter, uitvoer = "";
    
    for (let i = 0; i < str.length; i++){
        let letter = str.substr(i,1);
        charcodeLetter = inverseAlphabet(letter);
        charcodeLetter += n;
        charcodeLetter = charcodeLetter % 26;
        uitvoer += alphabetLowerCase(charcodeLetter);
    }
    return uitvoer;
}
function isBinary(x){
    if(x<0){
        return "invalid";
    }
    do{
    let rest = x%10;
    if(rest >1){
        return false;
    }
    x = Math.floor(x / 10);
    }while(x>1);
    return true;
}
function fromBinary(str){
    if(isBinary(str) === false || str<0){
        return "invalid";
    }  
    
    let totaal = 0;
    let teller = 1;
    
    do{
        let rest = str%10;
        
        totaal += teller * rest;
            
        teller = teller *2;
        str = Math.floor(str / 10);
    }while(str>=1);
    
    return totaal;
}
function toBinary(n)
{
    if (n === 0)
    {
        return '0';
    }
    else
    {
        let result = "";
        while (n > 0)
        {
            if (n % 2 === 0)
            {
                result = "0" + result;
                n /= 2;
            }
            else
            {
                result = "1" + result;
                n = (n - 1) / 2;
            }
        }
        return result;
    }
}
