/** Оператор ! **/
let word: string | null = null;

const num = 6853;
if(num>10000){
    word = 'abc';
}

//console.log(word.toUpperCase());
console.log(word!.toUpperCase());

function printName(name?:string):void {
    //const fullName: string = name;
    const fullName: string = name!;
}

interface Person {
    name: string,
    age: number,
    sex: 'female' | 'male',
}
function printName2(person?:Person):void {
    //console.log(person.name);
    //console.log(person?.name);
    console.log(person!.name);
}

const people: Person[] = [
    {
        name: 'Gran',
        age: 70,
        sex: 'female'
    },
    {
        name: 'Papa',
        age: 72,
        sex: 'male'
    },
    {
        name: 'Mom',
        age: 35,
        sex: 'female'
    },
    {
        name: 'Dad',
        age: 38,
        sex: 'male'
    }
]

//const femalePeople = people.find(person => person.sex === 'female');
const femalePeople = people.find(person => person.sex === 'female')!;