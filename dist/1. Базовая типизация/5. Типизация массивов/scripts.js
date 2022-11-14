"use strict";
/** Типизация массивов **/
const strings1 = [1, 2, 3, 4, true, 'string'];
const strings2 = [];
const strings3 = [];
strings1.push(5);
strings1.push(false);
strings1.push('kek');
strings2.push('str');
const cars = [];
cars.push({
    wheels: 1,
    brand: 'string',
    type: 'string',
});
const arrOfArr = [];
arrOfArr.push(['2']);
function printArr(arr) {
    arr.forEach((el, index, array) => {
        console.log(el, index);
    });
}
printArr(arrOfArr);
