const d = new Date("2025-03-25");
console.log(`getFull Year: ${d.getFullYear()}`);

const e = new Date();
console.log(`getFullYear-Present Year: ${e.getFullYear()}`);

console.log(`Get Month: ${d.getMonth()}`);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const todaydate= new Date()
console.log(`${months[todaydate.getMonth()]}`); 

const gh = new Date();
console.log(`Get Hours: ${gh.getHours()}`);
console.log(`Get Minute: ${gh.getMinutes()}`);
console.log(`Get Seconds: ${gh.getSeconds()}`);
console.log(`Get Milliseconds: ${gh.getMilliseconds()}`);
console.log(`Get Day: ${gh.getDay()}`);