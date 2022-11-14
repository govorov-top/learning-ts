/** Enum **/
enum ShapeKind {
    Circle,
    Square
}
enum StatusCode {
    Error = 500,
    NotFound = 404,
    NotAuth = 403,
}
const my = ShapeKind.Circle;

interface Circle {
    kind: ShapeKind.Circle,
    radius: number
}
interface Square {
    kind: ShapeKind.Square,
    sideLength: number
}

const circle1 : Circle = {
    kind: ShapeKind.Circle,
    radius: 2
}

enum Grades {
    Junior = 'Junior',
    Middle = 'Middle',
    Senior = 'Senior',
}
interface Dev{
    login: string,
    skills: string[],
    level: Grades,
}
const dev3:Dev = {
    login: 'Junior',
    skills: ['1','2'],
    level: Grades.Junior,
}
function upGrade(developer: {level:Grades}) {
    if (developer.level === Grades.Junior){
        developer.level = Grades.Middle;
    }else if (developer.level === Grades.Middle){
        developer.level = Grades.Senior;
    }
}
upGrade(dev3);