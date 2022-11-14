"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
/** Объекты как параметры функции **/
function printPoint(point) {
    console.log(point);
}
const obj1 = { x: 1, y: 2 };
printPoint(obj1);
// Свойства объекта (z:3,coords: false) тоже попадают в тело функции printPoint
const obj2 = { x: 1, y: 2, z: 3, coords: false };
printPoint(obj2);
function printName(user) {
    console.log(user.firstName);
    if (user.lastName) {
        user.lastName.toUpperCase();
        console.log(user.lastName);
    }
}
printName({
    firstName: 'Roman'
});
printName({
    firstName: 'Roman',
    lastName: 'Govorov'
});
const user1 = {
    login: 'login',
    email: 'email',
    password: 'password',
    isOnline: true,
    lastVisited: new Date(2022, 6, 2)
};
const admin = {
    login: 'login',
    email: 'email',
    password: 'password',
    isOnline: true,
    lastVisited: new Date(2022, 6, 2),
    role: 'role',
};
// Create a function login with param user (with keys login and password)
// Check if login and password are not empty and then greet user
function login(user) {
    if (user.login && user.login.length > 0) {
        console.log(user.login);
    }
    if (user.password && user.password.length > 0) {
        console.log(user.password);
    }
}
exports.login = login;
login(user1);
login(admin);
