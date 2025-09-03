
const d  = new Date("2025-03-25")
console.log(`ISO DATE: ${d}`);

const e = new Date("2025-02")
console.log(`Year - Month: ${e}`);

const y = new Date('2025')
console.log(`Only Year = ${y}`);

const w = new Date("2015-03-25T12:00:35Z");
console.log(`Date -Time: ${w}`);

const shotdate = new Date('03/25/2025')
console.log(`shot Date: ${shotdate}`);

const ds= new Date("Mar 25 2015");
console.log(`Long Date: ${ds}`);
/*
There are generally 3 types of JavaScript date input formats:
Type	Example
ISO Date	"2015-03-25" (The International Standard)
Short Date	"03/25/2015"
Long Date	"Mar 25 2015" or "25 Mar 2015"
*/