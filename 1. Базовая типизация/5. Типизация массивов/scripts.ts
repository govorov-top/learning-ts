/** Типизация массивов **/
const strings1:Array<any> = [1,2,3,4, true, 'string'];
const strings2:string[] = [];
const strings3:Array<string> = [];

strings1.push(5);
strings1.push(false);
strings1.push('kek');
strings2.push('str');

interface Car {
    wheels: number,
    brand: string,
    type: string,
}
const cars: Car[] = [];
cars.push({
    wheels: 1,
    brand: 'string',
    type: 'string',
})

const arrOfArr:Array<string>[] = [];
arrOfArr.push(['2']);

function printArr(arr:unknown[]):void {
    arr.forEach((el,index,array) => {
        console.log(el,index);
    });
}
printArr(arrOfArr);