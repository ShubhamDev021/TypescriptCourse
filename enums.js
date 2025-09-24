// Numeric enum with default value
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log("Up: ".concat(Direction.Up));
console.log("Left: ".concat(Direction.Left));
// Numeric enum with custom value
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 3] = "Inactive";
    Status[Status["Pending"] = 7] = "Pending";
})(Status || (Status = {}));
console.log("Active: ".concat(Status.Active));
console.log("Inactive: ".concat(Status.Inactive));
console.log("Pending: ".concat(Status.Pending));
// String enum
var Roles;
(function (Roles) {
    Roles["Admin"] = "ADMIN";
    Roles["User"] = "USER";
    Roles["Guest"] = "GUEST";
})(Roles || (Roles = {}));
console.log("Admin: ".concat(Roles.Admin));
console.log("User: ".concat(Roles.User));
console.log("Guest: ".concat(Roles.Guest));
// Enum in function
function checkStatus(status) {
    if (status === Status.Active) {
        console.log("User is Active");
    }
    else {
        console.log("User is Not Active");
    }
}
checkStatus(Status.Active);
checkStatus(Status.Inactive);
