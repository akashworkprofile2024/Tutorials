// array 

const array = [1,2,3,4,5,6,'Fire' ,true]
console.log(`Array: ${array[0]}`); // access value

//  array always make swallo copy - > give same refference point , deep copy -> doesn,t give same refference

const lang = new Array ('Python','Css','Html')
console.log(`${lang}`); 

// Array Methods
console.log(`Push Element 10 and 15,16: ${array.push(10), array.push(15, 16) , array}`);
console.log(`Array Length: ${lang.length}`);
console.log(`Pop Element 16: ${array.pop() , array}`);

array.unshift(9) // 9 add on starting of the array , work like push
console.log(`${array}`); 

array.shift() // pop out 9 from the starting of the array Work like pop
console.log(`${array}`);

console.log(`Array Includes: ${array.includes(9)}`);
console.log(`Array IndexOf: ${array.indexOf(9)}`);

const rebirth = array.join()
console.log(`Typeof Join : ${typeof rebirth} \n`);


// slice and splice

console.log(`A: ${array}`);
console.log(`Slicing -> Temporary Change: ${array.slice(1,3)}`);
console.log(`After Slice: ${array}`);

console.log(`B: ${array}`);
console.log(`Splicing -> Permanent Change:  ${array.splice(1,3)}`);

console.log(`Check after Splice: ${array}`);