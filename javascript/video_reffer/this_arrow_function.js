// this keyword tell about current context

// const user = {
//     username: 'Akash',
//     price: 999,

//     loginmsg:function(){
//          console.log(`${this.username} Welcome to Website`);
//         //  console.log(this); // tell about current  context
//     }
    
// }

// user.loginmsg()
// user.username = 'Rahul' // current username context change
// user.loginmsg()

// console.log(this);


// function one(){
//    let username = 'Akash'
//     console.log(this.username);
// }
// one()


// const  coffee = function(){
//      let username = 'Akash'
//      console.log(this.username);
// }

// const  coffee = () => {
//      let username = 'Akash'
//      console.log(username);
// }
// coffee()


// Basic Arrow Function 
const addtwo = (n1 , n2) =>{
     return n1 + n2
}

console.log(`Result Using Arrow Function: ${addtwo(3,4)}`);


// Arrow function with Implicit Return
const addanother = (n3,n4)=> n3 + n4
console.log(`Arrow With Implicit Return: ${addanother(3,5)}`);


// Arrow Function Object Return
const addanotherone=(num1,num2)

