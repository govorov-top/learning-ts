"use strict";
/** Примитивные типы **/
// Numbers
let num = 10;
let num1 = NaN;
// String
let string = 'String';
// Or
let string2;
string2 = 'String';
// Symbol
let symbol = Symbol('as');
// Boolean
let boolean = true;
boolean = false;
// Nothing
let nothing = undefined;
let nothing2 = null;
// Literal
const literal = 108;
const literal2 = 'String';
const literal3 = { a: 2, b: 3 };
// Universal - any
let any;
any = 1;
any = 'string';
any = {};
any = [];
any = true;
// Universal - unknown
let unknown = 2;
if (typeof unknown === "string")
    unknown.toUpperCase();
