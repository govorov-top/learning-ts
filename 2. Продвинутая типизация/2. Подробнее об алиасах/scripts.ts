/** Подробнее об алиасах **/
type Union1 = 'a' | 'b' | 'c';
type Union2 = 'a' | 'e' | 'c';
type Union3 = Union1 | Union2; // "a" | "b" | "c" | "a" | "e" | "c"
type Union4 = Union1 & Union2; // ("a" & "a") | ("c" & "c")

type User = {
    readonly email : string,
    readonly login: string,
    password: string
}

type Person = {
    readonly firstName: string,
    lastName: string,
    phone?: string,
    yearOfBirth?: number,
}

type Employee = {
    contractStart: number
} & User & Person;

type Developer = {
    skills: string[],
    phone: string,
    level?: 'junior' | 'meddle' | 'senior',
    say(arg: number): void,
    code?: (arg: string) => void
} & Employee;

const user1: Developer = {
    say(arg: number): void {},
    phone: "",
    skills: [],
    contractStart: 28,
    firstName: "",
    lastName: "",
    login: "",
    password: "",
    email: 'w'
}

export {}