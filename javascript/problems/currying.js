// Write a sum method which will work properly when invoked using either syntax below.
//
// console.log(sum(2, 3));  // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

var sum = (...args) => {
    var sumOfNumbers = 0;
    if (args.length > 1) {
        args.forEach((arg) => {
            sumOfNumbers += arg;
        });
    } else {
        if (!args) {
            return sumOfNumbers;
        }
        sumOfNumbers += args[0];
        return (value) => {
            return sum(sumOfNumbers, value);
        }
    }
    return sumOfNumbers;
}

export default sum;
