// What is a potential pitfall with using typeof bar === "object"
// to determine if bar is an object? How can this pitfall be avoided?

var isObject = (spec) => {
    return (
        // check if null
        (spec !== null) &&
        ((typeof spec === 'object') || (typeof spec === 'function')) &&
        // not an array
        (!Array.isArray(spec))
    );
}

export default isObject;
