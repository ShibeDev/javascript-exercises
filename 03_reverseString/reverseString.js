const reverseString = function(input) {
    if (typeof input !== 'string') return 'ERROR'; 
    let output = '';
    let i = input.length;
    while(i>0){
        output += input[i-1];
        i--;
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
