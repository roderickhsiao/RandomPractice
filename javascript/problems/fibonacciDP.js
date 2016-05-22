var getFibonacci = (n, hash = {}) => {
    if (n <= 2) {
        return 1;
    }
    if (!hash[n]) {
        hash[n] = getFibonacci(n - 1, hash) + getFibonacci(n - 2, hash);
    } else {
        return hash[n];
    }

    return hash[n];
}

export default getFibonacci;
