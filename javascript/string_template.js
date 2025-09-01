let string_line=`Javascript is "awesome"`;
console.log(string_line);

// Inter-polation

let name = 'Akash';
let lname = 'Biswas';
let age = 26;

console.log(`Name: ${name} ${lname}\nAge: ${age}`);

// Expression Substitution

let price=10;
let VAT=0.25;

let total=(`Total: ${(price *(1 + VAT)).toFixed(2)}`);
console.log(total);


