"use strict";
/** Enum **/
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Error"] = 500] = "Error";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["NotAuth"] = 403] = "NotAuth";
})(StatusCode || (StatusCode = {}));
const my = ShapeKind.Circle;
const circle1 = {
    kind: ShapeKind.Circle,
    radius: 2
};
var Grades;
(function (Grades) {
    Grades["Junior"] = "Junior";
    Grades["Middle"] = "Middle";
    Grades["Senior"] = "Senior";
})(Grades || (Grades = {}));
const dev3 = {
    login: 'Junior',
    skills: ['1', '2'],
    level: Grades.Junior,
};
function upGrade(developer) {
    if (developer.level === Grades.Junior) {
        developer.level = Grades.Middle;
    }
    else if (developer.level === Grades.Middle) {
        developer.level = Grades.Senior;
    }
}
upGrade(dev3);
