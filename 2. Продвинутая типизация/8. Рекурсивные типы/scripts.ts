/** Рекурсивные типы **/
type NestedNumbers = number | NestedNumbers[];
const nums : NestedNumbers = [1, 2, [1, 2, [1, 2,[1, 2]]]];
nums.push(1);
nums.push(1,[1,[24,6,6]]);

// JSON
type JSONPrimitive = string | number | boolean | null;
type JSONObject = {[k:string]:JSONValue};
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {

}

isJSON('1');
isJSON(2);
isJSON([[[['wda']]]]);
isJSON({z: [[[[{d:2}]]]]});