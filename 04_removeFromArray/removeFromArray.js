const removeFromArray = function() {

    const list = arguments[0];
    let toRemove;

    for(i = 1; i < arguments.length; i++) {
        toRemove = arguments[i];

        list.forEach((element, index) => {
            if(element === toRemove) {
                while(index !== -1){
                    list.splice(index, 1);
                    index = list.indexOf(toRemove);
                }        
            } else {
                return list;
            }
        });
    }

    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
