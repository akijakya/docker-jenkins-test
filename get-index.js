'use strict';

function getIndex (list, value) {
    let y = [];

    for (let i= 0; i < list.length; i++) {
        if (list[i] == value) {
            y.push(i);
        } 
    }

    if (y[0] === undefined) {
        return -1;
    } else if (y.length === 1) {
        return y[0];
    } else {
        return y;
    }
}

module.exports = getIndex;