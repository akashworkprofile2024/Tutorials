// Create New Set
const createarr = new Set([1,"Akash",3])
console.log(createarr);

// Access Set Element from Set
for(const x of createarr){
    console.log(x)
}

// Create array from Set
let store = [];
for(let x of createarr){
    store.push(x)
}
console.log(`Set => Array:`,store.join(','))


//Add new value in set

const createarr1 = ['Python','Css','Javascript','Html']

const addele = new Set();
createarr1.forEach((e)=>{
    addele.add(e)   //   add element one by one
})
console.log(`Add element to Set: `, addele);
console.log(`InstanceOf Set: `,addele instanceof Set)

/*
A JavaScript Set एक collection होता है unique values का।

हर value सिर्फ एक बार ही Set में आ सकती है।

Values किसी भी प्रकार की हो सकती हैं — primitive values या objects।
*/
