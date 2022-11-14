/** Подробнее об интерфейсах **/
interface User {
    readonly email : string,
    readonly login: string,
    password: string
}

/* a lot of code */

interface User {
    isOnline?: boolean
}

/*interface Window {
    isAuth?: boolean
}
window.isAuth;*/

interface Person{
    readonly firstName: string,
    lastName: string,
    phone?: string,
    yearOfBirth?: number,
}

interface Employee extends User, Person{
    contractStart: number
}
interface Developer extends Employee{
    skills: string[],
    phone: string,
    level?: 'junior' | 'meddle' | 'senior',
    say(arg: number): void,
    code?: (arg: string) => void
}

/*class MyDeveloper implements Developer{
    contractStart: number;
    readonly email: string;
    readonly firstName: string;
    lastName: string;
    readonly login: string;
    password: string;
    phone: string;
    skills: string[];

    constructor() {
    }

    say(arg: number): void {
    }
}*/

export const user1: Developer = {
    say(arg: number): void {
    },
    phone: "",
    skills: [],
    contractStart: 28,
    firstName: "",
    lastName: "",
    login: "",
    password: "",
    email: 'w'
}