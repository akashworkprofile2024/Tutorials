let d = new Date()
console.log(`${d.toString()}`);
console.log(`${d.toDateString()}`);
console.log(`${d.toLocaleString()}`);

let c = new Date(2022,0,23) // 0 is Jan , specific Date
console.log(`${c.toDateString()}`);
 
let e = new Date(2022 , 0 , 23 , 5 ,3)   
console.log(`${e.toLocaleString()}`); 

 
let ee = new Date("2023-05-25")  
let ef = new Date('05-25-2000')
console.log(`${ee.toLocaleDateString()}`);
console.log(`${ef.toLocaleString()}`);


// Timestamp
let mytp = Math.floor(Date.now()/1000)
console.log(`${mytp}`);
console.log(`${ef.getTime()}`);


// Get Feature
let test = new Date()
console.log(`Get Time: ${test.getTime()}`);
console.log(`Get Months: ${test.getMonth()}`);
