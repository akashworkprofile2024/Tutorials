let text = "Please locate where 'locate' occurs!"
console.log(`Index_OF: ${text.indexOf('locate')}`)
console.log(`Index_OF: ${text.lastIndexOf('locate')}`)
console.log(`string serach: ${text.search('locate')}`);
console.log(`string serach: ${text.search(/locate/)}`);
console.log(`Include: ${text.includes('locate')}`);

let text1 = "Hello world, welcome to the universe.";
let email = 'akash@gmail.com'
console.log(`String Startswith: ${text1.startsWith('Hello')}`);
console.log(`String Endswith: ${email.endsWith('@gmail.com')}`);

