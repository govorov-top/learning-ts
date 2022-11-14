"use strict";
const nums = [1, 2, [1, 2, [1, 2, [1, 2]]]];
nums.push(1);
nums.push(1, [1, [24, 6, 6]]);
function isJSON(arg) {
}
isJSON('1');
isJSON(2);
isJSON([[[['wda']]]]);
isJSON({ z: [[[[{ d: 2 }]]]] });
