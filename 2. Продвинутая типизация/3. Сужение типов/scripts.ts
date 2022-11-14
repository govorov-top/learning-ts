/** Сужение типов **/
function f(x:number | string): void {
    if (typeof x === 'string'){
        x.toUpperCase();
    } else {
        x.toFixed()
    }
}

function f2(strings: string | string[] | null): void {
    if (strings && typeof strings === "object"){
        strings.concat([]);
    }else if (typeof strings === "string"){
        strings.toUpperCase();
    }
}

function f3(x: number[] | Date): void {
    if (x instanceof Date){
        x.getDay();
    }else {
        x.concat();
    }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function move(animal: Fish | Bird) : void{
    if ('swim' in animal){
        return animal.swim();
    }
    return animal.fly();
}
export {}