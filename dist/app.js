"use strict";
// Function
function add(n1, n2) {
    return n1 + n2;
}
;
function add2(n1, n2) {
    return n1 + n2;
}
;
// void
function add3(n1, n2) {
    console.log(n1 + n2);
}
;
// with Callback
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
;
addAndHandle(10, 20, function (result) {
    console.log(result); // 30
});
// Object
// Explicit way to declare
var person_explicit = {
    name: 'Max',
    age: 30
};
// Common way to declare
var person_common = {
    name: 'Max',
    age: 30
};
// Tuple
var role = [2, 'author'];
// Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var Role_IDfer;
(function (Role_IDfer) {
    Role_IDfer[Role_IDfer["ADMIN"] = 5] = "ADMIN";
    Role_IDfer[Role_IDfer["READ_ONLY"] = 100] = "READ_ONLY";
    Role_IDfer[Role_IDfer["AUTHOR"] = 201] = "AUTHOR";
})(Role_IDfer || (Role_IDfer = {}));
;
// Literal types
function combine(n1, n2, resultConversion // Literal type
) {
    if (resultConversion === 'A')
        console.log(n1 + n2);
    else
        console.log("resultConversion should be correct");
}
;
combine(1, 2, 'A'); // 3
combine(1, 2, 'B'); // resultConversion should be correct
