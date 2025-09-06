// Primitive Type

// 7 types : String , Number , Boolean , Null , Undefined , Symbol => make value unique ,  Bigint => big value or scientific  , 

const score =100
console.log(`Score Datatype: ${typeof 100}`);

const islogin = false
console.log(`islogin Datatype: ${ typeof islogin}`);

const emptyvar = null
console.log(`Null Datatype: ${typeof emptyvar}`);

const id = Symbol('1243')
console.log(`${typeof id}`);
const id1 = Symbol('1234')
console.log(`${typeof id1}`);
console.log(`${id === id1}`);

const bignumber = 798098263n // n represent Bigint
console.log(`${typeof bignumber}`);


// Non Primitive or Refference Type

// Array , Objects , Functions 

const lang = ['java','python','css','ruby']
console.log(`${typeof lang}`);

let empid={
    username : 'personname',
    age : 50,
}
console.log(`${typeof(empid)}`);


const storefun = function(){
      console.log(`${'Hello Javascript'}`);
}

console.log(`${typeof storefun}`);    // function object


/* 

Is Javascript Dynamic or Static Type Language ? 
Dynamic typing का मतलब है कि आपको variable declare करते समय उसका data type specify करने की जरूरत नहीं होती। और एक ही variable को आप अलग-अलग प्रकार के data assign कर सकते हैं।

*/

/*
    Stack Used in   -> Primitive Type   -> give always copy
     Heap Used in  -> (Non Primitive) -> give always refference
*/

const username='Akash Biswas'  // =>   
let anothername = username 
anothername = 'Codetokaroyaar'   // copy value of original one
console.log(`${anothername}`);
console.log(`${username}`);


let user1 ={
    email:'user@gmai.com',
    upi:'user@yesbank'
}

let user2=user1        // refference of user1
user2.email = 'akash@gmail.com'

console.log(`${user1.email}`);
console.log(`${user2.email}`);