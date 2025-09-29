// Display Current Day and Time
let store = new Date()

const datenum = store.getDate()
const daynum = store.getDay()
const monthnum = store.getMonth()
const fullyear = store.getFullYear()

console.log(`Date:${datenum}  Day:${daynum}  Month:${monthnum} Fullyear:${fullyear}\n`)


const hours = store.getHours();
const minute = store.getMinutes();
const sec = store.getSeconds();
const millisec = store.getMilliseconds();
const time = store.getTime();

console.log(`Hours:${hours} Minutes:${minute} Seconds:${sec} Milliseconds:${millisec} Time:${time}\n`);


const datestring = store.toDateString();
const timestring = store.toTimeString();
const isostring = store.toISOString();
const localedatestring = store.toLocaleDateString()
const localtimestring = store.toLocaleTimeString()


console.log(`DateString:${datestring}\nTimeString:${timestring}\n IsoString:${isostring}\nLocaleDateString:${localedatestring}\n LocaleTimeString:${localtimestring}`)


const daysarr = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday' , 'Friday' , 'Saturday')
const captureday = store.getDay();
console.log(`Today is : ` , daysarr[captureday])

