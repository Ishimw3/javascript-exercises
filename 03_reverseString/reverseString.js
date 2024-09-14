const reverseString = function(text) {
    const toReverse = [];

    for(let i = 0; i <= text.length; i++) {
        toReverse[i] = String(text.charAt(i));
    }

    let reverse = '';

    for(i= 0; i < toReverse.length; i++) {
        reverse = reverse.concat(toReverse[(toReverse.length - 1) - i]);;
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
