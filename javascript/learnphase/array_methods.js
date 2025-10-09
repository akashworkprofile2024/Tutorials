const arr = [1,2,3,4,5,6]
const arr1 = ['One','Two','Three','Four','Five','Six']

// Array Length
console.log(`length : ${arr.length}\n`);

// Array to String
const store = arr.toString();
console.log(`Array to String: ${typeof store}\n`)

// Array AT
console.log(`Array at: ${arr.at(2)}\n`);  

// Array Join
console.log(`Array Join: ${arr.join("")}\n`)

// Array pop
console.log(`Original array: ${arr}\nArray POP: ${arr.pop()}\n`)

// Array Push
console.log(`Push Array: ${arr.push(88)}\n`)

//Array shift
console.log(`Original Array: ${arr1}`)
console.log(`Shift Array: ${arr1.shift()}`)
console.log(arr1,'\n')

// Array unshift
console.log(`Unshift Array: ${arr1.unshift("Seven")}`)
console.log(`${arr1}\n`)
// Unshift Give's new array length 

// Array concat
console.log(`Array Concate: ${arr.concat(arr1)}\n`)

//  Array CopyWith
console.log(`Without Copywithin: ${arr1}`)
console.log(`Array CopyWithin: ${arr1.copyWithin(0,2,4)}`)
console.log(`Array CopyWithin: ${arr1.copyWithin(0,3,-1)}\n`)
/*
| `target` वह index जहाँ से values को copy करके paste किया जाएगा (required) 
| `start`   वह index जहाँ से copy करना शुरू किया जाएगा (optional, default = 0)
`end`     | वह index जहाँ तक copy करना है (optional, default = array.length) 
*/



// Array Flattening
const arr3 =  [1,2,[3,[4,[5]]],6,[7,8,9,],10]
const arr31 = ["Python",["Java",["Css",["Html"]]],"Javascript","Ruby","Php","Postgrel"]
console.log(`Array Flatting:`,arr3.flat(),"\n");
console.log(`Array Flatting:`,arr31.flat(3),"\n"); // 3 is depth to solve


// Array flatMap()
// const arr4 = ['python',"java","css",'html','Ruby','javascript']
const arr4 = [1,2,3,4,5,6,7]
const store1 = arr4.flatMap((n)=>{
    const arrempty = [];
    arrempty.length= n ;
    arrempty.fill(n);
     return arrempty;
}); console.log(`FlatMap1: `,store1)

const store2 = arr4.flatMap(x=>[x,x*10])
console.log(`FlatMap2: `,store2,'\n')


// Array Splice
const arr5 = ['python',"java","css",'html','Ruby','javascript']
console.log('Original Array' , arr5)
const store3 = arr5.splice(0 , 2 , 'Lemon' , 'Soda' , "Coke")
console.log(`Spliced Array:`,arr5,'\n',`Which Element removed:` , store3);
console.log(`Access Spliced Array:`,arr5[2],'\n')
/*
The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (2) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Soda" , 'Coke') define the new elements to be added.

The splice() method returns an array with the deleted items:

*/

// Array Splice to remove Elements
const arr6 = ['python',"java","css",'html','Ruby','javascript']
console.log(`Original Array: `,arr6)
console.log(`Splice Remove element: `,arr6.splice(0,1));
console.log(`Spliced Array: `, arr6,'\n')


// Array ES6 toSpliced
const arr7 = ['python',"java","css",'html','Ruby','javascript']
console.log(`Original Array: `,arr7)   // Arr7 unchange
console.log(`ES6-toSpliced Remove element: `,arr7.toSpliced(0,1)); // Copy arr7  and Change the value 
console.log(`Spliced Array: `, arr7,'\n') // arr7 unchange


// Array Alice
const arr8 = ['python',"java","css",'html','Ruby','javascript']
console.log(`Original Array: ${arr8}`)
console.log(`Array Slice: (1)`,arr8.slice(1)) //start from index 1
console.log(`Array Slice: (1,3)`,arr8.slice(1,3)) //  start from index 1  or index 3 and element after index 3 are  depericate
console.log(`Array Negative Slice: (-1)`,arr8.slice(-1))
console.log(`Array Negative Slice: (-5, -1)`,arr8.slice(-5 , -1),'\n')   // starts from index -5  to -2 , here -1 is depricate







