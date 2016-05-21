// check if a word is a Palindrome

var isPalindrome = (str) => {
    var str = str.replace(/ /g, '').toLowerCase();
    if (!str) {
        return false;
    }
    var palidromeString = str.split('').reverse().join('');
    return str === palidromeString;
}

export default isPalindrome;
