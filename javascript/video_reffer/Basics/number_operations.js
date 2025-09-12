let val = 3 
let negval = -val
console.log(`Pos Val: ${val}`);
console.log(`Neg Val: ${negval}`);

let str1 = 'javascript'
let str2 = 'Object Oriented Lang'
console.log(`${str1 +' '+ str2}`); // Concate

console.log(`concate num + string: ${1 + str2} , type after concate:  ${typeof( 1 + str2)}`);

console.log(`str + num + num:  ${"1"+2+2} , Type : ${typeof ("1"+2+2)}`);   // recommanded
console.log(`num+num+str: ${((1+2)+"2")} , Type: ${typeof(1+2+"2")}`); // not recommanded

console.log(+true)   // not recommanded
console.log(+'')     // note recommanded

let num1 , num2 , num3
num1 = num2 = num3 = 2 + 2
console.log(`${num1 , num2 , num3}`);


let gamecounter = 100
gamecounter++    // +1 increment
++gamecounter
console.log(`Increment Gamecounter++: ${gamecounter}`);

let x = 3;
const y = x++;
console.log(`${x} ${y}`);