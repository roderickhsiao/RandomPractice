var getFibonacci = (n, arr = []) => {
    if (n <= 2) {
        return 1;
    } else {
        return getFibonacci(n - 1, arr) + getFibonacci(n - 2, arr);
    }
}

export default getFibonacci;
