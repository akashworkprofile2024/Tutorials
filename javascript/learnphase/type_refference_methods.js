// Array Entries
let arr = ["Python" , "Java" , "Css" , "Javascript"]

const arriterator = arr.entries();
let text =""

Array.from(arriterator).forEach((e)=>{
      text +=e + "\n"
});console.log(`entries`,text)


// +==========================================
let arr1 = Int16Array.from(["Python" , "Java" , "Css" , "Javascript"])
const store = arr1.filter(e=>e === "Java")
console.log(`Filter:` , store,"\n")

let arr2 = Int16Array.from([1,2,3,4,5,6])
const store1 = arr2.filter(e=>e === 3 )
console.log(`Filter: ` , store1,'\n') 
/*
The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.
*/
// =============================================

// Array Find
let arr3 = ["Python","Java","Css","Javascript"]
// let arr3cpy = [1,2,34,4,5,6]
const store2 = arr2.find(e=>e === 2)
console.log(`Array Find: `,store2)

// ============================================

// Array Findindex
let arr4 = ["Python","Java","Css","Javascript"]
const store3= arr4.findIndex(e=> /css/i.test(e))
console.log(`Array FindIndex: ${store3}`);

/*
1. findIndex() method उस पहले element की पोज़िशन (index) लौटाता है जो शर्त को पूरा करता है।

2. यह method array के हर element पर एक function चलाता है।

3. अगर कोई भी element शर्त को पूरा नहीं करता, तो यह -1 लौटाता है।

4. यह method खाली (empty) element्स के लिए function नहीं चलाता।

5. यह method मूल (original) array को नहीं बदलता।
*/
// +++++++++++++++++++++++++++++++++++++++++++++

// Array FindLast()
let arr5 = ["Python","Java","Css","Javascript"]
const store4 = arr5.findLast(e=> e === "Java")
console.log('Array FindLast:',store4)
/*
1. findLast() method उस आख़िरी element की वैल्यू लौटाता है जो एक टेस्ट (शर्त) को पास करता है।

2. यह method हर element पर एक function चलाता है।

3. अगर कोई भी element शर्त को पूरा नहीं करता, तो यह undefined लौटाता है।

4. यह method खाली (empty) elements के लिए function नहीं चलाता।

5. यह method ओरिजिनल (मूल) array को नहीं बदलता।
*/
//===========================================

// Array FindlastIndex()

const store5 = arr5.findLastIndex(e=> e === "java")
console.log(`Array FindLastIndex: ${store5} \n`)
/*
1. findLastIndex() method हर array element पर एक function चलाता है।

2. यह method उस आख़िरी element का index (स्थान) लौटाता है जो शर्त (test) को पूरा करता है।

3. अगर कोई भी मेल खाने वाला element नहीं मिला, तो यह -1 लौटाता है।

4. यह method खाली (empty) element्स के लिए function नहीं चलाता।

5. यह method मूल (original) array को नहीं बदलता।
*/

//===========================================

// Array ForEach()
let arr6 = [1,2,3,4,5,6,7,8]
let arrstore = [];
arr6.forEach((e)=>{
      arrstore.push(e*2)
})
console.log(arrstore)

let arrstore1 = [];
const arr6cpy = arr6.forEach(function(e,index,array){
         arrstore1 = index + ":" + e;
         console.log(arrstore1)
})
console.log(`\n`)

/*
1. forEach() मेथड ऐरे के हर एलिमेंट के लिए एक फ़ंक्शन को कॉल करता है।

2. यह मेथड खाली (empty) एलिमेंट्स के लिए फ़ंक्शन नहीं चलाता।
*/
//===========================================

// Array From()
const arr8 = Int32Array.from("1234453456456467")
console.log(`Array From: ${arr8}`)

const arr9 = ["Python","Java","Css","Javascript"]
const store6 = Array.from(arr9 , (x) => x === "Python")
console.log('Array From String: ',store6)

const arr10 = [1,2,3,4,5,6,7,8]
const store7 = Array.from(arr10 , (x) => x * 3)
console.log('Array From Number: ',store7)
/*
1. from() मेथड किसी भी ऐसे ऑब्जेक्ट से टाइप्ड ऐरे बनाता है जिसमें length प्रॉपर्टी होती है।

2. from() मेथड किसी भी iterable object (जैसे string, array, set आदि) से टाइप्ड ऐरे बनाता है।
*/
//===========================================

// Array Includes
const arr11 = ['Python','Java',1,"Apple"]
console.log(`Array Includes String : ${arr11.includes("Java")}\n`)
console.log(`Array Includes numeric : ${arr11.includes("1")}\n`)
/*
1. includes() method true लौटाता है अगर typed array में दी गई value मौजूद होती है।

2. अगर value नहीं मिलती, तो includes() method false लौटाता है।

3. includes() method case sensitive होता है।
*/
//===========================================

// Array IndexOf
const arr12 = ['Python','Java','Css','Javascript','Java']
let arr12index_store = [] ; 
arr12.forEach(e =>{
      arr12index_store.push(arr12.indexOf(e))
})
console.log(arr12index_store)

/*
1. indexOf() method किसी दिए गए value का पहला index (स्थान) लौटाता है।

2. अगर value नहीं मिलती है, तो indexOf() method -1 लौटाता है।

3. indexOf() method एक तय किए गए index से शुरू होकर left to right (दिए गए start position से array के end तक) search करता है।

4. डिफ़ॉल्ट रूप से search पहले element से शुरू होकर आखिरी element तक होता है।

5. अगर start value negative हो, तो गिनती आखिरी element से होती है (लेकिन search फिर भी left to right होता है)।*/

//===========================================

const arr13 = ['Python','Java','Css','Javascript','Java']
console.log(`Array Last index Of:` , arr13.lastIndexOf("Java"))

/*1. lastIndexOf() method किसी दिए गए value का आखिरी index (स्थान) लौटाता है।

2. अगर value नहीं मिलती है, तो lastIndexOf() method -1 लौटाता है।

3. lastIndexOf() method एक तय किए गए index से शुरू होकर right to left (दिए गए position से array की शुरुआत तक) search करता है।

4. डिफ़ॉल्ट रूप से search last element से शुरू होकर first element पर खत्म होता है।

5. अगर start value negative हो, तो गिनती last element से होती है (लेकिन search फिर भी right to left होता है)।*/
//===========================================

const arr14 = {name:'Akash' , age:22 , language:'Hindi , English'}
console.log(`Array Values: `, Object.values(arr14))
console.log(`Array Keys: `, Object.keys(arr14))
console.log(`Array Entries: `, Object.entries(arr14),'\n')

/*Object में .keys() method नहीं होता।

.keys() एक static method है जो Object पर कॉल होता है, न कि object instance पर।

*/

//===========================================

// Array Map
const arr15  = [1,2,3,4,5,6,7,8]
console.log(`Array Map: `,arr15.map(action),'\n')

function action(fire){
      return fire * 3 
}

/*
map() एक नया array बनाता है हर array element के लिए एक function को call करके।

map() खाली elements के लिए function को execute नहीं करता।

map() original array को change नहीं करता।*/
//===========================================

// Array Reduce
function reducefun(num1 , num2){
      return num1 - num2
}
const arr16 = [1,2,3,4,5]
const store8 = arr16.reduce(reducefun)
console.log(`Array-Reduce: `,store8)


const numbers = [1, 2, 3, 4];
const result = numbers.reduce(function(total, current) {
    return total + current;
}, 1);
console.log(`Array-Reduce: `, result , '\n'); // Output: 1

/*reduce() method हर array element के लिए एक function को execute करता है।

reduce() method एक single value return करता है: accumulated result।

reduce() method empty array elements के लिए function को execute नहीं करता है।

reduce() method original array को change नहीं करता है।

Typed-array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

total → वो accumulated value है जो हर iteration के बाद return होती है।

currentValue → अभी का element जिस पर function काम कर रहा है।

currentIndex → अभी के element का index (optional)।

arr → original array जिस पर reduce apply हो रहा है (optional)।

initialValue → reduce की शुरुआत में दी गई initial value (optional, लेकिन recommended होती है)।

अगर initialValue दिया गया है:

तो total उसकी value से शुरू होता है और loop array के पहले element से शुरू होता है।

अगर initialValue नहीं दिया गया:

तो total array के पहले element की value लेता है, और loop array के दूसरे element से शुरू होता है।

*/
//===========================================

// Array Set
const arr17 = Int16Array.from([1,2,3,4,5,6,7,8])
arr17.set([9,10,11])   // arr17.set([9,10,11],1)     // 1 is index pos
console.log(arr17)
