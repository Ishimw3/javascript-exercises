const repeatString = function(data, times) {
    let test = data;
    if(times < 0) {
        return 'ERROR';
    } else if(times > 0) {
        for(let i = 0; i< times - 1; i++){
            test = test.concat(data);
        }
        return test;
    } else {
        return '';
    }
};

// Do not edit below this line
module.exports = repeatString;
