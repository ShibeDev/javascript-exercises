const repeatString = function(input,repeat) {
    if (repeat < 0) return 'ERROR';
    let output = ''
    for(let i =0; i<repeat; i++)
    {
        output += input;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
