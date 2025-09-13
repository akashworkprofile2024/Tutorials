/*
JavaScript में Control Flow क्या है?

Control Flow का मतलब है, आपके प्रोग्राम के statements किस order में execute होंगे।
यानि, किस तरह से आपका code एक लाइन से दूसरी लाइन पर जाएगा, और कौन सा हिस्सा कब चलेगा।

Control Flow के मुख्य प्रकार:

Sequential (क्रमिक):
Statements एक के बाद एक चलते हैं।

Conditional (शर्त आधारित):
if, else, switch जैसे statements से code का flow condition के हिसाब से बदलता है।

Loops (लूप्स):
for, while, do...while जैसे loops से code बार-बार चलता है।
*/ 

// IF STATEMENT
//condition should be true or false
/*
if(true){   
    //  condition true block of code executed
}

if(false){
    // condition false block of code not executed
}

Operators:
< , > , <=, >= , ==(equal) , ===(Check Type Also)  , !=(Not Equal) , !== (negative Check Type Also)

 */

// const isuserloggedin=true;
// const store = 'true'
// if(isuserloggedin  === store){
//     console.log('user logged in ')
// }
//   console.log(`Data Type Error: ${typeof store} `)


// BLOCK SCOPE
// const score = 400;
// if(score > 100){
//     let power = 'fly'
//     console.log(`User Power:${power}`);
// }
//    console.log(`User Power:${power}`); // Power is not defined


// Implicit Scope EXECUTE IN ONE LINE
// DONT USE MULTIPLE CONSOLE.LOG IN ONE LINE || IMMATURE CODE
// const balance = 1000;
// if(balance > 800) console.log(`Test`);




// NESTING IF ELSE

// const balance = 1000;
// const yourbalance = 1000;
// if(balance > yourbalance){
//      console.log('Medium Balance')
// }else if(balance < yourbalance){
//     console.log('Good Balance')
// }else if(balance  ===  yourbalance){
//     console.log('Better Balance')
// }else{
//     console.log('No balance')
// }


// LOGICAL AND OR NOT
// const userloggedin = true;
// const debitcard = true;
// const loginInfromgoogle = false;
// const loginInfromemail = true;
// if(userloggedin  && debitcard &&(loginInfromgoogle|| loginInfromemail)){
//     console.log(`Allow to Buy Course`);
// }


//  SWITCH CASE
// switch (key){
//     case value:
//      break;
//     default:
//         break;
// }


// const month = 3 
// switch(month){
//     case 1:
//         console.log('January')
//         break;
//     case 2:
//         console.log('february')
//         break;    
//     case 3:
//         console.log('March')
//         break;    
//     default:
//         console.log('No Month Found')
//         break;    
// }


// TRUTHY AND FALSY VALUES

// Truthy values suppose true in condition
//Falsy values suppose false in condition

// const userEmail = 'akash@gmail.com'
// if(userEmail){
//     console.log(`Got user email`);
// }else{
//     console.log(`Dont have Email`);
// }

// falsy values
// false , 0  , -0 , BigInt On , "" , null , undefined , NaN

// Trithy values
// true, {} , [],'0',function(){},new Date(),'false',12n," ",{empy object},[]


// CHECKING EMPTY OBJECT    
const emptyobj={}

if(Object.keys(emptyobj).length === 0 ){
    console.log(`Object is Empty`);
}

// Nullish Coalescing Operator (??) : null  undefined

// let val1;
// // val1 = 5??10;  // 5 
// // val1=null ?? 10; // 10
// // val1= undefined??10; //10
// val1 = null ?? 15 ?? 10;
// console.log(val1);


// TERNARY OPERATOR
// CONDITION ? TRUE : FALSE

const num =2;
const isEven = num % 2 === 0 ? console.log('Even Number'):console.log ('Odd Number');

const person = 18;
const canvote = person >=18 ? 'Can Vote':'Cannot Vote';
console.log(canvote);

