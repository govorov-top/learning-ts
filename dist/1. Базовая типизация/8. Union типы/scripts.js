"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newStatus = 'loading';
const newStatusArr = ['loading'];
function printID(id) {
    // Это не будет работать без условия:
    // console.log(id.toUpperCase());
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printID('мой id 5');
printID(5);
function welcome(person) {
    if (Array.isArray(person)) {
        console.log('Hello', person.join(' '));
    }
    else {
        console.log('Hello', person);
    }
}
welcome(['Roman', 'Govorov']);
welcome('Roman Govorov');
const dev = {
    login: 'login',
    skills: ['1', '2'],
    level: 'junior',
};
// create a function that change level of incoming developer
function gradeDeveloper(developer, newLevel) {
    return developer.level = newLevel;
}
gradeDeveloper(dev, 'senior');
