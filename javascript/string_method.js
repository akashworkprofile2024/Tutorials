let stringvar = 'Heelo'
let stringvar2 = 'Javascript'
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
