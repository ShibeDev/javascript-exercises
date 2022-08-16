const sumAll = function(start,end) {
    if (typeof start != "number" || typeof end != "number" || start < 0 || end < 0 ) return 'ERROR';
    let sum = 0;
    const largeInt = start > end ? start : end;
    const smallInt = start > end ? end : start;
    for(let i = smallInt; i<= largeInt; i++) sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
