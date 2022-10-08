/** Базовая типизация функций **/

function sum(a: number, b: number): number {
    return a + b;
}
const sum2 = (a: number,b: number) => a + b;
const sum3 = function (a: number, b: number): number {
    return a + b;
};
sum(2.3, 8);
sum2(2.3, 8);
sum3(2.3, 8);

function log(name: string, userId?: number): void {
    console.log('Hello ' + name + ' with ID', userId || 'anonymous');
}
log('Roman');
log('Roman', 5);

function crash(): never {
    throw new Error('crash');
}

function average(...nums: number[]) {
    const sum = nums.reduce((current: number, total: number) => current + total,0);
    return sum / nums.length;
}

// Задача переписать функцию, написанную на JS на TS
function slice(str: string, start: number, end?: number): string {
    let newStr:string = '';

    let lastIndex:number;

    if (end) {
        lastIndex = end > str.length ? str.length : end;
    } else {
        lastIndex = str.length;
    }

    for (let i = start; i < lastIndex; i++) {
        newStr += str[i];
    }

    return newStr;
}