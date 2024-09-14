const sumAll = function(first, last) {
    let sum = 0;
    
    if(typeof first == "number" && typeof last == "number") {
        if(Number.isInteger(first) == true && Number.isInteger(last) == true) {
            if (first >= 0 && last >= 0) {
                if(first < last) {
                    for(i = first; i <= last; i++) {
                        sum = sum + i;
                    }
                } else {
                    for(i = first; i >= last; i--) {
                        sum = sum + i;
                    }
                }
            } else {
                return 'ERROR';
            }
        } else {
            return 'ERROR';
        }
    } else {
        return 'ERROR';
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
