/** Примитивные типы **/

// Numbers
let num: number = 10;
let num1: number = NaN;

// String
let string: string = 'String';
// Or
let string2: string;
string2 = 'String';

// Symbol
let symbol: symbol = Symbol('as');

// Boolean
let boolean: boolean = true;
boolean = false;

// Nothing
let nothing: undefined = undefined;
let nothing2: null = null;

// Literal
const literal = 108;
const literal2 = 'String';
const literal3 = {a:2,b:3};

// Universal - any
let any: any;
any = 1;
any = 'string';
any = {};
any = [];
any = true;

// Universal - unknown
let unknown: unknown = 2;
if (typeof unknown === "string") unknown.toUpperCase();