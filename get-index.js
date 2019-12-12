'use strict';

function getIndex (list, value) {
    let x = [];

    for (let i= 0; i < list.length; i++) {
        if (list[i] == value) {
            x.push(i);
        } 
    }

    if (x[0] === undefined) {
        return -1;
    } else if (x.length === 1) {
        return x[0];
    } else {
        return x;
    }
}

module.exports = getIndex;