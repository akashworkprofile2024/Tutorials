// Immediately Invoked Function Expression (IIFE)
/*
IIFE (Immediately Invoked Function Expression) मतलब ऐसा function जो उसी समय बनता भी है और चलता भी है।

IIFE का उपयोग क्यों करते हैं?
Global Scope Pollution (ग्लोबल वेरिएबल्स को बचाने) से बचने के लिए।
Data को private रखने के लिए।
जब कोई code तुरंत चलाना हो, बिना बार-बार function call किए।

क्यों इस्तेमाल करते हैं?
ताकि हमारा code तुरंत execute हो।
बाहर की दुनिया (global variables) को pollute ना करे।
अंदर का data private रखा जा सके।
*/


// () => this is function defination ,  () => execution of the function


// Global Scope Pollution Example
// var counter = 0
// function increment(){
//     counter++
//     console.log(`Global Scope Pollution: `,counter);
// }
// increment()
// increment()


// // existing Code with IIFE
// let counterModule = (function () {
//     var counter = 0;

//     function increment1() {
//         counter++;
//         console.log(`Using IIFE: `,counter);
//     }

//     return {
//         increment1
//     };
// })();

// counterModule.increment1(); // 1
// counterModule.increment1(); // 2





(function myfun(){   // This is named IIFE
       console.log('DB Connected');
})();

( () =>{  // Simple IIFE
    console.log(`DB Connected Two`)
})();


// passing parameter in IIFE
((name) => {
      console.log('Welcome to Website', name)
})('Akash');


