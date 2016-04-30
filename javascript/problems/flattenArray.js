var flatten = (arr, init = []) => {
    for (var i = 0, j = arr.length; i < j; i++) {
        var val = arr[i];
        if (Array.isArray(val)) {
            flatten(val, init);
        } else {
            init.push(val);
        }
    }
    return init;
};

export default flatten;
