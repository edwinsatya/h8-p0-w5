//Logic Challenge - Password Generator

function changeVocals (str) {
    //code di sini
    var split = str.split('');
    for (var i = 0; i < split.length; i++) {
        switch (split[i]) {
            case 'a': split[i] = 'b';
            break;
            case 'i': split[i] = 'j';
            break;
            case 'u': split[i] = 'v';
            break;
            case 'e': split[i] = 'f';
            break;
            case 'o': split[i] = 'p';
            break;
        }
    }
    return split.join('');
  };
  
function reverseWord (str) {
    //code di sini
    var temp = '';
    for (var i = 0; i < str.length; i++) {
        temp = str[i] + temp
    }
    return temp;
};
  
function setLowerUpperCase (str) {
    //code di sini
    var temp = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            temp += str[i].toLowerCase();
        } else {
            temp += str[i].toUpperCase();
        }
    }
    return temp;
};
  
function removeSpaces (str) {
    //code di sini
    var nonSpaces = '';
    var temp = '';
    for (var i = 0; i <= str.length; i++) {
        if (str[i] === ' ' || i === str.length) {
            nonSpaces += temp;
            temp = '';
        } else {
            temp += str[i]
        }
    }
    return nonSpaces;
};
  
function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    var result = removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
    return result;
};

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
