let d = new Date()
console.log(`${d.toString()}`);
console.log(`${d.toDateString()}`);
console.log(`${d.toLocaleString()}`);

let c = new Date(2022,0,23) // 0 is Jan
console.log(`${c.toDateString()}`);

let e = new Date(2022 , 0 , 23 , 5 ,3)
console.log(`${e.toLocaleString()}`); 