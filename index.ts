const safeInt = Number.MAX_SAFE_INTEGER;

console.log(safeInt);

const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;

console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);

let bigInt: bigint = BigInt(1234);

let bigInt2: bigint = 123456n;
console.log(bigInt);
console.log(bigInt2);

let c: bigint = bigInt - bigInt2

let e:bigint = 1234.5n;

let f = Math.log(1234.5);