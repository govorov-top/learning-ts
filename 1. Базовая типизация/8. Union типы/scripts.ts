/** Union типы **/
type Status = 'ok' | 'loading' | 'error';
const newStatus: Status = 'loading';
const newStatusArr: Status[] = ['loading'];

function printID(id: number | string): void {
    // Это не будет работать без условия:
    // console.log(id.toUpperCase());
    if(typeof id === 'string'){
        console.log(id.toUpperCase());
    }else {
        console.log(id);
    }
}
printID('мой id 5');
printID(5);

function welcome(person: [string, string] | string): void{
    if (Array.isArray(person)){
        console.log('Hello', person.join(' '))
    }else {
        console.log('Hello', person);
    }
}
welcome(['Roman', 'Govorov']);
welcome('Roman Govorov');

type Level = 'junior' | 'middle' | 'senior';

export interface Developer {
    login: string,
    skills: string[],
    level: Level,
}
const dev:Developer = {
    login: 'login',
    skills: ['1','2'],
    level: 'junior',
}
// create a function that change level of incoming developer
function gradeDeveloper(developer: {level:Level},newLevel:Level):string {
    return developer.level = newLevel;
}
gradeDeveloper(dev, 'senior');