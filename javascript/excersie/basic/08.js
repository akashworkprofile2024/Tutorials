const store = new Date();
const storeyear = store.getFullYear();   // 2025
const christmas = new Date(storeyear , 11 , 25)
if(store > christmas){
       christmas = new Date(storeyear + 1 , 11 , 25)    
}

const difftime = christmas - store;
const diffdays = Math.ceil(difftime / (1000 * 60 *60*24));


console.log(`🎄 Days left until Christmas: ${diffdays} days`);




