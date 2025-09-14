// For Loop

// ["" , "" , ""] // Simple array

// [{},{},{}] // Objects array

// const arr = ["Python","Javascript","Java","C++","C"]

// for(const num of arr){
//      console.log(num , typeof num);
// }

// const greetings = "Hello World"
// for(const greet of greetings){
//     console.log(`Each Char is: ${greet}`);
// }



// =========  ===  MAPS ============== 

// const arr = new Map();
// arr.set('IN','INDIA')
// arr.set('USA','UNITED STATES OF AMERICA')
// arr.set('FR','FRANCE')

// console.log(arr);

// for (const key of arr){
//     console.log(key);
// }

// for(const [key,value] of arr){
//       console.log(key , '>>', value);
//     }


// for(const fetch in arr){
//     console.log(arr);
// }

// for(const fetch in arr){
//     console.log(arr);
// }

/*
आपको इस code से कोई output क्यों नहीं मिल रहा, इसका कारण है कि आप for...in loop का इस्तेमाल कर रहे हैं, जो Map के लिए काम नहीं करता।

Explanation in Hindi:
for...in loop सिर्फ objects और arrays के indexes/keys के लिए होता है।
लेकिन Map एक अलग data structure है, इसमें for...in काम नहीं करता।
Map को iterate करने के लिए आपको for...of या forEach का इस्तेमाल करना चाहिए।
निष्कर्ष:
for...in से Map पर कोई output नहीं मिलेगा, क्योंकि ये सिर्फ object के लिए बना है, Map के लिए नहीं। Map के लिए for...of या forEach यूज़ करें।
*/

// ===========   MAPS END ==========



// ========== FOR IN LOOP ==============

// SYNTAX:
/*

For Loop Structure:
for(initialization; condition; increment/decrement){
    // Loop body
}

For...in Loop Structure:
for(const key in object_or_array){
    // Loop body
}

*/

// const myobject ={
//     'game1': 'Nfs',
//     'game2':'fifa',
//     'game3':'pubg'
// }

// for(const key in myobject){
//     console.log(`${key}  >>  ${myobject[key]}`);
// }




// const program=['java','python','c++','C#']

// for(const index in program){
//     console.log(`${program[index]}`);
// }

//  =========== FOR IN LOOP END ============


const arr = new Array('Akash','Rahul','Sahil')

// // ForEach with Regular Function
// arr.forEach(function (item){
//      console.log(`Items: `,item);
// });




// // ForEach with Arrow Function
// arr.forEach(item => console.log(`Items: ${item}`))


// function printMe(item){
//     console.log(item);
// }

// arr.forEach(printMe)



// // ACCESSING INDEX AND WHOLE ARRAY
// arr.forEach((item , index , arrlist) => {
//      console.log(item , index , arrlist)
// })



// const MYCODING = [
//     {
//         PRO : 'JAVASCRIPT',
//         LANFILE : 'JS' 
//     },
//     {
//         PRO : 'PYTHON',
//         LANFILE : 'PY' 
//     },
//     {
//         PRO : 'HYPER TEXT',
//         LANFILE : 'HTML' 
//     }
// ]

// MYCODING.forEach((item) => {
//     console.log(item.PRO, item.LANFILE);
// })
