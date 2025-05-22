"use strict";
function multplyByTwo(number) {
    if (typeof number === "number") {
        return number * 2;
    }
    return "Invalid input: expected a number";
}
// anotation variable or assign type
let firstname = "Mark";
let age = 20;
let today = new Date();
let unique = Symbol();
function addNumbers(a, b) {
    return a + b;
}
// inference - judges or infers the type
let finalResult = addNumbers(2, 3);
