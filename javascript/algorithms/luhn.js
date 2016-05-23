// Luhn algorithm
// https://en.wikipedia.org/wiki/Luhn_algorithm

var isValid = (num) => {
    var numArray = ('' + num).split('');
    // don't count last digit
    var sum = 0;
    for (var i = 0, j = numArray.length - 1; i < j; i++) {
        var item = +numArray[i];
        if (i % 2 === 1) {
            var temItem = item * 2;
            sum += (temItem > 10 ? temItem - 9 : temItem);
        } else {
            sum += item;
        }
    }
    return ((sum * 9) % 10) === +numArray[numArray.length - 1];
}

export default isValid;
