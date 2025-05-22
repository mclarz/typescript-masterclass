function multplyByTwo(number: unknown) {
  if (typeof number === "number") {
    return number * 2;
  }
  return "Invalid input: expected a number";
}
/**
 * Error;
 * String;
 * Number;
 * Date;
 * Symbol;
 * Boolean
 * Weakmap
 * Weakset
 * Bigint
 * RegExp
 * Function
  * Map
  * Set
  * Array
  * Object
 *
 */

// Declaration - when youre declaring a type
type CustomString = string;
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = Symbol;

// anotation variable or assign type
let firstname: CustomString = "Mark";
let age: CustomNumber = 20;
let today: CustomDate = new Date();
let unique: CustomSymbol = Symbol();


function addNumbers(a:number, b:number) {
  return a + b;
}
// inference - judges or infers the type
let finalResult = addNumbers(2, 3);

