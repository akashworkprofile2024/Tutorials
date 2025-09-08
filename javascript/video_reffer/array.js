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

array.unshift(9) // 9 add on starting of the array
console.log(`${array}`);
