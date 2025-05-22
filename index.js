"use strict";
let id = Symbol(1234);
let alphabeticId = Symbol("id");
let user = {
    [id]: "123",
    name: "Mark",
    getId() {
        return this[id];
    },
};
// user.id - not accessible
console.log(user.name);
console.log(user.getId());
