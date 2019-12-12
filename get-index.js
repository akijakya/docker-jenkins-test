'use strict';

function getIndex (list, value) {
    let index = [];

    for (let i= 0; i < list.length; i++) {
        if (list[i] == value) {
            index.push(i);
        } 
    }

    if (index[0] === undefined) {
        return -1;
    } else if (index.length === 1) {
        return index[0];
    } else {
        return index;
    }
}

module.exports = getIndex;