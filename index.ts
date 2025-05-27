let city = "New York"; // string
let population = 8400000; // number
const age = 32; // number
let oldAge = 79 as const; // number
let newAge = oldAge; // number
let data = new Map(); // map or any
let score = [90, 86, 100]; // object or array
type Primitive = string | number | boolean; // string | number | boolean
type CustomName = "John" extends string ? string : "John"; // string
type CustomAge = typeof newAge extends number ? 79 : number; // 79
type CheckData = typeof data extends Object ? true : false; //  true
type CheckScore = typeof score extends never ? {} : []; // array

/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */

// age = 85; // not valid
// score.push(10); // true
// score.push("New Score"); // false should be a number
// let customAge: CustomAge = 50; // false should be 79
// let primitive: Primitive = new Date(); // false should string or number or boolean
// let years: CheckScore = []; // true it has type of array
