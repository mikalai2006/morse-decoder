const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let symbols = expr.match(/.{1,10}/g);
    let newar = symbols.map( x => {
        if (x === '**********') return ' '
        let newstr = x.replace(/10/g, '.');
        newstr = newstr.replace(/11/g, '-');
        newstr = newstr.replace(/0/g, '');
        newstr = newstr.split("**********").join(" ")
        return newstr
    });
    let words = newar.map( x => {
        return x === ' ' ? ' ' : MORSE_TABLE[x];
    });
    return words.join('')
}

module.exports = {
    decode
}