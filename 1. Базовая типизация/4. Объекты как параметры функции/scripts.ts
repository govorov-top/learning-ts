/** Объекты как параметры функции **/
function printPoint(point: {x:number,y:number}):void {
    console.log(point);
}

const obj1 = {x:1,y:2}
printPoint(obj1);

// Свойства объекта (z:3,coords: false) тоже попадают в тело функции printPoint
const obj2 = {x:1,y:2,z:3,coords: false}
printPoint(obj2);

function printName(user: {firstName:string,lastName?:string}):void {
    console.log(user.firstName);
    if (user.lastName){
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


// Create interfaces User and Admin
// Keys for User: login, email, password, isOnline, lastVisited
// Keys for Admin: login, email, password, isOnline, lastVisited, role
interface User{
    login:string,
    email:string,
    password:string,
    isOnline:boolean,
    lastVisited: Date
}
interface Admin{
    login:string,
    email:string,
    password:string,
    isOnline:boolean,
    lastVisited: Date,
    role:string
}

const user1:User = {
    login: 'login',
    email:'email',
    password:'password',
    isOnline: true,
    lastVisited: new Date(2022,6,2)
}

const admin:Admin = {
    login: 'login',
    email:'email',
    password:'password',
    isOnline: true,
    lastVisited: new Date(2022,6,2),
    role: 'role',
}

// Create a function login with param user (with keys login and password)
// Check if login and password are not empty and then greet user
export function login(user: {login:string, password:string,}):void{
    if (user.login && user.login.length > 0){
        console.log(user.login);
    }
    if (user.password && user.password.length > 0){
        console.log(user.password);
    }
}
login(user1);
login(admin);