// Create New Set
const createarr = new Set([1,"Akash",3])
console.log(`Set Created: `,createarr , typeof createarr,'\n');

// Access Set Element from Set
for(const x of createarr){
    console.log(x)
}
console.log('\n')

// Create array from Set
let store = [];
for(let x of createarr){
    store.push(x)
}
console.log(`Set => Array:`,store.join(','),`\n`)


//Add new value in set

const createarr1 = ['Python','Css','Javascript','Html']

const addele = new Set();
createarr1.forEach((e)=>{
    addele.add(e)   //   add element one by one
})
console.log(`Add element to Set: `, addele);
console.log(`InstanceOf Set: `,addele instanceof Set,'\n')

// Set Size
console.log(`Set Size:` , createarr.size,'\n')

// Has Method
const arr = [1,"python",'Java',2]
let store1 = new Set()
for(const xx of arr){
    store1.add(xx)
}

if(store1.has('python')){
    console.log(`Using Set Has: `,true,'\n');
}else{
    console.log(`Using Set Has: `,false,'\n')
}


// ForEach
const createarr2 = new Set([22, 'Tanjiro' , 'Hugo' , '35'])
console.log(`ForEach in Set:`)
createarr2.forEach((e)=>{
    console.log(e  + "'s")
});
console.log('\n')

// Keys
let keys_store = '';
for(const  ee of createarr2.values()){
    keys_store += ee + ","
}
console.log("Keys: " , keys_store.split().slice().join(','))

// Values
const createarr3 = new Set(['Apple','Mango','Banana','Grapes','Apple'])
let value_store = "";
for(const ele of createarr3.values()){
    value_store += ele + ","
}
console.log("Values", value_store,'\n')

// Entries
const createarr3cpy = new Set(['Apple','Mango','Banana','Grapes','Apple'])
let entries_store;
for(const enele of createarr3cpy.entries()){
    entries_store = enele;
}
console.log(`Entires` , createarr3cpy.entries(),'\n')



/*
A JavaScript Set एक collection होता है unique values का।

हर value सिर्फ एक बार ही Set में आ सकती है।

Values किसी भी प्रकार की हो सकती हैं — primitive values या objects।

The has() method returns true if a specified value exists in a set.

*/
