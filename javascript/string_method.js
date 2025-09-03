let stringvar = 'Heelo'
let stringvar2 = 'Javascript'
let stringvar3 = 'Hello World \uD800'
let stringvar4 = '              Fire High              '
let price = '5'
let animals = ' all cats awesome , but cats very harmful'
let arraychar = "a,b,c,e,f,g,h"

console.log(`String Length: ${stringvar.length}`);
console.log(`String CharAt: ${stringvar.charAt(0)}`);
console.log(`String CharCodeAt: ${stringvar.charCodeAt(0)}`);
console.log(`String CodePointAt: ${stringvar.codePointAt(0)}`);
console.log(`String At: ${stringvar.at(2)}`);
console.log(`String Access: ${stringvar[2]}`);
console.log(`String concatination: ${stringvar.concat(' ',stringvar2)}`);
console.log(`String Slice Backside: ${stringvar.slice(-1)}`);
console.log(`String Slice Frontside: ${stringvar.slice(0)}`);
console.log(`String Slice 1 , 3: ${stringvar.slice(1,3)}`);   // exclude index 3
// console.log(`String Slice negative: ${stringvar2.slice(-1,-5)}`);
console.log(`String substring 3, 8: ${stringvar2.substring(3,8)}`); // without excluding
console.log(`String UpperCase: ${stringvar.toUpperCase()}`);
console.log(`String LowerCase: ${stringvar.toLowerCase()}`);
console.log(`String isWellForamated: ${stringvar.isWellFormed()}`);
console.log(`String isWellForamated: ${stringvar3.isWellFormed()}`);
console.log(`String isWellForamated: ${stringvar3.toWellFormed()}`);
console.log(`String trim: ${stringvar4.trim()}`);    // we use trimStart() and  trimEnd()
console.log(`String Pad: ${price.padStart(4,'0')}`);  // we use padEnd 
console.log(`String Replace: ${stringvar.replace('Heelo' , 'Hello')}`);
console.log(`String ReplaceAll: ${animals.replaceAll('cats','dogs')}`);

let str = "apple,banana,orange";
let arr = str.split(",");
console.log(arr); 
// Output: ["apple", "banana", "orange"]
