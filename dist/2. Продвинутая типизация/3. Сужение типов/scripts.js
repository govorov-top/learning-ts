"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Сужение типов **/
function f(x) {
    if (typeof x === 'string') {
        x.toUpperCase();
    }
    else {
        x.toFixed();
    }
}
function f2(strings) {
    if (strings && typeof strings === "object") {
        strings.concat([]);
    }
    else if (typeof strings === "string") {
        strings.toUpperCase();
    }
}
function f3(x) {
    if (x instanceof Date) {
        x.getDay();
    }
    else {
        x.concat();
    }
}
function move(animal) {
    if ('swim' in animal) {
        return animal.swim();
    }
    return animal.fly();
}
