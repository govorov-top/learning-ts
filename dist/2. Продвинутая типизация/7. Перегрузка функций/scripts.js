"use strict";
function add(a, b) {
    return a + b;
}
add(1, 3);
add('1', '3');
function asyncSum(a, b, cb) {
    const result = a + b;
    if (cb) {
        return cb(result);
    }
    return Promise.resolve(result);
}
asyncSum(1, 2);
function head(value) {
    return value[0];
}
const x = head(1);
const x2 = head('st');
console.log(x + x2);
